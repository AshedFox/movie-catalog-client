import React, { Suspense } from 'react';
import { Loader } from '@shared/ui';
import SeriesSeasonsList from './SeriesSeasonsList';

type Props = {
  title: string;
  seriesId: string;
  hasPurchase: boolean;
};

const SeriesSeasonsBlock = ({ seriesId, title, hasPurchase }: Props) => {
  return (
    <div className="flex flex-col flex-auto gap-2 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
      <h2 className="font-bold text-2xl leading-tight">{title}</h2>
      <div className="flex-auto overflow-auto">
        <Suspense
          fallback={
            <div className="flex flex-auto items-center justify-center">
              <Loader />
            </div>
          }
        >
          <SeriesSeasonsList seriesId={seriesId} hasPurchase={hasPurchase} />
        </Suspense>
      </div>
    </div>
  );
};

export default SeriesSeasonsBlock;
