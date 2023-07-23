import React, { Suspense } from 'react';
import { Loader } from '@shared/ui';
import { FilmsFilters, parseParamsToFilmFilter } from '@features/film-filter';
import { FilmsSort, parseParamsToFilmSort } from '@features/film-sort';
import { PageNavigation } from '@features/page-navigation';
import { GetFilmsDocument } from '@shared/api/graphql';
import { FilmsGrid } from '@widgets/films-grid';
import { getClient } from '@shared/api/graphql/client';

export const dynamic = 'force-dynamic';

export const generateMetadata = async ({ searchParams }: Props) => {
  return {
    title: `Films${
      searchParams?.page && Number(searchParams.page) > 1
        ? ` - ${searchParams.page}`
        : ''
    }`,
  };
};

type Props = {
  searchParams?: {
    page?: string;
    sort?: string;
    title?: string;
    releaseDateGTE?: string;
    releaseDateLTE?: string;
    ageRestriction?: string[];
    genre?: string[];
  };
};

const amountPerPage = 4;

const client = getClient();

const Page = async ({ searchParams }: Props) => {
  const filter = parseParamsToFilmFilter({ ...searchParams });
  const sort = parseParamsToFilmSort(searchParams?.sort ?? 'releaseDate');
  const page = Number(searchParams?.page ?? 1);

  const { data: filmsData } = await client.query({
    query: GetFilmsDocument,
    variables: {
      limit: amountPerPage,
      offset: (page - 1) * amountPerPage,
      sort,
      filter,
    },
  });

  return (
    <main className="flex flex-col py-4 container flex-auto">
      <h1 className="font-semibold text-3xl leading-tight">Films</h1>
      <div className="flex flex-col gap-3 flex-auto">
        <Suspense
          fallback={
            <div className="flex flex-auto items-center justify-center">
              <Loader />
            </div>
          }
        >
          <FilmsFilters />
        </Suspense>
        <div className="flex items-center justify-between gap-2">
          <FilmsSort currentSort={sort} />
        </div>
        <Suspense
          fallback={
            <div className="flex flex-auto items-center justify-center">
              <Loader />
            </div>
          }
        >
          <FilmsGrid items={filmsData.getFilms.nodes} />
          <PageNavigation
            currentPage={page}
            amountPerPage={amountPerPage}
            totalCount={filmsData.getFilms.pageInfo.totalCount}
          />
        </Suspense>
      </div>
    </main>
  );
};

export default Page;
