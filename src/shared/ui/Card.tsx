import { cn } from '@shared/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  className?: string;
  title: string;
  titleHref?: string;
  tagsSlot?: ReactNode;
  tagsAnimated?: boolean;
  description?: string;
  coverUrl?: string;
  extraSlot?: ReactNode;
};

const Card = ({
  className,
  title,
  titleHref,
  tagsSlot,
  tagsAnimated,
  description,
  coverUrl,
  extraSlot,
}: Props) => {
  const ImageContainer = titleHref ? Link : 'div';
  const TitleContainer = titleHref ? Link : 'div';

  return (
    <div
      className={cn(
        'flex min-w-[160px] w-full flex-col rounded-lg overflow-hidden',
        'border border-gray-200 dark:border-gray-800',
        'bg-gray-50 dark:bg-gray-900',
        className,
      )}
    >
      <ImageContainer
        title={title}
        href={titleHref!}
        className="w-full aspect-video relative overflow-hidden"
      >
        <Image src={coverUrl ?? '/blank_item.jpg'} alt="card cover" fill className="object-cover" />
      </ImageContainer>
      <div className="px-5 py-4 grid gap-1.5 overflow-hidden">
        {!!tagsSlot && (
          <div className="w-fit max-w-full overflow-hidden">
            <ul
              className={cn('flex gap-1 items-center overflow-x-auto no-scrollbar', {
                ['animate-carousel']: tagsAnimated,
              })}
            >
              {tagsSlot}
            </ul>
          </div>
        )}
        <TitleContainer title={title} className="truncate w-fit max-w-full" href={titleHref!}>
          <h2 className="text-2xl font-bold">{title}</h2>
        </TitleContainer>
        {description && (
          <div className="px-2 text-xs font-medium h-16 line-clamp-4 text-gray-500 dark:text-gray-400 text-justify">
            {description}
          </div>
        )}
        {extraSlot}
      </div>
    </div>
  );
};

export default Card;
