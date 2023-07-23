import React from 'react';
import { Metadata } from 'next';
import { List, Row } from '@shared/ui';
import { CreateRoomBlock } from '@widgets/create-room-block';
import { GetRoomsDocument } from '@shared/api/graphql';
import { getClient } from '@shared/api/graphql/client';

export const metadata: Metadata = {
  title: 'Rooms',
};

const client = getClient();

type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Props) => {
  const { data } = await client.query({
    query: GetRoomsDocument,
    variables: {
      limit: 10,
      offset: 0,
      filter: {
        ownerId: {
          eq: params.id,
        },
      },
    },
    context: {
      fetchOptions: {
        next: {
          tags: [`rooms_${params.id}`],
        },
      },
    },
  });

  return (
    <main className="flex flex-col flex-auto pl-4 gap-2 md:gap-5 overflow-hidden">
      <div className="flex flex-auto overflow-y-auto">
        <List
          items={data.getRooms.nodes.map((item) => ({
            key: item.id,
            content: <Row title={item.name} />,
          }))}
        />
      </div>
      <CreateRoomBlock />
    </main>
  );
};

export default Page;
