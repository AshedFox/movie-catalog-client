import { SeriesCard } from '@entities/series';
import { QueryPageNavigation } from '@features/page-navigation';
import { parseParamsToSeriesFilter, SeriesFilters } from '@features/series-filter';
import { parseParamsToSeriesSort, SeriesSort } from '@features/series-sort';
import { GetManySeriesDocument, SortDirectionEnum } from '@shared/api/graphql';
import { getClient } from '@shared/api/graphql/client';
import { Settings2 } from 'lucide-react';
import { Suspense } from 'react';
import {
  Button,
  Loader,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from 'shared/ui';

export const dynamic = 'force-dynamic';

export const generateMetadata = async ({ searchParams }: Props) => {
  return {
    title: `Series${
      searchParams?.page && Number(searchParams.page) > 1 ? ` - ${searchParams.page}` : ''
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

const amountPerPage = 20;
const client = getClient();

const Page = async ({ searchParams }: Props) => {
  const filter = parseParamsToSeriesFilter({ ...searchParams });
  const sortKey = searchParams?.sort?.split('_')[0] as keyof SeriesSort;
  const sortDirection = searchParams?.sort?.split('_')[1] as SortDirectionEnum;
  const sort = parseParamsToSeriesSort(sortKey, sortDirection);

  const page = Number(searchParams?.page ?? 1);

  const { data: seriesData } = await client.query({
    query: GetManySeriesDocument,
    variables: {
      limit: amountPerPage,
      offset: (page - 1) * amountPerPage,
      sort,
      filter,
    },
  });

  const manySeries = seriesData.getManySeries.nodes;

  return (
    <main className="flex flex-col py-4 gap-3 flex-1">
      <h1 className="font-semibold text-5xl leading-tight">Series</h1>
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
                <SheetDescription>Set filters to find series you interested in.</SheetDescription>
              </SheetHeader>
              <Suspense
                fallback={
                  <div className="flex flex-auto items-center justify-center">
                    <Loader />
                  </div>
                }
              >
                <SeriesFilters />
              </Suspense>
            </SheetContent>
          </Sheet>
          <SeriesSort />
        </div>
        {manySeries.length > 0 ? (
          <div className="flex flex-col flex-1">
            <div className="grid gap-2 lg:gap-3 xl:gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {manySeries.map((series) => (
                <SeriesCard key={series.id} series={series} />
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
          totalCount={seriesData.getManySeries.pageInfo.totalCount}
        />
      </div>
    </main>
  );
};

export default Page;
