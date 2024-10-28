import { MovieListsBlock } from '@features/movie-lists';
import { GetFilmDocument } from '@shared/api/graphql';
import { getClient } from '@shared/api/graphql/client';
import { formatAsYear, formatDate } from '@shared/lib/helpers';
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
    query: GetFilmDocument,
    variables: {
      id: params.id,
    },
  });

  if (!data) {
    notFound();
  }

  return { title: data.getFilm.title, description: data.getFilm.description };
};

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

  const film = data.getFilm;

  return (
    <main className="py-10">
      <div className="flex flex-col flex-auto gap-2 md:gap-5">
        <div className="md:-z-10 select-none relative rounded-lg overflow-hidden md:rounded-none md:absolute md:left-0 md:top-header w-full aspect-[16/9] md:mask-image-hide">
          <Image
            src={film.cover?.url ?? '/blank_item.jpg'}
            fill
            alt="film cover"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-5 md:p-10 md:mt-[calc((100vh-4rem)/2)] bg-gray-50/10 dark:bg-gray-900/10 backdrop-blur-sm rounded-xl md:max-w-[25rem] xl:max-w-[30rem]">
          <div className="flex flex-col flex-auto">
            <div className="flex gap-2 items-center">
              <h1 className="font-bold text-4xl leading-tight truncate" title={film.title}>
                {film.title}
              </h1>
              {film.releaseDate && (
                <span className="-translate-y-1/3">{formatAsYear(film.releaseDate)}</span>
              )}
            </div>
            <div className="flex flex-col gap-1.5 py-2 px-4">
              {film.ageRestriction && (
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-sm">Age Restriction: </span>
                  <Tag className="bg-red-600 dark:bg-red-700">{film.ageRestriction}</Tag>
                </div>
              )}
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-sm">Rating: </span>
                <Tag
                  title={film.rating === 0 ? 'no reviews' : film.rating.toFixed(3)}
                  className="bg-amber-500 dark:bg-amber-600"
                  Icon={<Star className="h-3 w-3" />}
                >
                  {film.rating === 0 ? 'no reviews' : film.rating.toFixed(1)}
                </Tag>
              </div>
              {film.releaseDate && (
                <div className="text-sm">
                  <span className="font-semibold">Release Date: </span>
                  <span>{formatDate(film.releaseDate)}</span>
                </div>
              )}
              {film.countries.length > 0 && (
                <div className="space-y-0.5">
                  <div className="font-semibold text-sm">Countries</div>
                  <div className="flex flex-wrap gap-1">
                    {film.countries.map((c) => (
                      <Tag key={c.name} className="bg-blue-500 dark:bg-blue-700">
                        {c.name}
                      </Tag>
                    ))}
                  </div>
                </div>
              )}
              {film.genres.length > 0 && (
                <div className="space-y-0.5">
                  <div className="font-semibold text-sm">Genres</div>
                  <div className="flex flex-wrap gap-1">
                    {film.genres.map((g) => (
                      <Tag key={g.name} className="bg-green-500 dark:bg-green-700">
                        {g.name}
                      </Tag>
                    ))}
                  </div>
                </div>
              )}
              {film.studios.length > 0 && (
                <div className="space-y-0.5">
                  <div className="font-semibold text-sm">Studios</div>
                  <div className="flex flex-wrap gap-1">
                    {film.studios.map((s) => (
                      <Tag key={s.name} className="bg-orange-500 dark:bg-orange-700">
                        {s.name}
                      </Tag>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {film.video?.id && (
              <PurchaseBlock
                movieTitle={film.title}
                productId={film.productId ?? undefined}
                movieId={film.id}
              />
            )}
            <WatchLink filmId={film.id} videoId={Number(film.video?.id) ?? undefined} />
          </div>
        </div>
        <MovieListsBlock className="hidden md:block" movieId={film.id} />
        {film.description && (
          <div>
            <div className="font-semibold text-lg">Description</div>
            <div className="text-sm py-2 px-4 whitespace-pre-line text-justify">
              {film.description}
            </div>
          </div>
        )}
        <MoviePersonsBlock
          movieId={film.id}
          personsCount={4}
          fullLink={`/films/${film.id}/persons`}
          title="Persons"
        />
        <MovieImagesBlock
          movieId={film.id}
          imagesCount={4}
          fullLink={`/films/${film.id}/images`}
          title="Images"
        />
        <MovieReviewsBlock movieId={film.id} />
      </div>
    </main>
  );
};

export default Page;
