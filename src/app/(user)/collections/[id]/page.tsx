import React from 'react';
import { GetCollectionDocument, initializeApollo } from '@shared/api/graphql';
import { CollectionItem } from '@entities/collection';
import { Metadata } from 'next';
import { CollectionReviewsBlock } from '@widgets/collection-reviews-block';
import { CollectionMoviesBlock } from '@widgets/collection-movies-block';

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const client = initializeApollo();
  const { data } = await client.query({
    query: GetCollectionDocument,
    variables: {
      id: Number(params.id),
    },
  });

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

const client = initializeApollo();

const Page = async ({ params }: Props) => {
  const { data } = await client.query({
    query: GetCollectionDocument,
    variables: {
      id: Number(params.id),
    },
  });

  return (
    <main className="py-4 container">
      <CollectionItem
        collection={data.getCollection}
        bookmarkSlot={<></>}
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
