import React from 'react';
import { List } from '@shared/ui';
import { MovieFragment } from '@shared/api/graphql';
import { FilmRow } from '@entities/film';
import { SeriesRow } from '@entities/series';

type Props = {
  movies: MovieFragment[];
};
const MoviesList = ({ movies }: Props) => {
  if (movies.length === 0) {
    return <div>List is empty...</div>;
  }

  return (
    <List
      items={movies.map((item) => {
        return {
          key: item.id,
          content:
            item.__typename === 'Film' ? (
              <FilmRow key={item.id} film={item} />
            ) : item.__typename === 'Series' ? (
              <SeriesRow key={item.id} series={item} />
            ) : (
              <></>
            ),
        };
      })}
    />
  );
};

export default MoviesList;
