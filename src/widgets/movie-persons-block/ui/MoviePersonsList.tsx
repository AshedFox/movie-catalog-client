'use client';

import React from 'react';
import { useSuspenseQuery_experimental } from '@apollo/client';
import { GetMoviesPersonsDocument } from '@shared/api/graphql';
import { List } from '@shared/ui';
import { MoviePersonCard } from '@entities/movie-person';

type Props = {
  movieId: string;
  count: number;
};

const MoviePersonsList = ({ movieId, count }: Props) => {
  const { data } = useSuspenseQuery_experimental(GetMoviesPersonsDocument, {
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

  const moviePersons = data.getMoviesPersons.nodes;

  return (
    <List
      direction="horizontal"
      items={moviePersons.map((moviePerson) => {
        return {
          key: moviePerson.id,
          content: <MoviePersonCard moviePerson={moviePerson} />,
        };
      })}
    />
  );
};

export default MoviePersonsList;
