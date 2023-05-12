import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

type Props = {
  className?: string;
  title: string;
  titleHref?: string;
  tagsSlot?: ReactNode;
  description?: string;
  coverUrl?: string;
  extraSlot?: ReactNode;
};

const Row = ({
  className,
  title,
  titleHref,
  tagsSlot,
  description,
  coverUrl,
  extraSlot,
}: Props) => {
  return (
    <div
      className={clsx(
        'flex rounded overflow-hidden flex-auto border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 p-2 gap-4',
        className,
      )}
    >
      {titleHref ? (
        <Link
          className="rounded shrink-0 relative overflow-hidden border border-gray-200 dark:border-gray-800 w-24 h-24"
          href={titleHref}
        >
          <Image
            src={coverUrl ?? '/blank_item.jpg'}
            alt="cover"
            width={512}
            height={512}
            className="object-cover w-full h-full"
          />
        </Link>
      ) : (
        <div className="rounded shrink-0 relative overflow-hidden border border-gray-200 dark:border-gray-800 w-24 h-24">
          <Image
            src={coverUrl ?? '/blank_item.jpg'}
            alt={'cover'}
            width={512}
            height={512}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      <div className="flex flex-col gap-1 flex-auto">
        {titleHref ? (
          <Link
            title={title}
            className="text-xl font-semibold truncate"
            href={titleHref}
          >
            {title}
          </Link>
        ) : (
          <div className="text-xl font-semibold truncate">{title}</div>
        )}
        <div className="flex gap-1 items-center flex-wrap">{tagsSlot}</div>
        <div className="mx-4 line-clamp-4 text-xs flex-auto">{description}</div>
        {extraSlot}
      </div>
    </div>
  );
};

export default Row;
