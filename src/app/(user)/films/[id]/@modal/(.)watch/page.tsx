import React from 'react';
import { GetFilmDocument } from '@shared/api/graphql';
import { getClient } from '@shared/api/graphql/client';
import { notFound } from 'next/navigation';
import ClientSide from './ClientSide';

type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Props) => {
  const { data } = await getClient().query({
    query: GetFilmDocument,
    variables: {
      id: params.id,
    },
  });

  if (!data) {
    notFound();
  }

  return <ClientSide film={data.getFilm} />;
};

export default Page;
