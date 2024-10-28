import { MovieListsBlock } from '@features/movie-lists';
import { GetOneSeriesDocument } from '@shared/api/graphql';
import { getClient } from '@shared/api/graphql/client';
import { formatAsFullRange, formatAsYearRange } from '@shared/lib/helpers';
import { Tag } from '@shared/ui';
import { MovieImagesBlock } from '@widgets/movie-images-block';
import { MoviePersonsBlock } from '@widgets/movie-persons-block';
import { MovieReviewsBlock } from '@widgets/movie-reviews-block';
import { PurchaseBlock } from '@widgets/purchase-block';
import { Star } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import WatchLink from './WatchLink';

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { data } = await getClient().query({
    query: GetOneSeriesDocument,
    variables: {
      id: params.id,
    },
  });

  if (!data) {
    notFound();
  }

  return {
    title: data.getOneSeries.title,
    description: data.getOneSeries.description,
  };
};

type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Props) => {
  const { data } = await getClient().query({
    query: GetOneSeriesDocument,
    variables: {
      id: params.id,
    },
  });

  if (!data) {
    notFound();
  }

  const series = data.getOneSeries;

  return (
    <main className="py-10">
      <div className="flex flex-col flex-auto gap-2 md:gap-5">
        <div className="md:-z-10 select-none relative rounded-lg overflow-hidden md:rounded-none md:absolute md:left-0 md:top-header w-full aspect-[16/9] md:mask-image-hide">
          <Image
            src={series.cover?.url ?? '/blank_item.jpg'}
            fill
            alt="series cover"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-5 md:p-10 md:mt-[calc((100vh-4rem)/2)] bg-gray-50/10 dark:bg-gray-900/10 backdrop-blur-sm rounded-xl md:max-w-[25rem] xl:max-w-[30rem]">
          <div className="flex flex-col flex-auto">
            <div className="flex gap-2 items-center">
              <h1 className="font-bold text-4xl leading-tight truncate" title={series.title}>
                {series.title}
              </h1>
              {(series.startReleaseDate || series.endReleaseDate) && (
                <span className="-translate-y-1/3">
                  {formatAsYearRange(series.startReleaseDate, series.endReleaseDate)}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1.5 py-2 px-4">
              {series.ageRestriction && (
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-sm">Age Restriction: </span>
                  <Tag className="bg-red-600 dark:bg-red-700">{series.ageRestriction}</Tag>
                </div>
              )}
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-sm">Rating: </span>
                <Tag
                  title={series.rating === 0 ? 'no reviews' : series.rating.toFixed(3)}
                  className="bg-amber-500 dark:bg-amber-600"
                  Icon={<Star className="h-3 w-3" />}
                >
                  {series.rating === 0 ? 'no reviews' : series.rating.toFixed(1)}
                </Tag>
              </div>
              {(series.startReleaseDate || series.endReleaseDate) && (
                <div className="text-sm">
                  <span className="font-semibold">Release Date: </span>
                  <span>{formatAsFullRange(series.startReleaseDate, series.endReleaseDate)}</span>
                </div>
              )}
              {series.countries.length > 0 && (
                <div className="space-y-0.5">
                  <div className="font-semibold text-sm">Countries</div>
                  <div className="flex flex-wrap gap-1">
                    {series.countries.map((c) => (
                      <Tag key={c.name} className="bg-blue-500 dark:bg-blue-700">
                        {c.name}
                      </Tag>
                    ))}
                  </div>
                </div>
              )}
              {series.genres.length > 0 && (
                <div className="space-y-0.5">
                  <div className="font-semibold text-sm">Genres</div>
                  <div className="flex flex-wrap gap-1">
                    {series.genres.map((g) => (
                      <Tag key={g.name} className="bg-green-500 dark:bg-green-700">
                        {g.name}
                      </Tag>
                    ))}
                  </div>
                </div>
              )}
              {series.studios.length > 0 && (
                <div className="space-y-0.5">
                  <div className="font-semibold text-sm">Studios</div>
                  <div className="flex flex-wrap gap-1">
                    {series.studios.map((s) => (
                      <Tag key={s.name} className="bg-orange-500 dark:bg-orange-700">
                        {s.name}
                      </Tag>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {series.productId && (
              <PurchaseBlock
                movieTitle={series.title}
                productId={series.productId ?? undefined}
                movieId={series.id}
              />
            )}
            <WatchLink seriesId={series.id} />
          </div>
        </div>
        <MovieListsBlock className="hidden md:block" movieId={series.id} />
        {series.description && (
          <div>
            <div className="font-semibold text-lg">Description</div>
            <div className="text-sm py-2 px-4 whitespace-pre-line text-justify">
              {series.description}
            </div>
          </div>
        )}
        <MoviePersonsBlock
          movieId={series.id}
          personsCount={4}
          fullLink={`/series/${series.id}/persons`}
          title="Persons"
        />
        <MovieImagesBlock
          movieId={series.id}
          imagesCount={4}
          fullLink={`/series/${series.id}/images`}
          title="Images"
        />
        <MovieReviewsBlock movieId={series.id} />
      </div>
    </main>
  );
};

export default Page;
