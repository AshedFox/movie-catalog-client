import React from 'react';
import Image from 'next/image';
import { MovieImageCard_MovieImageFragment } from '@shared/api/graphql';
import clsx from 'clsx';

type Props = {
  movieImage: MovieImageCard_MovieImageFragment;
};

const MovieImageCard = ({ movieImage }: Props) => {
  return (
    <div
      className={clsx(
        'relative min-w-[160px] w-full h-48 rounded overflow-hidden',
        'border border-gray-200 dark:border-gray-800',
        'bg-gray-100 dark:bg-gray-900 group',
      )}
    >
      <Image
        src={movieImage.image.url ?? '/blank_item.jpg'}
        alt={'card cover'}
        width={192}
        height={192}
        className={'object-cover w-full h-full'}
      />
      <div className="absolute flex transition cursor-pointer w-full h-full bg-black/10 dark:bg-black/30 bottom-0 opacity-0 group-hover:opacity-100">
        <div className="select-none ml-auto flex items-center rounded-bl h-6 text-xs overflow-hidden px-2 bg-gray-50 dark:bg-gray-900">
          {movieImage.type?.name}
        </div>
      </div>
    </div>
  );
};

export default MovieImageCard;
