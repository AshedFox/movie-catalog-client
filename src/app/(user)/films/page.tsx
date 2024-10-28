import { FilmCard } from '@entities/film';
import { FilmsFilters, parseParamsToFilmFilter } from '@features/film-filter';
import { FilmsSort, parseParamsToFilmSort } from '@features/film-sort';
import { QueryPageNavigation } from '@features/page-navigation';
import { FilmSort, GetFilmsDocument, SortDirectionEnum } from '@shared/api/graphql';
import { getClient } from '@shared/api/graphql/client';
import {
  Button,
  Loader,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@shared/ui';
import { Settings2 } from 'lucide-react';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export const generateMetadata = async ({ searchParams }: Props) => {
  return {
    title: `Films${
      searchParams?.page && Number(searchParams.page) > 1 ? ` - ${searchParams.page}` : ''
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

const amountPerPage = 20;

const client = getClient();

const Page = async ({ searchParams }: Props) => {
  const filter = parseParamsToFilmFilter({ ...searchParams });
  const sortKey = searchParams?.sort?.split('_')[0] as keyof FilmSort;
  const sortDirection = searchParams?.sort?.split('_')[1] as SortDirectionEnum;
  const sort = parseParamsToFilmSort(sortKey, sortDirection);
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

  const films = filmsData.getFilms.nodes;

  return (
    <main className="flex flex-col py-4 gap-3 flex-1">
      <h1 className="font-semibold text-5xl leading-tight">Films</h1>
      <div className="flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="flex gap-1" variant="outline" size="sm">
                <Settings2 className="w-4 h-4" />
                <span className="font-medium text-sm">Filters</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>Set filters to find films you interested in.</SheetDescription>
              </SheetHeader>
              <Suspense
                fallback={
                  <div className="flex flex-auto items-center justify-center">
                    <Loader />
                  </div>
                }
              >
                <FilmsFilters />
              </Suspense>
            </SheetContent>
          </Sheet>
          <FilmsSort />
        </div>
        {films.length > 0 ? (
          <div className="flex flex-col flex-1">
            <div className="grid gap-2 lg:gap-3 xl:gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {films.map((film) => (
                <FilmCard key={film.id} film={film} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex-1 text-gray-500 text-xl flex items-center justify-center">
            Nothing here...
          </div>
        )}
        <QueryPageNavigation
          amountPerPage={amountPerPage}
          totalCount={filmsData.getFilms.pageInfo.totalCount}
        />
      </div>
    </main>
  );
};

export default Page;
