'use client';

import { graphql } from '@lib/graphql/__generated__';
import { useLazyQuery, useQuery } from '@apollo/client';
import { Button, Loader } from '../ui';
import CreateReviewForm from './CreateReviewForm';
import ReviewItem from './ReviewItem';

const GetMeDocument = graphql(/* GraphQL */ `
  query GetMe {
    getMe {
      id
    }
  }
`);

const GetReviewDocument = graphql(/* GraphQL */ `
  query GetReview($userId: ID!, $movieId: ID!) {
    getMoviesReviews(
      filter: { movieId: { eq: $movieId }, userId: { eq: $userId } }
      first: 1
    ) {
      edges {
        node {
          id
        }
      }
    }
  }
`);

const GetReviewsDocument = graphql(/* GraphQL */ `
  query GetReviews($movieId: ID!, $before: String, $last: Int!) {
    getMoviesReviews(
      filter: { movieId: { eq: $movieId } }
      sort: { createdAt: { direction: DESC } }
      before: $before
      last: $last
    ) {
      edges {
        node {
          id
          text
          mark
          createdAt
          user {
            id
            name
            avatar {
              url
            }
          }
        }
        cursor
      }
      pageInfo {
        hasPreviousPage
        startCursor
      }
    }
  }
`);

type Props = {
  movieId: string;
};

const reviewsCount = 2;

const ReviewsBlock = ({ movieId }: Props) => {
  const {
    data: reviewsData,
    loading: reviewsLoading,
    error: reviewsError,
    refetch,
    fetchMore,
  } = useQuery(GetReviewsDocument, {
    variables: {
      movieId,
      last: reviewsCount,
    },
  });
  const { data: userData } = useQuery(GetMeDocument, {
    fetchPolicy: 'network-only',
    onCompleted: async (data) => {
      if (data.getMe) {
        await getReview({
          variables: {
            movieId,
            userId: data.getMe.id,
          },
        });
      }
    },
  });
  const [getReview, { data: existingReviewData }] =
    useLazyQuery(GetReviewDocument);

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
                    isOwn={edge.node.user.id === userData?.getMe?.id}
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

  return (
    <div className="flex flex-col flex-auto gap-2">
      <h2 className="font-semibold text-xl leading-tight">Reviews</h2>
      {renderReviewsContent()}
      {userData && existingReviewData?.getMoviesReviews.edges.length === 0 && (
        <CreateReviewForm movieId={movieId} />
      )}
    </div>
  );
};

export default ReviewsBlock;
