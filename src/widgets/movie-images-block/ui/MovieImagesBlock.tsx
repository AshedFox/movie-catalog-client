import React from 'react';
import { GetMoviesImagesDocument, initializeApollo } from '@shared/api/graphql';
import { List } from '@shared/ui';
import Link from 'next/link';
import { MovieImageCard } from '@entities/movie-image';

type Props = {
  title: string;
  movieId: string;
  imagesCount?: number;
  fullLink?: string;
};

const client = initializeApollo();

const MovieImagesBlock = async ({
  title,
  movieId,
  imagesCount = 2,
  fullLink,
}: Props) => {
  const { data } = await client.query({
    query: GetMoviesImagesDocument,
    variables: {
      offset: 0,
      limit: imagesCount,
      filter: {
        movieId: {
          eq: movieId,
        },
      },
    },
  });

  const image = {
    id: '123',
    type: {
      id: '123',
      name: 'image',
    },
    image: {
      url: 'https://storage.googleapis.com/movie-catalog-3e1f7.appspot.com/images/042e0b36-aca4-475c-bce1-d6962b7e8edf',
    },
  };

  const movieImages = [...data.getMoviesImages.nodes, image];

  return (
    <div className="flex flex-col flex-auto gap-2 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
      <h2 className="font-bold text-2xl leading-tight">{title}</h2>
      <div className="py-2 flex-auto overflow-x-auto overflow-y-hidden">
        {movieImages.length > 0 ? (
          <List
            direction="horizontal"
            items={movieImages.map((movieImage) => {
              return {
                key: movieImage.id,
                content: <MovieImageCard movieImage={movieImage} />,
              };
            })}
          />
        ) : (
          <div>No items now...</div>
        )}
      </div>
      {fullLink && (
        <Link
          className="text-sm border-t border-gray-200 dark:border-gray-800 pt-1"
          href={fullLink}
        >
          See all →
        </Link>
      )}
    </div>
  );
};

export default MovieImagesBlock;
