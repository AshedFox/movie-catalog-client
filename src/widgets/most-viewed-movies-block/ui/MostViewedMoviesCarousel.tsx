'use client';

import React from 'react';
import { FilmCard } from '@entities/film';
import { SeriesCard } from '@entities/series';
import { Carousel } from '@shared/ui';
import { useSuspenseQuery_experimental } from '@apollo/client';
import { GetMostViewedMoviesDocument } from '@shared/api/graphql';

type Props = {
  count: number;
};

const MostViewedMoviesCarousel = ({ count }: Props) => {
  const { data } = useSuspenseQuery_experimental(GetMostViewedMoviesDocument, {
    variables: {
      limit: count,
      offset: 0,
    },
  });

  return (
    <Carousel
      items={data?.getMostViewedMovies.map((item) => {
        return {
          key: item.id,
          content:
            item.__typename === 'Film' ? (
              <FilmCard key={item.id} film={item} />
            ) : item.__typename === 'Series' ? (
              <SeriesCard key={item.id} series={item} />
            ) : (
              <></>
            ),
        };
      })}
      visibleCount={1}
    />
  );
};

export default MostViewedMoviesCarousel;
