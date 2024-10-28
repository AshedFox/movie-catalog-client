'use client';

import { useSuspenseQuery } from '@apollo/client';
import { ReviewItem } from '@entities/review';
import { useSession } from '@features/auth/session';
import { CreateCollectionReviewForm } from '@features/create-collection-review';
import {
  GetCollectionsReviewsRelayDocument,
  HasCollectionReviewDocument,
} from '@shared/api/graphql';
import { Button } from '@shared/ui';

type Props = {
  collectionId: number;
};

const reviewsCount = 2;

const CollectionReviewsBlock = ({ collectionId }: Props) => {
  const { data: reviewsData, fetchMore } = useSuspenseQuery(GetCollectionsReviewsRelayDocument, {
    variables: {
      filter: {
        collectionId: {
          eq: collectionId,
        },
      },
      last: reviewsCount,
    },
  });
  const session = useSession();
  const user = session.data?.user;
  const { data: hasReviewData } = useSuspenseQuery(HasCollectionReviewDocument, {
    variables: {
      collectionId,
    },
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  });

  const isFormVisible = !!user && hasReviewData && !hasReviewData?.hasCollectionReview;

  return (
    <div className="flex flex-col flex-auto gap-2">
      <h2 className="font-semibold text-xl leading-tight">Reviews</h2>
      <div className="flex flex-col gap-1 py-2 px-5">
        {reviewsData.getCollectionsReviewsRelay.edges.length === 0 ? (
          <div className="text-gray-500">No reviews...</div>
        ) : (
          reviewsData.getCollectionsReviewsRelay.edges
            .slice()
            .reverse()
            .map((edge) => (
              <ReviewItem
                key={edge.node.id}
                review={edge.node}
                isOwn={edge.node.user.id === user?.id}
              />
            ))
        )}
      </div>
      {reviewsData.getCollectionsReviewsRelay.pageInfo.hasPreviousPage && (
        <Button
          onClick={() =>
            fetchMore({
              variables: {
                before: reviewsData?.getCollectionsReviewsRelay.pageInfo.startCursor,
              },
            })
          }
        >
          Load More
        </Button>
      )}
      {isFormVisible && <CreateCollectionReviewForm collectionId={collectionId} />}
    </div>
  );
};

export default CollectionReviewsBlock;
