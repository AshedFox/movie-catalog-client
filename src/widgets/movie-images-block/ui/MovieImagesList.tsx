'use client';

import React from 'react';
import { useSuspenseQuery } from '@apollo/client';
import { GetMoviesImagesDocument } from '@shared/api/graphql';
import { MovieImageCard } from '@entities/movie-image';

type Props = {
  movieId: string;
  count: number;
};

const MovieImagesList = ({ movieId, count }: Props) => {
  const { data } = useSuspenseQuery(GetMoviesImagesDocument, {
    variables: {
      offset: 0,
      limit: count,
      filter: {
        movieId: {
          eq: movieId,
        },
      },
    },
  });

  const movieImages = data.getMoviesImages.nodes;

  if (movieImages.length === 0) {
    return <div className="m-auto text-gray-500 italic">Nothing here...</div>;
  }

  return (
    <ul className="w-full flex gap-2 overflow-x-auto overflow-y-hidden p-2">
      {movieImages.map((movieImage) => (
        <MovieImageCard key={movieImage.id} movieImage={movieImage} />
      ))}
    </ul>
  );
};

export default MovieImagesList;
