'use client';

import React from 'react';
import { useSuspenseQuery } from '@apollo/client';
import { GetMoviesPersonsDocument } from '@shared/api/graphql';
import { MoviePersonCard } from '@entities/movie-person';

type Props = {
  movieId: string;
  count: number;
};

const MoviePersonsList = ({ movieId, count }: Props) => {
  const { data } = useSuspenseQuery(GetMoviesPersonsDocument, {
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

  if (moviePersons.length === 0) {
    return <div className="m-auto text-gray-500 italic">Nothing here...</div>;
  }

  return (
    <ul className="w-full flex gap-2 overflow-x-auto overflow-y-hidden p-2">
      {moviePersons.map((moviePerson) => (
        <MoviePersonCard key={moviePerson.id} moviePerson={moviePerson} />
      ))}
    </ul>
  );
};

export default MoviePersonsList;
