import React, { Suspense } from 'react';
import { Loader } from '@shared/ui';
import MostViewedMoviesCarousel from './MostViewedMoviesCarousel';

type Props = {
  title?: string;
  moviesCount: number;
};

const MostViewedMoviesBlock = ({ moviesCount, title }: Props) => {
  return (
    <div className="flex flex-col flex-auto gap-2">
      <h2 className="font-bold text-2xl leading-tight">{title}</h2>
      <div className="flex py-2 flex-auto min-h-[150px] h-[480px] overflow-x-auto overflow-y-hidden">
        <Suspense
          fallback={
            <div className="flex flex-auto items-center justify-center">
              <Loader />
            </div>
          }
        >
          <MostViewedMoviesCarousel count={moviesCount} />
        </Suspense>
      </div>
    </div>
  );
};

export default MostViewedMoviesBlock;
