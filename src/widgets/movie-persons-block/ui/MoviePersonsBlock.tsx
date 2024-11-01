import React, { Suspense } from 'react';
import Link from 'next/link';
import { Loader } from '@shared/ui';
import MoviePersonsList from './MoviePersonsList';

type Props = {
  title: string;
  movieId: string;
  personsCount?: number;
  fullLink?: string;
};

const MoviePersonsBlock = ({ movieId, title, personsCount = 2, fullLink }: Props) => {
  return (
    <div className="flex flex-col flex-auto gap-2 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
      <h2 className="font-bold text-2xl leading-tight">{title}</h2>
      <div className="flex flex-auto min-h-[150px] overflow-hidden">
        <Suspense
          fallback={
            <div className="flex flex-auto items-center justify-center">
              <Loader />
            </div>
          }
        >
          <MoviePersonsList movieId={movieId} count={personsCount} />
        </Suspense>
      </div>
      {fullLink && (
        <Link
          className="text-sm border-t border-gray-200 dark:border-gray-800 pt-2"
          href={fullLink}
        >
          See all →
        </Link>
      )}
    </div>
  );
};

export default MoviePersonsBlock;
