import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import blankCover from '@assets/blank_item.jpg';

type Props = {
  amountPerPage: number;
};

const FilmsGridBlockLoader = ({ amountPerPage }: Props) => {
  return (
    <div className="flex flex-auto flex-col gap-3 justify-between">
      <div className={clsx('grid gap-2 grid-cols-1 divide-y')}>
        {Array.from({ length: amountPerPage }).map((_, index) => (
          <article
            key={index}
            className={clsx(
              'flex overflow-hidden gap-3 bg-gray-100 dark:bg-gray-900 p-2 rounded animate-pulse',
            )}
          >
            <Image
              src={blankCover}
              alt={'film cover'}
              priority={true}
              className={clsx('shrink-0 rounded object-cover w-24 h-24')}
            />
            <div className="flex flex-col gap-1">
              <div className="flex gap-1.5 items-center">
                <div className="text-2xl font-bold truncate"> </div>
                <span className="-translate-y-[20%] rounded text-xs text-white leading-none px-1.5 py-1 font-semibold bg-red-500 dark:bg-red-700">
                  {' '}
                </span>
              </div>
              <div className="text-sm font-semibold"> </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FilmsGridBlockLoader;
