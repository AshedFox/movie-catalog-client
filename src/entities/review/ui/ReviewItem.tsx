import React, { ReactNode } from 'react';
import { Avatar } from '@shared/ui';
import Link from 'next/link';
import { ROUTES } from '@shared/constants/routes';
import clsx from 'clsx';
import {
  BaseMovieReviewFragment,
  CollectionReviewFragment,
} from '@shared/api/graphql';
import { formatDate } from '@shared/lib/helpers';

type Props = {
  review: BaseMovieReviewFragment | CollectionReviewFragment;
  isOwn: boolean;
  fullLinkSlot?: ReactNode;
};

const ReviewItem = ({ review, isOwn, fullLinkSlot }: Props) => {
  return (
    <div className="rounded flex flex-col p-2 border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 divide-y  divide-gray-200 dark:divide-gray-800">
      <div className="flex gap-2 pb-1 items-center truncate">
        <Link
          className="flex items-center gap-2 truncate"
          href={`${ROUTES.users}/${review.user.id}`}
        >
          <Avatar
            className="shrink-0"
            size="sm"
            imageSrc={review.user.avatar?.url ?? '/blank_profile.png'}
          />
          <h3
            className={clsx('font-semibold truncate', {
              'text-primary-500': isOwn,
            })}
          >
            {review.user.name}
            {isOwn && <span className="text-xs">(you)</span>}
          </h3>
        </Link>
        <div className="text-gray-500 text-sm shrink-0">
          {formatDate(review.createdAt)}
        </div>
      </div>
      <div className="flex pl-3 py-2 gap-1 items-center">
        <div className="flex-auto text-sm whitespace-pre-line">
          {review.text}
        </div>
        <div className="shrink-0 rounded-full bg-primary-200 dark:bg-primary-700 w-8 h-8 text-center leading-[2rem]">
          {review.mark}
        </div>
      </div>
      {fullLinkSlot && <div className="pt-1">{fullLinkSlot}</div>}
    </div>
  );
};

export default ReviewItem;
