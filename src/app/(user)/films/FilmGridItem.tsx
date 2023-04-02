import React from 'react';
import { GetFilmsQuery } from '@lib/graphql/__generated__/graphql';
import Image from 'next/image';
import blankCover from '@assets/blank_item.jpg';
import clsx from 'clsx';
import { formatDate } from '@lib/helpers/format.helper';
import Link from 'next/link';
import { ROUTES } from '@constants/routes';

type Props = {
  film: GetFilmsQuery['getFilms']['nodes'][number];
  variant: 'mini' | 'full';
};

const FilmGridItem = ({ film, variant }: Props) => {
  return (
    <article
      className={clsx('flex overflow-hidden', {
        ['gap-3 bg-gray-100 dark:bg-gray-900 p-2 rounded']: variant === 'mini',
        ['flex-col gap-1']: variant === 'full',
      })}
    >
      <Link
        className={clsx('rounded shrink-0 relative overflow-hidden', {
          ['w-24 h-24']: variant === 'mini',
          ['w-full h-48']: variant === 'full',
        })}
        href={`${ROUTES.films}/${film.id}`}
      >
        <Image
          src={film.cover?.url ?? blankCover}
          alt={'film cover'}
          priority={true}
          className={'object-cover w-full h-full'}
        />
      </Link>
      <div className="flex flex-col gap-1">
        <div className="flex gap-1.5 items-center">
          <Link
            title={film.title}
            className="text-2xl font-bold truncate"
            href={`${ROUTES.films}/${film.id}`}
          >
            {film.title}
          </Link>
          <span className="-translate-y-[20%] rounded text-xs text-white leading-none px-1.5 py-1 font-semibold bg-red-500 dark:bg-red-700">
            {film.ageRestriction}
          </span>
        </div>
        {film.description && (
          <div className="mx-4 line-clamp-4 text-sm">{film.description}</div>
        )}
        {film.releaseDate && (
          <div className="text-sm font-semibold">
            {formatDate(film.releaseDate)}
          </div>
        )}
        {film.countries.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {film.countries.map((c) => (
              <div
                key={c.name}
                className="rounded py-0.5 px-2 bg-gray-200 dark:bg-gray-700"
              >
                {c.name}
              </div>
            ))}
          </div>
        )}
        {film.genres.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {film.genres.map((g) => (
              <div
                key={g.name}
                className="rounded py-0.5 px-2 bg-gray-200 dark:bg-gray-700"
              >
                {g.name}
              </div>
            ))}
          </div>
        )}
        {film.studios.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {film.studios.map((s) => (
              <div
                key={s.name}
                className="rounded py-0.5 px-2 bg-gray-200 dark:bg-gray-700"
              >
                {s.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default FilmGridItem;
