'use client';

import React from 'react';
import { FilmRow } from '@entities/film';
import { SeriesRow } from '@entities/series';
import { List } from '@shared/ui';
import { useSuspenseQuery_experimental } from '@apollo/client';
import { GetRandomMoviesDocument } from '@shared/api/graphql';

type Props = {
  count: number;
};

const RandomMoviesList = ({ count }: Props) => {
  const { data } = useSuspenseQuery_experimental(GetRandomMoviesDocument, {
    variables: {
      limit: count,
      offset: 0,
    },
    fetchPolicy: 'no-cache',
  });

  return (
    <List
      items={data?.getRandomMovies.map((item) => {
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

export default RandomMoviesList;
