'use client';

import React from 'react';
import { useSuspenseQuery_experimental } from '@apollo/client';
import { GetMoviesImagesDocument } from '@shared/api/graphql';
import { List } from '@shared/ui';
import { MovieImageCard } from '@entities/movie-image';

type Props = {
  movieId: string;
  count: number;
};

const MovieImagesList = ({ movieId, count }: Props) => {
  const { data } = useSuspenseQuery_experimental(GetMoviesImagesDocument, {
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

  return (
    <List
      direction="horizontal"
      items={movieImages.map((movieImage) => {
        return {
          key: movieImage.id,
          content: <MovieImageCard movieImage={movieImage} />,
        };
      })}
    />
  );
};

export default MovieImagesList;
