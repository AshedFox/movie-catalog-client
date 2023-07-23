import React from 'react';
import { GetEpisodeBySeriesAndNumDocument } from '@shared/api/graphql';
import { getClient } from '@shared/api/graphql/client';
import { notFound } from 'next/navigation';
import ClientSide from './ClientSide';

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    e?: string;
  };
};

const client = getClient();

const Page = async ({ params, searchParams }: Props) => {
  if (!searchParams.e) {
    notFound();
  }

  const { data } = await client.query({
    query: GetEpisodeBySeriesAndNumDocument,
    variables: {
      seriesId: params.id,
      numberInSeries: Number(searchParams.e),
    },
  });

  if (!data) {
    notFound();
  }

  return (
    <ClientSide seriesId={params.id} episode={data.getEpisodeBySeriesAndNum} />
  );
};

export default Page;
