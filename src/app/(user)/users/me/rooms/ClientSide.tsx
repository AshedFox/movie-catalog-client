'use client';

import React from 'react';
import { useUser } from '@entities/user';
import { useMutation, useQuery } from '@apollo/client';
import {
  DeleteRoomDocument,
  GenerateRoomInviteDocument,
  GetRoomsDocument,
} from '@shared/api/graphql';
import { Button, List, Row } from '@shared/ui';
import { CreateRoomBlock } from '@widgets/create-room-block';
import Link from 'next/link';

const ClientSide = () => {
  const { user } = useUser();
  const { data, loading, error } = useQuery(GetRoomsDocument, {
    variables: {
      limit: 10,
      offset: 0,
      filter: {
        ownerId: {
          eq: user?.id,
        },
      },
    },
  });
  const [deleteRoom] = useMutation(DeleteRoomDocument);
  const [generateInvite] = useMutation(GenerateRoomInviteDocument);

  if (!data || error || loading) {
    return <></>;
  }

  return (
    <main className="flex flex-col flex-auto pl-4 gap-2 md:gap-5 overflow-hidden">
      <div className="flex-auto overflow-y-auto">
        <List
          items={data.getRooms.nodes.map((item) => ({
            key: item.id,
            content: (
              <Row
                title={item.name}
                extraSlot={
                  <div className="flex gap-2">
                    <Link href={`/rooms/${item.id}`}>
                      <Button size="sm" variant="success">
                        Enter
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      onClick={async () => {
                        const { data } = await generateInvite({
                          variables: {
                            id: item.id,
                          },
                        });

                        if (data) {
                          window.alert(
                            `Invite link https://localhost:3001/rooms/join?inviteToken=${data.generateRoomInvite}`,
                          );
                        }
                      }}
                    >
                      Create invite
                    </Button>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={async () => {
                        if (window.confirm('Are you sure?')) {
                          const { data } = await deleteRoom({
                            variables: {
                              id: item.id,
                            },
                          });

                          if (data) {
                            window.alert('Successfully removed room!');
                          }
                        }
                      }}
                    >
                      Remove
                    </Button>
                  </div>
                }
              />
            ),
          }))}
        />
      </div>
      <CreateRoomBlock />
    </main>
  );
};

export default ClientSide;
