import React from 'react';
import ClientSide from './ClientSide';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit Collection',
};

type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Props) => {
  return (
    <main className="py-4 container">
      <ClientSide collectionId={params.id} />
    </main>
  );
};

export default Page;
