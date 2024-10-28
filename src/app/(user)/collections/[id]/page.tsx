import React from 'react';
import { GetCollectionDocument } from '@shared/api/graphql';
import { Metadata } from 'next';
import { CollectionReviewsBlock } from '@widgets/collection-reviews-block';
import { CollectionMoviesBlock } from '@widgets/collection-movies-block';
import { getClient } from '@shared/api/graphql/client';
import EditCollectionButton from './EditCollectionButton';
import RemoveCollectionButton from './RemoveCollectionButton';
import { notFound } from 'next/navigation';
import Image from 'next/image';

const client = getClient();

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { data, error } = await client.query({
    query: GetCollectionDocument,
    variables: {
      id: Number(params.id),
    },
    errorPolicy: 'ignore',
  });

  if (!data || error) {
    notFound();
  }

  return { title: data.getCollection.name };
};

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    moviesPage?: string;
  };
};

const Page = async ({ params }: Props) => {
  const { data, error } = await client.query({
    query: GetCollectionDocument,
    variables: {
      id: Number(params.id),
    },
    errorPolicy: 'ignore',
  });

  if (!data || error) {
    notFound();
  }

  const collection = data.getCollection;

  return (
    <main className="py-10">
      <div className="flex flex-col flex-auto gap-2 md:gap-5">
        <div className="md:-z-10 select-none relative rounded-lg overflow-hidden md:rounded-none md:absolute md:left-0 md:top-header w-full aspect-[16/9] md:mask-image-hide">
          <Image
            src={collection.cover?.url ?? '/blank_item.jpg'}
            fill
            alt="collection cover"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-5 md:p-10 md:mt-[calc((100vh-4rem)/2)] bg-gray-50/10 dark:bg-gray-900/10 backdrop-blur-sm rounded-xl md:max-w-[25rem] xl:max-w-[30rem]">
          <h1 className="font-bold text-4xl leading-tight truncate" title={collection.name}>
            {collection.name}
          </h1>
        </div>
        <div className="flex gap-1">
          <EditCollectionButton
            collectionId={data.getCollection.id}
            collectionOwnerId={data.getCollection.ownerId}
          />
          <RemoveCollectionButton
            collectionId={data.getCollection.id}
            collectionOwnerId={data.getCollection.ownerId}
          />
        </div>
        {collection.description && (
          <div>
            <div className="font-semibold text-lg">Description</div>
            <div className="text-sm py-2 px-4 whitespace-pre-line text-justify">
              {collection.description}
            </div>
          </div>
        )}
        <CollectionReviewsBlock collectionId={Number(data.getCollection.id)} />
        <details className="flex flex-col flex-auto" open>
          <summary className="font-semibold mb-2 text-xl leading-tight cursor-pointer select-none">
            Collection movies
          </summary>
          <CollectionMoviesBlock collectionId={Number(data.getCollection.id)} />
        </details>
      </div>
    </main>
  );
};

export default Page;
