import React, { ReactNode } from 'react';
import Image from 'next/image';
import { formatAsFullRange } from '@shared/lib/helpers';
import { SeriesItem_SeriesFragment } from '@shared/api/graphql';

type Props = {
  series: SeriesItem_SeriesFragment;
  purchaseSlot?: ReactNode;
  bookmarkSlot?: ReactNode;
  extraSlot?: ReactNode;
};

const SeriesItem = ({
  series,
  bookmarkSlot,
  purchaseSlot,
  extraSlot,
}: Props) => {
  return (
    <main className="flex flex-col flex-auto gap-2 md:gap-5">
      <div className="flex flex-col md:flex-row gap-2 md:gap-5">
        <div className="flex flex-col gap-2">
          <Image
            src={series.cover?.url ?? '/blank_item.jpg'}
            width={1920}
            height={1080}
            alt="series cover"
            priority={true}
            className={'shrink-0 rounded object-cover w-full h-96 md:w-72'}
          />
          {bookmarkSlot}
        </div>
        <div className="flex flex-col flex-auto">
          <div className="flex gap-1.5 items-center">
            <h1 className="font-semibold text-4xl">{series.title}</h1>
            <span className="-translate-y-[20%] rounded text-xs text-white leading-none px-1.5 py-1 font-semibold bg-red-500 dark:bg-red-700">
              {series.ageRestriction}
            </span>
          </div>
          <div className="flex flex-col gap-2 p-4">
            {!!series.rating && (
              <div className="flex gap-1.5">
                <div className="font-semibold">Rating: </div>
                <div className="rounded h-6 overflow-hidden gap-1 text-xs py-0.5 px-2 bg-yellow-200 dark:bg-yellow-600 flex items-center w-fit">
                  <svg
                    className="w-3 h-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                  </svg>
                  <span>
                    {series.rating === 0
                      ? 'no reviews'
                      : parseFloat(series.rating.toFixed(2))}
                  </span>
                </div>
              </div>
            )}
            {(series.startReleaseDate || series.endReleaseDate) && (
              <div>
                <span className="font-semibold">Release: </span>
                <span>
                  {formatAsFullRange(
                    series.startReleaseDate,
                    series.endReleaseDate,
                  )}
                </span>
              </div>
            )}
            {series.countries.length > 0 && (
              <div className="flex gap-1.5">
                <div className="font-semibold">Countries: </div>
                <div className="flex flex-wrap gap-1.5">
                  {series.countries.map((c) => (
                    <div
                      key={c.name}
                      className="flex items-center rounded h-6 text-xs overflow-hidden px-2 bg-blue-200 dark:bg-blue-700"
                    >
                      {c.name}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {series.genres.length > 0 && (
              <div className="flex gap-1.5">
                <div className="font-semibold">Genres: </div>
                <div className="flex flex-wrap gap-1.5">
                  {series.genres.map((g) => (
                    <div
                      key={g.name}
                      className="flex items-center rounded h-6 text-xs overflow-hidden px-2 bg-gray-200 dark:bg-gray-700"
                    >
                      {g.name}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {series.studios.length > 0 && (
              <div className="flex gap-1.5">
                <div className="font-semibold">Studios: </div>
                <div className="flex flex-wrap gap-1.5">
                  {series.studios.map((s) => (
                    <div
                      key={s.name}
                      className="flex items-center rounded h-6 text-xs overflow-hidden px-2 bg-emerald-200 dark:bg-emerald-700"
                    >
                      {s.name}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {purchaseSlot}
          </div>
        </div>
      </div>
      {series.description && (
        <div className="flex flex-col">
          <span className="font-semibold text-xl">Description</span>
          <span className="text-sm px-4 py-2 whitespace-pre-line">
            {series.description}
          </span>
        </div>
      )}
      {extraSlot}
    </main>
  );
};

export default SeriesItem;
