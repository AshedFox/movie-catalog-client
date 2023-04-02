import React from 'react';
import { initializeApollo } from '@lib/graphql/apollo-client';
import { graphql } from '@lib/graphql/__generated__';
import Image from 'next/image';
import blankCover from '@assets/blank_item.jpg';
import { formatDate } from '@lib/helpers/format.helper';
import { ReviewsBlock } from '@components/review';

export const generateMetadata = async ({ params }: Props) => {
  const client = initializeApollo();
  const { data } = await client.query({
    query: GetFilmDocument,
    variables: {
      id: params.id,
    },
  });

  return { title: data.getFilm.title };
};

const GetFilmDocument = graphql(/* GraphQL */ `
  query GetFilm($id: String!) {
    getFilm(id: $id) {
      id
      title
      description
      ageRestriction
      releaseDate
      cover {
        url
      }
      studios {
        name
      }
      countries {
        name
      }
      genres {
        name
      }
    }
  }
`);

type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Props) => {
  const client = initializeApollo();
  const { data } = await client.query({
    query: GetFilmDocument,
    variables: {
      id: params.id,
    },
  });

  if (!data) {
    return;
  }

  const film = data.getFilm;

  return (
    <main className="flex flex-col py-4 container flex-auto gap-2 md:gap-5">
      <div className="flex flex-col md:flex-row gap-2 md:gap-5">
        <Image
          src={film.cover?.url ?? blankCover}
          alt="film cover"
          priority={true}
          className={'rounded object-cover w-full h-96 md:w-72'}
        />
        <div className="flex flex-col">
          <div className="flex gap-1.5 items-center">
            <h1 className="font-semibold text-3xl leading-tight">
              {film.title}
            </h1>
            <span className="-translate-y-[20%] rounded text-xs text-white leading-none px-1.5 py-1 font-semibold bg-red-500 dark:bg-red-700">
              {film.ageRestriction}
            </span>
          </div>
          <div className="flex flex-col gap-1 px-4 py-1">
            {film.description && (
              <div className="flex flex-col">
                <span className="font-semibold">Description: </span>
                <span className="text-sm px-4">{film.description}</span>
              </div>
            )}
            {film.releaseDate && (
              <div>
                <span className="font-semibold">Release Date: </span>
                <span>{formatDate(film.releaseDate)}</span>
              </div>
            )}
            {film.countries.length > 0 && (
              <div className="flex flex-col gap-1.5">
                <div className="font-semibold">Countries: </div>
                <div className="flex flex-wrap gap-1.5">
                  {film.countries.map((c) => (
                    <div
                      key={c.name}
                      className="rounded py-0.5 px-2 bg-gray-200 dark:bg-gray-700"
                    >
                      {c.name}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {film.genres.length > 0 && (
              <div className="flex flex-col gap-1.5">
                <div className="font-semibold">Genres: </div>
                <div className="flex flex-wrap gap-1.5">
                  {film.genres.map((g) => (
                    <div
                      key={g.name}
                      className="rounded py-0.5 px-2 bg-gray-200 dark:bg-gray-700"
                    >
                      {g.name}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {film.studios.length > 0 && (
              <div className="flex flex-col gap-1.5">
                <div className="font-semibold">Studios: </div>
                <div className="flex flex-wrap gap-1.5">
                  {film.studios.map((s) => (
                    <div
                      key={s.name}
                      className="rounded py-0.5 px-2 bg-gray-200 dark:bg-gray-700"
                    >
                      {s.name}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <ReviewsBlock movieId={params.id} />
    </main>
  );
};

export default Page;
