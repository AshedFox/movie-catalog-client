import React from 'react';
import {
  GetMoviesPersonsDocument,
  initializeApollo,
} from '@shared/api/graphql';
import Link from 'next/link';
import { MoviePersonCard } from '@entities/movie-person';
import { List } from '@shared/ui';

type Props = {
  title: string;
  movieId: string;
  personsCount?: number;
  fullLink?: string;
};

const client = initializeApollo();

const MoviePersonsBlock = async ({
  title,
  movieId,
  personsCount = 2,
  fullLink,
}: Props) => {
  const { data } = await client.query({
    query: GetMoviesPersonsDocument,
    variables: {
      offset: 0,
      limit: personsCount,
      filter: {
        movieId: {
          eq: movieId,
        },
      },
    },
  });

  const person = {
    id: '123',
    role: 'Captain Snow',
    type: {
      id: '123',
      name: 'actor',
    },
    person: {
      id: '123',
      name: 'John Abrams',
      image: {
        url: 'https://storage.googleapis.com/movie-catalog-3e1f7.appspot.com/images/042e0b36-aca4-475c-bce1-d6962b7e8edf',
      },
    },
  };
  const person2 = {
    id: '1234',
    role: 'Captain Snow',
    type: {
      id: '1234',
      name: 'actor',
    },
    person: {
      id: '1234',
      name: 'John Abrams',
    },
  };

  const moviePersons = [...data.getMoviesPersons.nodes, person, person2];

  return (
    <div className="flex flex-col flex-auto gap-2 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
      <h2 className="font-bold text-2xl leading-tight">{title}</h2>
      <div className="py-2 flex-auto overflow-x-auto overflow-y-hidden">
        {moviePersons.length > 0 ? (
          <List
            direction="horizontal"
            items={moviePersons.map((moviePerson) => {
              return {
                key: moviePerson.id,
                content: <MoviePersonCard moviePerson={moviePerson} />,
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

export default MoviePersonsBlock;
