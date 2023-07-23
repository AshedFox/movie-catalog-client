import React from 'react';
import { getClient } from '@shared/api/graphql/client';
import { GetMoviesPersonsDocument } from '@shared/api/graphql';
import { PageNavigation } from '@features/page-navigation';
import { List } from '@shared/ui';
import { MoviePersonCard } from '@entities/movie-person';

type Props = {
  params: {
    id: string;
  };
  searchParams?: {
    page?: string;
  };
};

export const generateMetadata = async ({ searchParams }: Props) => {
  return {
    title: `Movie Persons${
      searchParams?.page && Number(searchParams.page) > 1
        ? ` - ${searchParams.page}`
        : ''
    }`,
  };
};

const amountPerPage = 8;

const Page = async ({ searchParams, params }: Props) => {
  const page = Number(searchParams?.page ?? 1);

  const { data } = await getClient().query({
    query: GetMoviesPersonsDocument,
    variables: {
      offset: (page - 1) * amountPerPage,
      limit: amountPerPage,
      filter: {
        movieId: { eq: params.id },
      },
    },
  });

  return (
    <main className="flex flex-col py-4 container flex-auto gap-2">
      <h1 className="font-semibold text-3xl leading-tight">Persons</h1>
      <List
        items={data.getMoviesPersons.nodes.map((item) => ({
          key: item.id,
          content: <MoviePersonCard moviePerson={item} />,
        }))}
      />
      <PageNavigation
        currentPage={page}
        amountPerPage={amountPerPage}
        totalCount={data.getMoviesPersons.pageInfo.totalCount}
      />
    </main>
  );
};

export default Page;
