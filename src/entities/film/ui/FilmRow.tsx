import React from 'react';
import { Row } from '@shared/ui';
import { FilmCard_FilmFragment } from '@shared/api/graphql';
import { ROUTES } from '@shared/constants/routes';
import { formatDate } from '@shared/lib/helpers';

type Props = {
  film: FilmCard_FilmFragment;
};

const FilmRow = ({ film }: Props) => {
  return (
    <Row
      title={film.title}
      description={film.description ?? undefined}
      titleHref={`${ROUTES.films}/${film.id}`}
      coverUrl={film.cover?.url}
      tagsSlot={
        <>
          {film.ageRestriction && (
            <div className="rounded flex overflow-hidden items-center text-xs h-6 px-2 bg-red-300 dark:bg-red-700">
              {film.ageRestriction}
            </div>
          )}
          {!!film.rating && (
            <div className="rounded h-6 overflow-hidden gap-1 text-xs py-0.5 px-2 bg-yellow-200 dark:bg-yellow-600 flex items-center">
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
              </svg>
              {film.rating === 0
                ? 'no reviews'
                : parseFloat(film.rating.toFixed(2))}
            </div>
          )}
          {film.countries?.map((c) => (
            <div
              key={c.name}
              className="flex items-center rounded h-6 text-xs overflow-hidden px-2 bg-blue-200 dark:bg-blue-700"
            >
              {c.name}
            </div>
          ))}
          {film.studios?.map((s) => (
            <div
              key={s.name}
              className="flex items-center rounded h-6 text-xs overflow-hidden px-2 bg-emerald-200 dark:bg-emerald-700"
            >
              {s.name}
            </div>
          ))}
          {film.genres?.map((g) => (
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
          {film.releaseDate && (
            <div className="text-sm font-semibold">
              {formatDate(film.releaseDate)}
            </div>
          )}
        </>
      }
    />
  );
};

export default FilmRow;
