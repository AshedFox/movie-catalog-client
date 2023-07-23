import React from 'react';
import { GetOneSeriesDocument } from '@shared/api/graphql';
import { notFound } from 'next/navigation';
import { getClient } from '@shared/api/graphql/client';
import ClientSide from './ClientSide';

const client = getClient();

export const generateMetadata = async ({ params }: Props) => {
  const { data, error } = await client.query({
    query: GetOneSeriesDocument,
    variables: {
      id: params.id,
    },
    errorPolicy: 'ignore',
  });

  if (!data || error) {
    notFound();
  }

  return { title: data.getOneSeries.title };
};

type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Props) => {
  const { data, error } = await client.query({
    query: GetOneSeriesDocument,
    variables: {
      id: params.id,
    },
    errorPolicy: 'ignore',
  });

  if (!data || error) {
    notFound();
  }

  if (!data) {
    notFound();
  }

  return (
    <main className="flex flex-col py-4 container flex-auto gap-2 md:gap-5">
      <ClientSide series={data.getOneSeries} />
    </main>
  );
};

export default Page;
