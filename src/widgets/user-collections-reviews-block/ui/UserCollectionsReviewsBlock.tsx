'use client';

import React from 'react';
import { List } from '@shared/ui';
import { ReviewItem } from '@entities/review';
import Link from 'next/link';
import {
  GetCollectionsReviewsRelayDocument,
  SortDirectionEnum,
} from '@shared/api/graphql';
import { useSuspenseQuery_experimental } from '@apollo/client';

type Props = {
  title: string;
  userId: string;
  reviewsCount: number;
  fullLink?: string;
};

const UserCollectionsReviews = ({
  userId,
  reviewsCount,
  title,
  fullLink,
}: Props) => {
  const { data } = useSuspenseQuery_experimental(
    GetCollectionsReviewsRelayDocument,
    {
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
    },
  );

  const moviesReviewsEdges = data.getCollectionsReviewsRelay.edges;

  return (
    <div className="flex flex-col flex-auto gap-2 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
      <h2 className="font-bold text-2xl leading-tight">{title}</h2>
      <div className="flex p-2 max-h-[400px] flex-auto overflow-auto">
        <List
          items={moviesReviewsEdges.map((edge) => {
            const node = edge.node;

            return {
              key: node.id,
              content: (
                <ReviewItem
                  review={node}
                  isOwn={true}
                  fullLinkSlot={
                    <Link
                      className="text-sm text-gray-600 dark:text-gray-400 truncate"
                      href={`/collections/${node.collectionId}`}
                    >
                      {`See collection →`}
                    </Link>
                  }
                />
              ),
            };
          })}
        />
      </div>
      {fullLink && (
        <Link
          className="text-sm border-t border-gray-200 dark:border-gray-800 pt-1"
          href={fullLink}
        >
          See all →
        </Link>
      )}
    </div>
  );
};

export default UserCollectionsReviews;
