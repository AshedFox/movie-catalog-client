import React from 'react';
import { GetReviewsQuery } from '@lib/graphql/__generated__/graphql';
import { Avatar } from '../ui';
import blankProfile from '@assets/blank_profile.png';
import { formatDateTime } from '@lib/helpers/format.helper';
import Link from 'next/link';
import { ROUTES } from '@constants/routes';
import clsx from 'clsx';

type Props = {
  review: GetReviewsQuery['getMoviesReviews']['edges'][number]['node'];
  isOwn: boolean;
};

const ReviewItem = ({ review, isOwn }: Props) => (
  <article className="rounded flex flex-col gap-1 p-2 bg-gray-100 dark:bg-gray-800 divide-y">
    <div className="flex gap-2 items-center truncate">
      <Link
        className="flex items-center gap-2 truncate"
        href={`${ROUTES.users}/${review.user.id}`}
      >
        <Avatar
          className="shrink-0"
          size="sm"
          imageSrc={review.user.avatar?.url ?? blankProfile}
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
        {formatDateTime(review.createdAt)}
      </div>
    </div>
    <div className="flex p-2 items-center">
      <div className="flex-auto">{review.text}</div>
      <div className="srink-0 rounded-full bg-primary-200 dark:bg-primary-700 w-8 h-8 text-center leading-[2rem]">
        {review.mark}
      </div>
    </div>
  </article>
);

export default ReviewItem;
