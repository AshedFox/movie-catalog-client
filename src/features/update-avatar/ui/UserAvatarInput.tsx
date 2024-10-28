'use client';

import Image from 'next/image';
import { ChangeEvent, useRef, useState } from 'react';
import { useMutation } from '@apollo/client';
import { CreateUploadDocument, MediaTypeEnum, UpdateMeDocument } from '@shared/api/graphql';
import { Pencil } from 'lucide-react';
import axios from 'axios';
import { useToast } from '@shared/hooks/use-toast';
import { useSession } from '@features/auth/session';
import { Avatar, Progress } from '@shared/ui';

type Props = {
  avatarUrl?: string;
};

const UserAvatarInput = ({ avatarUrl }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [updateMe, { loading: loadingUpdate }] = useMutation(UpdateMeDocument);
  const [createUpload, { loading: loadingUpload }] = useMutation(CreateUploadDocument);
  const session = useSession();
  const { toast } = useToast();
  const [uploadProgress, setUploadProgress] = useState<number>();

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length === 1) {
      try {
        const { data: uploadData } = await createUpload({
          variables: {
            type: MediaTypeEnum.IMAGE,
          },
        });

        if (uploadData) {
          await axios.put(uploadData.createUpload.uploadUrl, e.target.files[0], {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/octet-stream',
            },
            onDownloadProgress(progressEvent) {
              if (progressEvent.progress) {
                setUploadProgress(progressEvent.progress * 100);
              }
            },
            onUploadProgress: (progressEvent) => {
              if (progressEvent.progress) {
                setUploadProgress(progressEvent.progress * 100);
              }
            },
          });
          const { data: updatedUser } = await updateMe({
            variables: {
              input: {
                avatarId: uploadData.createUpload.mediaId,
              },
            },
          });

          if (updatedUser) {
            await session.update();
            toast({
              title: 'Message',
              description: 'Successfully updated user avatar.',
              variant: 'success',
            });
          }
        }
      } catch (e) {
        toast({
          title: 'Error',
          description: 'Failed to update user avatar!',
          variant: 'destructive',
        });
      } finally {
        setUploadProgress(undefined);
      }
    }
  };

  return (
    <Avatar
      title="Update avatar"
      className="relative cursor-pointer w-24 h-24 md:w-32 md:h-32 xl:w-48 xl:h-48 group hover"
      onClick={() => inputRef.current?.click()}
    >
      {!!uploadProgress ? (
        <div className="z-[2] absolute inset-0 h-full w-full flex gap-2 bg-gray-100/50 items-center justify-center dark:bg-gray-700/50 p-3">
          <Progress className="w-full h-3" value={uploadProgress} />
        </div>
      ) : (
        <div className="z-[2] absolute inset-0 h-full w-full flex gap-2 bg-gray-100/50 opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center dark:bg-gray-700/50">
          <Pencil className="w-12 h-12" />
        </div>
      )}

      <Image
        src={avatarUrl ?? '/blank_profile.png'}
        alt="profile avatar"
        fill
        priority={true}
        className="object-cover"
      />
      <input
        disabled={loadingUpdate || loadingUpload}
        className="hidden"
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
      />
    </Avatar>
  );
};

export default UserAvatarInput;
