import React from 'react';
import { CreateCollectionForm } from '@features/create-collection';

const Page = () => {
  return (
    <main className="flex flex-col py-4 container flex-auto gap-2">
      <CreateCollectionForm collectionType="system" />
    </main>
  );
};

export default Page;
