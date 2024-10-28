'use client';

import { useSuspenseQuery } from '@apollo/client';
import { ReviewItem } from '@entities/review';
import { GetCollectionsReviewsRelayDocument, SortDirectionEnum } from '@shared/api/graphql';
import { useVirtualizer } from '@tanstack/react-virtual';
import Link from 'next/link';
import { useRef } from 'react';

type Props = {
  reviewsCount: number;
  userId: string;
  height: number | string;
};

const UserMoviesReviewsList = ({ reviewsCount, height, userId }: Props) => {
  const { data } = useSuspenseQuery(GetCollectionsReviewsRelayDocument, {
    variables: {
      first: reviewsCount,
      filter: {
        userId: {
          eq: userId,
        },
      },
      sort: {
        createdAt: {
          direction: SortDirectionEnum.DESC,
        },
      },
    },
  });
  const reviewsEdges = data.getCollectionsReviewsRelay.edges;
  const parentRef = useRef(null);
  const virtualizer = useVirtualizer({
    count: reviewsEdges.length,
    estimateSize: () => 200,
    getScrollElement: () => parentRef.current,
    overscan: 5,
  });

  const virtualItems = virtualizer.getVirtualItems();

  if (reviewsEdges.length === 0) {
    return <div className="flex items-center justify-center flex-1">Nothing here...</div>;
  }

  return (
    <div className="overflow-y-auto w-full" style={{ height }} ref={parentRef}>
      <div className="relative w-full" style={{ height: virtualizer.getTotalSize() }}>
        {virtualItems.map((virtualRow) => {
          const review = reviewsEdges[virtualRow.index].node;

          return (
            <div
              key={virtualRow.key}
              data-index={virtualRow.index}
              ref={virtualizer.measureElement}
              className="absolute top-0 left-0 w-full"
              style={{
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              <ReviewItem
                className={virtualRow.index !== reviewsEdges.length - 1 ? 'mb-1' : ''}
                review={review}
                isOwn={true}
                fullLinkSlot={
                  <Link
                    className="text-sm text-gray-600 dark:text-gray-400 truncate"
                    href={`/collections/${review.collectionId}`}
                  >
                    {`See movie →`}
                  </Link>
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserMoviesReviewsList;
