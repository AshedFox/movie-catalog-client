'use client';

import { useQuery } from '@apollo/client';
import { Button, Loader } from '@shared/ui';
import { useUser } from '@entities/user';
import { ReviewItem } from '@entities/review';
import { CreateCollectionReviewForm } from '@features/create-collection-review';
import {
  GetCollectionsReviewsDocument,
  HasCollectionReviewDocument,
} from '@shared/api/graphql';

type Props = {
  collectionId: number;
};

const reviewsCount = 2;

const CollectionReviewsBlock = ({ collectionId }: Props) => {
  const {
    data: reviewsData,
    loading: reviewsLoading,
    error: reviewsError,
    refetch,
    fetchMore,
  } = useQuery(GetCollectionsReviewsDocument, {
    variables: {
      filter: {
        collectionId: {
          eq: collectionId,
        },
      },
      last: reviewsCount,
    },
  });
  const { user } = useUser();
  const {
    data: hasReviewData,
    loading: hasReviewLoading,
    error: hasReviewError,
  } = useQuery(HasCollectionReviewDocument, {
    variables: {
      collectionId,
    },
    fetchPolicy: 'no-cache',
  });

  const renderReviewsContent = () => {
    if (reviewsLoading) {
      return (
        <div className="flex-auto m-auto p-4">
          <Loader />
        </div>
      );
    } else if (!reviewsData || reviewsError) {
      return (
        <div className="flex-auto m-auto p-4">
          <Button onClick={() => refetch()}>Reload reviews</Button>
        </div>
      );
    } else {
      return (
        <>
          <div className="flex flex-col gap-1 py-2 px-5">
            {reviewsData.getCollectionsReviews.edges.length === 0 ? (
              <div className="text-gray-500">No reviews...</div>
            ) : (
              reviewsData.getCollectionsReviews.edges
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
          {reviewsData.getCollectionsReviews.pageInfo.hasPreviousPage && (
            <Button
              onClick={() =>
                fetchMore({
                  variables: {
                    before:
                      reviewsData?.getCollectionsReviews.pageInfo.startCursor,
                  },
                })
              }
            >
              Load More
            </Button>
          )}
        </>
      );
    }
  };

  const shouldShowCreation = () => {
    return (
      !hasReviewLoading &&
      !hasReviewData?.hasCollectionReview &&
      !hasReviewError &&
      !reviewsData?.getCollectionsReviews.edges.some(
        (edge) => edge.node.user.id === user?.id,
      )
    );
  };

  return (
    <div className="flex flex-col flex-auto gap-2">
      <h2 className="font-semibold text-xl leading-tight">Reviews</h2>
      {renderReviewsContent()}
      {shouldShowCreation() && (
        <CreateCollectionReviewForm collectionId={collectionId} />
      )}
    </div>
  );
};

export default CollectionReviewsBlock;
