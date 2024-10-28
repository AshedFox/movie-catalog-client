import { FilmRow } from '@entities/film';
import { SeriesRow } from '@entities/series';
import { MovieFragment } from '@shared/api/graphql';
import { List } from '@shared/ui';

type Props = {
  movies: MovieFragment[];
};
const MoviesList = ({ movies }: Props) => {
  return (
    <List
      items={movies.map((item) =>
        item.__typename === 'Film' ? (
          <FilmRow key={item.id} film={item} />
        ) : item.__typename === 'Series' ? (
          <SeriesRow key={item.id} series={item} />
        ) : null,
      )}
    />
  );
};

export default MoviesList;
