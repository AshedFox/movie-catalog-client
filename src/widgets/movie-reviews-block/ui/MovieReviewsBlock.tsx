'use client';

import { useQuery } from '@apollo/client';
import { Button, Loader } from '@shared/ui';
import {
  GetMoviesReviewsDocument,
  HasMovieReviewDocument,
} from '@shared/api/graphql';
import { useUser } from '@entities/user';
import { ReviewItem } from '@entities/review';
import { CreateMovieReviewForm } from '@features/create-movie-review';

type Props = {
  movieId: string;
  reviewsCount?: number;
};

const MovieReviewsBlock = ({ movieId, reviewsCount = 2 }: Props) => {
  const {
    data: reviewsData,
    loading: reviewsLoading,
    error: reviewsError,
    refetch,
    fetchMore,
  } = useQuery(GetMoviesReviewsDocument, {
    variables: {
      filter: {
        movieId: {
          eq: movieId,
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
  } = useQuery(HasMovieReviewDocument, {
    variables: {
      movieId,
    },
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
            {reviewsData.getMoviesReviews.edges.length === 0 ? (
              <div className="text-gray-500">No reviews...</div>
            ) : (
              reviewsData.getMoviesReviews.edges
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
          {reviewsData.getMoviesReviews.pageInfo.hasPreviousPage && (
            <Button
              onClick={() =>
                fetchMore({
                  variables: {
                    before: reviewsData?.getMoviesReviews.pageInfo.startCursor,
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
      !hasReviewData?.hasMovieReview &&
      !hasReviewError &&
      !reviewsData?.getMoviesReviews.edges.some(
        (edge) => edge.node.user.id === user?.id,
      )
    );
  };

  return (
    <div className="flex flex-col flex-auto gap-2">
      <h2 className="font-semibold text-xl leading-tight">Reviews</h2>
      {renderReviewsContent()}
      {shouldShowCreation() && <CreateMovieReviewForm movieId={movieId} />}
    </div>
  );
};

export default MovieReviewsBlock;
