import React from 'react';
import { Row, Tag } from '@shared/ui';
import { SeriesCard_SeriesFragment } from '@shared/api/graphql';
import { ROUTES } from '@shared/constants/routes';
import { formatAsFullRange } from '@shared/lib/helpers';
import { Star } from 'lucide-react';

type Props = {
  series: SeriesCard_SeriesFragment;
  className?: string;
};

const SeriesRow = ({ series, className }: Props) => {
  return (
    <Row
      title={series.title}
      className={className}
      titleHref={`${ROUTES.series}/${series.id}`}
      coverUrl={series.cover?.url}
      tagsSlot={
        <>
          {series.ageRestriction && (
            <Tag className="bg-red-600 dark:bg-red-700">{series.ageRestriction}</Tag>
          )}
          <Tag
            title={series.rating === 0 ? 'no reviews' : series.rating.toFixed(3)}
            className="bg-amber-500 dark:bg-amber-600"
            Icon={<Star className="h-3 w-3" />}
          >
            {series.rating === 0 ? 'no reviews' : series.rating.toFixed(1)}
          </Tag>
          {series.genres?.map((g) => (
            <Tag key={g.name} className="bg-green-500 dark:bg-green-700">
              {g.name}
            </Tag>
          ))}
          {series.countries?.map((c) => (
            <Tag key={c.name} className="bg-blue-500 dark:bg-blue-700">
              {c.name}
            </Tag>
          ))}
          {series.studios?.map((s) => (
            <Tag key={s.name} className="bg-orange-500 dark:bg-orange-700">
              {s.name}
            </Tag>
          ))}
        </>
      }
      extraSlot={
        <>
          {(series.startReleaseDate || series.endReleaseDate) && (
            <div className="text-sm font-semibold">
              {formatAsFullRange(series.startReleaseDate, series.endReleaseDate)}
            </div>
          )}
        </>
      }
    />
  );
};

export default SeriesRow;
