'use client';

import React from 'react';
import { useMutation } from '@apollo/client';
import { JoinRoomDocument } from '@shared/api/graphql';
import { Button } from '@shared/ui';
import { useRouter } from 'next/navigation';

type Props = {
  token: string;
};

const ClientSide = ({ token }: Props) => {
  const [joinRoom] = useMutation(JoinRoomDocument);
  const router = useRouter();

  return (
    <main className="container h-without-header flex flex-col gap-2 md:gap-5">
      <Button
        size="lg"
        onClick={async () => {
          const { data } = await joinRoom({
            variables: {
              inviteToken: token,
            },
          });

          if (data) {
            router.push(`/rooms/${data.joinRoom.id}`);
          }
        }}
      >
        Join
      </Button>
    </main>
  );
};

export default ClientSide;
