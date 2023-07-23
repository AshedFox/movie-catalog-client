import React, { Suspense } from 'react';
import { Loader } from '@shared/ui';
import MostReviewedMoviesCarousel from './MostReviewedMoviesCarousel';

type Props = {
  title?: string;
  moviesCount: number;
};

const MostReviewedMoviesBlock = ({ moviesCount, title }: Props) => {
  return (
    <div className="flex flex-col flex-auto gap-2 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
      <h2 className="font-bold text-2xl leading-tight">{title}</h2>
      <div className="flex py-2 flex-auto min-h-[150px] h-[480px] overflow-x-auto overflow-y-hidden">
        <Suspense
          fallback={
            <div className="flex flex-auto items-center justify-center">
              <Loader />
            </div>
          }
        >
          <MostReviewedMoviesCarousel count={moviesCount} />
        </Suspense>
      </div>
    </div>
  );
};

export default MostReviewedMoviesBlock;
