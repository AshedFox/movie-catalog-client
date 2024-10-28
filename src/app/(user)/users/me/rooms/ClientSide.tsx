'use client';

import { useSuspenseQuery } from '@apollo/client';
import { useSession } from '@features/auth/session';
import { GetRoomsDocument } from '@shared/api/graphql';
import { cn } from '@shared/lib/utils';
import { List, buttonVariants } from '@shared/ui';
import { CreateRoomBlock } from '@widgets/create-room-block';
import Link from 'next/link';

const ClientSide = () => {
  const session = useSession();
  const user = session.data?.user;
  const { data } = useSuspenseQuery(GetRoomsDocument, {
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
    return null;
  }

  return (
    <main className="flex flex-col flex-auto pl-4 gap-2 md:gap-5 overflow-hidden">
      <div className="flex flex-auto overflow-y-auto">
        <List
          items={data.getRooms.nodes.map((item) => (
            <div
              key={item.id}
              className={cn(
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
                <div className="w-fit rounded text-xs py-0.5 px-2 bg-primary-200 dark:bg-primary-600">
                  {item.owner.id === user?.id ? 'owner' : 'participant'}
                </div>
              </div>
              <Link className={buttonVariants({ size: 'sm' })} href={`/rooms/${item.id}`}>
                Enter
              </Link>
            </div>
          ))}
        />
      </div>
      <CreateRoomBlock />
    </main>
  );
};

export default ClientSide;
