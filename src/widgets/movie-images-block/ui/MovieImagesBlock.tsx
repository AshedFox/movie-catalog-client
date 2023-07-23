import React, { Suspense } from 'react';
import { Loader } from '@shared/ui';
import Link from 'next/link';
import MovieImagesList from './MovieImagesList';

type Props = {
  title: string;
  movieId: string;
  imagesCount?: number;
  fullLink?: string;
};

const MovieImagesBlock = ({
  movieId,
  title,
  fullLink,
  imagesCount = 2,
}: Props) => {
  return (
    <div className="flex flex-col flex-auto gap-2 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
      <h2 className="font-bold text-2xl leading-tight">{title}</h2>
      <div className="flex py-2 flex-auto min-h-[150px] overflow-x-auto overflow-y-hidden">
        <Suspense
          fallback={
            <div className="flex flex-auto items-center justify-center">
              <Loader />
            </div>
          }
        >
          <MovieImagesList movieId={movieId} count={imagesCount} />
        </Suspense>
      </div>
      {fullLink && (
        <Link
          className="text-sm border-t border-gray-200 dark:border-gray-800 pt-1"
          href={fullLink}
        >
          See all →
        </Link>
      )}
    </div>
  );
};

export default MovieImagesBlock;
