import React from 'react';
import { PageNavigation } from '@features/page-navigation';
import { getClient } from '@shared/api/graphql/client';
import { GetMoviesUsersDocument } from '@shared/api/graphql';
import { MoviesList } from '@widgets/movies-list';

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
    title: `Bookmarked movies${
      searchParams?.page && Number(searchParams.page) > 1
        ? ` - ${searchParams.page}`
        : ''
    }`,
  };
};

const amountPerPage = 5;

const Page = async ({ searchParams, params }: Props) => {
  const page = Number(searchParams?.page ?? 1);

  const { data } = await getClient().query({
    query: GetMoviesUsersDocument,
    variables: {
      offset: (page - 1) * amountPerPage,
      limit: amountPerPage,
      withMovie: true,
      filter: {
        userId: { eq: params.id },
        isBookmarked: { eq: true },
      },
    },
  });

  return (
    <main className="flex flex-col py-4 container flex-auto gap-2">
      <h1 className="font-semibold text-3xl leading-tight">
        Bookmarked movies
      </h1>
      <MoviesList
        movies={data.getMoviesUsers.nodes.map((item) => item.movie!)}
      />
      <PageNavigation
        currentPage={page}
        amountPerPage={amountPerPage}
        totalCount={data.getMoviesUsers.pageInfo.totalCount}
      />
    </main>
  );
};

export default Page;
