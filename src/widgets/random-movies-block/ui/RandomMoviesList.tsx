'use client';

import { useSuspenseQuery } from '@apollo/client';
import { GetRandomMoviesDocument } from '@shared/api/graphql';
import { MoviesList } from '@widgets/movies-list';

type Props = {
  count: number;
};

const RandomMoviesList = ({ count }: Props) => {
  const { data } = useSuspenseQuery(GetRandomMoviesDocument, {
    variables: {
      limit: count,
      offset: 0,
    },
    fetchPolicy: 'no-cache',
  });

  return <MoviesList movies={data.getRandomMovies} />;
};

export default RandomMoviesList;
