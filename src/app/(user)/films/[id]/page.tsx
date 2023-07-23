import React from 'react';
import { Metadata } from 'next';
import { GetFilmDocument } from '@shared/api/graphql';
import ClientSide from './ClientSide';
import { notFound } from 'next/navigation';
import { getClient } from '@shared/api/graphql/client';


const client = getClient();

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { data, error } = await client.query({
    query: GetFilmDocument,
    variables: {
      id: params.id,
    },
    errorPolicy: 'ignore',
  });

  if (!data || error) {
    notFound();
  }

  return { title: data.getFilm.title };
};

type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Props) => {
  const { data, error } = await client.query({
    query: GetFilmDocument,
    variables: {
      id: params.id,
    },
    errorPolicy: 'ignore',
  });

  if (!data || error) {
    notFound();
  }

  return (
    <main className="container p-4">
      <ClientSide film={data.getFilm} />
    </main>
  );
};

export default Page;
