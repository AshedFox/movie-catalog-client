import React, { ReactNode } from 'react';
import { Avatar } from '@shared/ui';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@shared/constants/routes';
import { BaseMovieReviewFragment, CollectionReviewFragment } from '@shared/api/graphql';
import { formatDate } from '@shared/lib/helpers';
import { cn } from '@shared/lib/utils';
import { Star } from 'lucide-react';

type Props = {
  className?: string;
  review: BaseMovieReviewFragment | CollectionReviewFragment;
  isOwn: boolean;
  fullLinkSlot?: ReactNode;
};

const ReviewItem = ({ review, isOwn, fullLinkSlot, className }: Props) => {
  return (
    <div
      className={cn(
        'rounded flex flex-col gap-2 py-3 px-4 border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800',
        className,
      )}
    >
      <div className="flex gap-2 items-center">
        <Link className="flex items-center gap-2" href={`${ROUTES.users}/${review.user.id}`}>
          <Avatar className="h-6 w-6">
            <Image
              src={review.user.avatar?.url ?? '/blank_profile.png'}
              alt="avatar"
              width={24}
              height={24}
              className="object-cover"
            />
          </Avatar>
          <h2
            className={cn('font-semibold truncate', {
              'text-primary-700 dark:text-primary-600': isOwn,
            })}
          >
            {review.user.name}
            {isOwn && <span className="text-xs">(you)</span>}
          </h2>
        </Link>
        <div className="text-gray-500 text-sm shrink-0">{formatDate(review.createdAt)}</div>
        <div className="ml-auto shrink-0 flex gap-1 items-center">
          <span className="font-medium">{review.mark}</span>
          <Star className="w-4 h-4 text-amber-500 dark:text-amber-600 fill-amber-500 dark:fill-amber-600" />
        </div>
      </div>
      <div className="flex-auto text-sm whitespace-pre-line text-justify pt-2 leading-snug text-gray-800 dark:text-gray-200">
        &emsp;{review.text}
      </div>
      {fullLinkSlot && <div className="pt-2">{fullLinkSlot}</div>}
    </div>
  );
};

export default ReviewItem;
