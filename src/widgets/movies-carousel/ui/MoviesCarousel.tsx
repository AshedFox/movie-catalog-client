import React from 'react';
import { MovieFragment } from '@shared/api/graphql';
import { Carousel } from '@shared/ui';
import { FilmCard } from '@entities/film';
import { SeriesCard } from '@entities/series';

type Props = {
  movies: MovieFragment[];
};

const MoviesCarousel = ({ movies }: Props) => {
  return (
    <Carousel
      items={movies.map((item) => {
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

export default MoviesCarousel;
