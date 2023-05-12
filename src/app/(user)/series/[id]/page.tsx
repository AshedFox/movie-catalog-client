import React from 'react';
import { GetOneSeriesDocument, initializeApollo } from '@shared/api/graphql';
import { MovieBookmarkBlock } from 'features/movie-bookmark';
import { SeriesItem } from '@entities/series';
import PurchaseBlock from '@widgets/purchase-block/ui/PurchaseBlock';
import { MovieReviewsBlock } from '@widgets/movie-reviews-block';
import { notFound } from 'next/navigation';

export const generateMetadata = async ({ params }: Props) => {
  const client = initializeApollo();
  const { data } = await client.query({
    query: GetOneSeriesDocument,
    variables: {
      id: params.id,
    },
  });

  return { title: data.getOneSeries.title };
};

type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Props) => {
  const client = initializeApollo();
  const { data } = await client.query({
    query: GetOneSeriesDocument,
    variables: {
      id: params.id,
    },
  });

  if (!data) {
    notFound();
  }

  const series = data.getOneSeries;

  return (
    <main className="flex flex-col py-4 container flex-auto gap-2 md:gap-5">
      <SeriesItem
        series={series}
        bookmarkSlot={<MovieBookmarkBlock movieId={series.id} />}
        purchaseSlot={
          <>
            {series.productId && (
              <PurchaseBlock productId={series.productId} movieId={series.id} />
            )}
          </>
        }
        extraSlot={
          <>
            <MovieReviewsBlock movieId={series.id} />
          </>
        }
      />
    </main>
  );
};

export default Page;
