import { EditCollectionForm } from '@features/edit-collection';
import { GetCollectionDocument } from '@shared/api/graphql';
import { getClient } from '@shared/api/graphql/client';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Edit Collection',
};

type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Props) => {
  const { data, error } = await getClient().query({
    query: GetCollectionDocument,
    variables: {
      id: Number(params.id),
    },
  });

  if (!data || error) {
    notFound();
  }

  return (
    <main className="py-4">
      <EditCollectionForm collection={data?.getCollection} />
    </main>
  );
};

export default Page;
