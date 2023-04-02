import React, { Suspense } from 'react';
import { Loader } from '@components/ui';
import { graphql } from '@lib/graphql/__generated__';
import { initializeApollo } from '@lib/graphql/apollo-client';
import {
  AgeRestrictionEnum,
  FilmFilter,
  FilmSort,
  SortDirectionEnum,
} from '@lib/graphql/__generated__/graphql';
import FilmsGridBlock from './FilmsGridBlock';
import FilmsGridOptions from './FilmsGridOptions';
import FilmsSortBlock from './FilmsSortBlock';
import FilmsGridProvider from './FilmsGridProvider';
import FilmsFilterBlock from './FilmsFilterBlock';

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

const GetFilmsDocument = graphql(/* GraphQL */ `
  query GetFilms(
    $limit: Int!
    $offset: Int!
    $sort: FilmSort
    $filter: FilmFilter
  ) {
    getFilms(limit: $limit, offset: $offset, sort: $sort, filter: $filter) {
      nodes {
        id
        title
        description
        releaseDate
        ageRestriction
        studios {
          name
        }
        countries {
          name
        }
        genres {
          name
        }
        cover {
          url
        }
      }
      pageInfo {
        totalCount
        hasNextPage
      }
    }
  }
`);

const GetGenresDocument = graphql(/* GraphQL */ `
  query GetAllGenres($sort: GenreSort) {
    getGenres(limit: 999, sort: $sort) {
      nodes {
        id
        name
      }
    }
  }
`);

const GetCountriesDocument = graphql(/* GraphQL */ `
  query GetAllCountries($sort: CountrySort) {
    getCountries(limit: 999, sort: $sort) {
      nodes {
        id
        name
      }
    }
  }
`);

const GetStudiosDocument = graphql(/* GraphQL */ `
  query GetAllStudios($sort: StudioSort) {
    getStudios(limit: 999, sort: $sort) {
      nodes {
        id
        name
      }
    }
  }
`);

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

const Page = async ({ searchParams }: Props) => {
  const makeFilter = (): FilmFilter => {
    const { title, ageRestriction, genre, releaseDateLTE, releaseDateGTE } =
      searchParams ?? {};
    const filter: FilmFilter = {};

    if (title) {
      filter.title = {
        ilike: title,
      };
    }

    if (releaseDateGTE && releaseDateLTE) {
      filter.releaseDate = {
        btwn: {
          start: releaseDateGTE,
          end: releaseDateLTE,
        },
      };
    } else if (releaseDateLTE) {
      filter.releaseDate = {
        lte: releaseDateLTE,
      };
    } else if (releaseDateGTE) {
      filter.releaseDate = {
        gte: releaseDateGTE,
      };
    }

    if (ageRestriction && ageRestriction.length > 0) {
      filter.ageRestriction = {
        in: ageRestriction as AgeRestrictionEnum[],
      };
    }

    if (genre && genre.length > 0) {
      filter.genresConnection = {
        genreId: {
          in: genre,
        },
      };
    }

    return filter;
  };

  const makeSort = (): FilmSort => {
    const sort: FilmSort = {};

    if (searchParams?.sort) {
      sort[searchParams.sort as keyof FilmSort] = {
        direction: SortDirectionEnum.ASC,
      };
    } else {
      sort.releaseDate = {
        direction: SortDirectionEnum.ASC,
      };
    }

    return sort;
  };

  const filter: FilmFilter = makeFilter();
  const sort: FilmSort = makeSort();
  const page = Number(searchParams?.page ?? 1);

  const client = initializeApollo();
  const { data: filmsData } = await client.query({
    query: GetFilmsDocument,
    variables: {
      limit: amountPerPage,
      offset: (page - 1) * amountPerPage,
      sort,
      filter,
    },
    context: {
      fetchOptions: {
        next: { revalidate: 30 },
      },
    },
  });
  const { data: genresData } = await client.query({
    query: GetGenresDocument,
    variables: {
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
      <h1 className="font-semibold text-3xl leading-tight">Films</h1>
      <div className="flex flex-col gap-3 flex-auto">
        <Suspense
          fallback={
            <div className="flex flex-auto items-center justify-center">
              <Loader />
            </div>
          }
        >
          <FilmsFilterBlock
            allGenres={genresData.getGenres.nodes}
            allCountries={countriesData.getCountries.nodes}
            allStudios={studiosData.getStudios.nodes}
          />
        </Suspense>
        <FilmsGridProvider>
          <div className="flex items-center gap-2">
            <FilmsSortBlock currentSort={sort} />
            <FilmsGridOptions />
          </div>
          <Suspense
            fallback={
              <div className="flex flex-auto items-center justify-center">
                <Loader />
              </div>
            }
          >
            <FilmsGridBlock
              items={filmsData.getFilms.nodes}
              pageInfo={filmsData.getFilms.pageInfo}
              page={page}
              amountPerPage={amountPerPage}
            />
          </Suspense>
        </FilmsGridProvider>
      </div>
    </main>
  );
};

export default Page;
