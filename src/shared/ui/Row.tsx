import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@shared/lib/utils';

type Props = {
  className?: string;
  title: string;
  titleHref?: string;
  tagsSlot?: ReactNode;
  coverUrl?: string;
  extraSlot?: ReactNode;
};

const Row = ({ className, title, titleHref, tagsSlot, coverUrl, extraSlot }: Props) => {
  const ImageContainer = titleHref ? Link : 'div';
  const TitleContainer = titleHref ? Link : 'div';

  return (
    <div
      className={cn(
        'flex rounded overflow-hidden flex-auto border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 p-2 gap-4',
        className,
      )}
    >
      <ImageContainer
        title={title}
        href={titleHref!}
        className={
          'rounded shrink-0 relative overflow-hidden border border-gray-200 dark:border-gray-800 w-24 aspect-square'
        }
      >
        <Image
          src={coverUrl ?? '/blank_item.jpg'}
          alt="cover"
          width={512}
          height={512}
          className="object-cover w-full h-full"
        />
      </ImageContainer>

      <div className="grid gap-1">
        <TitleContainer title={title} className="truncate w-fit max-w-full" href={titleHref!}>
          <h2 className="text-2xl font-bold">{title}</h2>
        </TitleContainer>
        {tagsSlot && (
          <div className="w-fit max-w-full overflow-hidden">
            <ul className={'flex gap-1 items-center overflow-x-auto no-scrollbar'}>{tagsSlot}</ul>
          </div>
        )}
        {extraSlot}
      </div>
    </div>
  );
};

export default Row;
