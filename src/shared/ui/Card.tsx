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

const Card = ({
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
        'flex min-w-[160px] w-full flex-col rounded overflow-hidden',
        'border border-gray-200 dark:border-gray-800',
        'bg-gray-100 dark:bg-gray-900',
        className,
      )}
    >
      {titleHref ? (
        <Link
          href={titleHref}
          className="rounded-t w-full h-64 shrink-0 relative overflow-hidden border border-gray-200 dark:border-gray-800"
        >
          <Image
            src={coverUrl ?? '/blank_item.jpg'}
            alt={'card cover'}
            width={512}
            height={512}
            className={'object-cover w-full h-full'}
          />
        </Link>
      ) : (
        <div className="rounded-t w-full h-48 shrink-0 relative overflow-hidden border border-gray-200 dark:border-gray-800">
          <Image
            src={coverUrl ?? '/blank_item.jpg'}
            alt={'card cover'}
            width={192}
            height={192}
            className={'object-cover w-full h-full'}
          />
        </div>
      )}
      <div className="flex p-4 flex-col gap-1 flex-auto overflow-hidden">
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
        <div className="mx-4 text-xs flex-auto">
          <div className="line-clamp-4">{description}</div>
        </div>
        {extraSlot}
      </div>
    </div>
  );
};

export default Card;
