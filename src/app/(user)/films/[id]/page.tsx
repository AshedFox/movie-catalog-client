import React from 'react';
import { Metadata } from 'next';
import { GetFilmDocument, initializeApollo } from '@shared/api/graphql';
import ClientSide from './ClientSide';
import { notFound } from 'next/navigation';

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const client = initializeApollo();
  const { data } = await client.query({
    query: GetFilmDocument,
    variables: {
      id: params.id,
    },
  });

  return { title: data.getFilm.title };
};

type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Props) => {
  const client = initializeApollo();
  const { data } = await client.query({
    query: GetFilmDocument,
    variables: {
      id: params.id,
    },
  });

  if (!data) {
    notFound();
  }

  return (
    <main className="container p-4">
      <ClientSide film={data.getFilm} />
    </main>
  );
};

export default Page;
