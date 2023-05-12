import React from 'react';
import { Row } from '@shared/ui';
import { SeriesCard_SeriesFragment } from '@shared/api/graphql';
import { ROUTES } from '@shared/constants/routes';
import { formatAsFullRange } from '@shared/lib/helpers';

type Props = {
  series: SeriesCard_SeriesFragment;
};

const SeriesRow = ({ series }: Props) => {
  return (
    <Row
      title={series.title}
      description={series.description ?? undefined}
      titleHref={`${ROUTES.series}/${series.id}`}
      coverUrl={series.cover?.url}
      tagsSlot={
        <>
          {series.ageRestriction && (
            <div className="rounded flex overflow-hidden items-center text-xs h-6 px-2 bg-red-300 dark:bg-red-700">
              {series.ageRestriction}
            </div>
          )}
          {!!series.rating && (
            <div className="rounded h-6 overflow-hidden gap-1 text-xs py-0.5 px-2 bg-yellow-200 dark:bg-yellow-600 flex items-center">
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
              </svg>
              {series.rating === 0 ? 'no reviews' : series.rating}
            </div>
          )}
          {series.countries?.map((c) => (
            <div
              key={c.name}
              className="flex items-center rounded h-6 text-xs overflow-hidden px-2 bg-blue-200 dark:bg-blue-700"
            >
              {c.name}
            </div>
          ))}
          {series.studios?.map((s) => (
            <div
              key={s.name}
              className="flex items-center rounded h-6 text-xs overflow-hidden px-2 bg-emerald-200 dark:bg-emerald-700"
            >
              {s.name}
            </div>
          ))}
          {series.genres?.map((g) => (
            <div
              key={g.name}
              className="flex items-center rounded h-6 text-xs overflow-hidden px-2 bg-gray-200 dark:bg-gray-700"
            >
              {g.name}
            </div>
          ))}
        </>
      }
      extraSlot={
        <>
          {(series.startReleaseDate || series.endReleaseDate) && (
            <div className="text-sm font-semibold">
              {formatAsFullRange(
                series.startReleaseDate,
                series.endReleaseDate,
              )}
            </div>
          )}
        </>
      }
    />
  );
};

export default SeriesRow;
