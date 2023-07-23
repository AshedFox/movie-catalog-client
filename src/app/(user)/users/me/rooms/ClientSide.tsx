'use client';

import React from 'react';
import { useUser } from '@entities/user';
import { useSuspenseQuery_experimental } from '@apollo/client';
import { GetRoomsDocument } from '@shared/api/graphql';
import { Button, List } from '@shared/ui';
import { CreateRoomBlock } from '@widgets/create-room-block';
import Link from 'next/link';
import clsx from 'clsx';

const ClientSide = () => {
  const { user } = useUser();
  const { data } = useSuspenseQuery_experimental(GetRoomsDocument, {
    variables: {
      limit: 10,
      offset: 0,
      filter: {
        or: [
          {
            ownerId: {
              eq: user?.id,
            },
          },
          {
            participantsConnection: {
              userId: {
                eq: user?.id,
              },
            },
          },
        ],
      },
    },
  });
  // const [deleteRoom] = useMutation(DeleteRoomDocument);
  // const [generateInvite] = useMutation(GenerateRoomInviteDocument);

  if (!data) {
    return <></>;
  }

  return (
    <main className="flex flex-col flex-auto pl-4 gap-2 md:gap-5 overflow-hidden">
      <div className="flex flex-auto overflow-y-auto">
        <List
          items={data.getRooms.nodes.map((item) => ({
            key: item.id,
            content: (
              <div
                className={clsx(
                  'flex rounded items-center overflow-hidden flex-auto border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 py-2 px-4 gap-4',
                )}
              >
                <div className="flex flex-col gap-1 flex-auto">
                  <Link
                    title={item.name}
                    className="text-xl font-semibold truncate"
                    href={`/rooms/${item.id}`}
                  >
                    {item.name}
                  </Link>
                  {item.owner.id === user?.id ? (
                    <div className="w-fit rounded text-xs py-0.5 px-2 bg-primary-200 dark:bg-primary-600">
                      owner
                    </div>
                  ) : (
                    <div className="w-fit rounded text-xs py-0.5 px-2 bg-primary-200 dark:bg-primary-600">
                      participant
                    </div>
                  )}
                </div>
                <Link href={`/rooms/${item.id}`}>
                  <Button size="sm" variant="success">
                    Enter
                  </Button>
                </Link>
              </div>
            ),
          }))}
        />
      </div>
      <CreateRoomBlock />
    </main>
  );
};

export default ClientSide;
