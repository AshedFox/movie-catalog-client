import React from 'react';
import { GetCollectionDocument } from '@shared/api/graphql';
import { CollectionItem } from '@entities/collection';
import { Metadata } from 'next';
import { CollectionReviewsBlock } from '@widgets/collection-reviews-block';
import { CollectionMoviesBlock } from '@widgets/collection-movies-block';
import { getClient } from '@shared/api/graphql/client';
import EditCollectionButton from './EditCollectionButton';
import RemoveCollectionButton from './RemoveCollectionButton';
import { notFound } from 'next/navigation';

const client = getClient();

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
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

  return (
    <main className="py-4 container">
      <CollectionItem
        collection={data.getCollection}
        bookmarkSlot={
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
        }
        extraSlot={
          <>
            <CollectionReviewsBlock
              collectionId={Number(data.getCollection.id)}
            />
            <details className="flex flex-col flex-auto" open>
              <summary className="font-semibold mb-2 text-xl leading-tight cursor-pointer select-none">
                Collection movies
              </summary>
              <CollectionMoviesBlock
                collectionId={Number(data.getCollection.id)}
              />
            </details>
          </>
        }
      />
    </main>
  );
};

export default Page;
