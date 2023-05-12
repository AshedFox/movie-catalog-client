'use client';

import Image from 'next/image';
import { ChangeEvent, useRef } from 'react';
import { useMutation } from '@apollo/client';
import { useUser } from '@entities/user';
import { UpdateAvatarDocument } from '@shared/api/graphql';

type Props = {
  avatarUrl?: string;
};

const UserAvatarInput = ({ avatarUrl }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [updateAvatar, { loading }] = useMutation(UpdateAvatarDocument, {
    fetchPolicy: 'network-only',
  });
  const { setUser } = useUser();

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length === 1) {
      const { data, errors } = await updateAvatar({
        variables: {
          file: e.target.files[0],
        },
      });

      if (data && !errors) {
        setUser(data.updateAvatar);
      }
    }
  };

  return (
    <>
      <Image
        src={avatarUrl ?? '/blank_profile.png'}
        alt="profile avatar"
        title="Update avatar"
        width={512}
        height={512}
        priority={true}
        className={
          'cursor-pointer rounded-full shrink-0 object-cover md:w-32 md:h-32 xl:w-48 xl:h-48'
        }
        onClick={() => inputRef.current?.click()}
      />
      <input
        disabled={loading}
        className="hidden"
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
      />
    </>
  );
};

export default UserAvatarInput;
