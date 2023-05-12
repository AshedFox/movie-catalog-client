import React, { Suspense } from 'react';
import { Loader } from 'shared/ui';
import {
  parseParamsToSeriesFilter,
  SeriesFilters,
} from '@features/series-filter';
import { parseParamsToSeriesSort, SeriesSort } from '@features/series-sort';
import {
  GetCountriesDocument,
  GetGenresDocument,
  GetManySeriesDocument,
  GetStudiosDocument,
  initializeApollo,
  SortDirectionEnum,
} from '@shared/api/graphql';
import { PageNavigation } from '@features/page-navigation';
import { SeriesGrid } from '@widgets/series-grid';

export const dynamic = 'force-dynamic';

export const generateMetadata = async ({ searchParams }: Props) => {
  return {
    title: `Series${
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
    releaseFrom?: string;
    releaseTo?: string;
    ageRestriction?: string[];
    genre?: string[];
  };
};

const amountPerPage = 4;
const client = initializeApollo();

const Page = async ({ searchParams }: Props) => {
  const filter = parseParamsToSeriesFilter(searchParams ?? {});
  const sort = parseParamsToSeriesSort(
    searchParams?.sort ?? 'startReleaseDate',
  );
  const page = Number(searchParams?.page ?? 1);

  const { data: seriesData } = await client.query({
    query: GetManySeriesDocument,
    variables: {
      limit: amountPerPage,
      offset: (page - 1) * amountPerPage,
      sort,
      filter,
    },
    context: {
      fetchOptions: {
        next: { revalidate: 60 },
      },
    },
  });
  const { data: genresData } = await client.query({
    query: GetGenresDocument,
    variables: {
      limit: 9999,
      offset: 0,
      sort: {
        name: { direction: SortDirectionEnum.ASC },
      },
    },
    context: {
      fetchOptions: {
        next: { revalidate: 1800 },
      },
    },
  });
  const { data: studiosData } = await client.query({
    query: GetStudiosDocument,
    variables: {
      limit: 9999,
      offset: 0,
      sort: {
        name: { direction: SortDirectionEnum.ASC },
      },
    },
    context: {
      fetchOptions: {
        next: { revalidate: 1800 },
      },
    },
  });
  const { data: countriesData } = await client.query({
    query: GetCountriesDocument,
    variables: {
      limit: 9999,
      offset: 0,
      sort: {
        name: { direction: SortDirectionEnum.ASC },
      },
    },
    context: {
      fetchOptions: {
        next: { revalidate: 1800 },
      },
    },
  });

  return (
    <main className="flex flex-col py-4 container flex-auto">
      <h1 className="font-semibold text-3xl leading-tight">Series</h1>
      <div className="flex flex-col gap-3 flex-auto">
        <Suspense
          fallback={
            <div className="flex flex-auto items-center justify-center">
              <Loader />
            </div>
          }
        >
          <SeriesFilters
            genresVariants={genresData.getGenres.nodes}
            countriesVariants={countriesData.getCountries.nodes}
            studiosVariants={studiosData.getStudios.nodes}
          />
        </Suspense>
        <div className="flex items-center justify-between gap-2">
          <SeriesSort currentSort={sort} />
        </div>
        <Suspense
          fallback={
            <div className="flex flex-auto items-center justify-center">
              <Loader />
            </div>
          }
        >
          <SeriesGrid items={seriesData.getManySeries.nodes} />
          <PageNavigation
            currentPage={page}
            amountPerPage={amountPerPage}
            totalCount={seriesData.getManySeries.pageInfo.totalCount}
          />
        </Suspense>
      </div>
    </main>
  );
};

export default Page;
