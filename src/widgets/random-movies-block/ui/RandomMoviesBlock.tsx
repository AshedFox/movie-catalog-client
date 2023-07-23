import React, { Suspense } from 'react';
import { Loader } from '@shared/ui';
import RandomMoviesList from './RandomMoviesList';

type Props = {
  title: string;
  moviesCount: number;
};

const RandomMoviesBlock = ({ title, moviesCount }: Props) => {
  return (
    <div className="flex flex-col flex-auto gap-2 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
      <h2 className="font-bold text-2xl leading-tight">{title}</h2>
      <div className="py-2 flex-auto min-h-[150px] overflow-x-auto overflow-y-hidden">
        <Suspense
          fallback={
            <div className="flex flex-auto items-center justify-center">
              <Loader />
            </div>
          }
        >
          <RandomMoviesList count={moviesCount} />
        </Suspense>
      </div>
    </div>
  );
};

export default RandomMoviesBlock;
