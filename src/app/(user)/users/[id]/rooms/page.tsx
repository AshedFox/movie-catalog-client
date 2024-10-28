import { GetRoomsDocument } from '@shared/api/graphql';
import { getClient } from '@shared/api/graphql/client';
import { List, Row } from '@shared/ui';
import { CreateRoomBlock } from '@widgets/create-room-block';
import { Metadata } from 'next';

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
          items={data.getRooms.nodes.map((item) => (
            <Row key={item.id} title={item.name} />
          ))}
        />
      </div>
      <CreateRoomBlock />
    </main>
  );
};

export default Page;
