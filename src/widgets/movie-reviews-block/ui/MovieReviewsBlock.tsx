'use client';

import { useSuspenseQuery_experimental } from '@apollo/client';
import { Button } from '@shared/ui';
import {
  GetMoviesReviewsRelayDocument,
  HasMovieReviewDocument,
} from '@shared/api/graphql';
import { useUser } from '@entities/user';
import { ReviewItem } from '@entities/review';
import { CreateMovieReviewForm } from '@features/create-movie-review';
import React from 'react';

type Props = {
  movieId: string;
  reviewsCount?: number;
};

const MovieReviewsBlock = ({ movieId, reviewsCount = 2 }: Props) => {
  const { data: reviewsData, fetchMore } = useSuspenseQuery_experimental(
    GetMoviesReviewsRelayDocument,
    {
      variables: {
        filter: {
          movieId: {
            eq: movieId,
          },
        },
        last: reviewsCount,
      },
    },
  );
  const { user } = useUser();
  const { data: hasReviewData } = useSuspenseQuery_experimental(
    HasMovieReviewDocument,
    {
      errorPolicy: 'ignore',
      variables: {
        movieId,
      },
    },
  );

  const shouldShowCreation = () => {
    return (
      hasReviewData &&
      !hasReviewData?.hasMovieReview &&
      !reviewsData?.getMoviesReviewsRelay.edges.some(
        (edge) => edge.node.user.id === user?.id,
      )
    );
  };

  return (
    <div className="flex flex-col flex-auto gap-2">
      <h2 className="font-semibold text-xl leading-tight">Reviews</h2>
      <div className="flex flex-col gap-1 py-2 px-5">
        {reviewsData.getMoviesReviewsRelay.edges.length === 0 ? (
          <div className="flex text-gray-500 italic w-full h-full items-center justify-center">
            Nothing here...
          </div>
        ) : (
          reviewsData.getMoviesReviewsRelay.edges
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
      {reviewsData.getMoviesReviewsRelay.pageInfo.hasPreviousPage && (
        <Button
          onClick={() =>
            fetchMore({
              variables: {
                before: reviewsData?.getMoviesReviewsRelay.pageInfo.startCursor,
              },
            })
          }
        >
          Load More
        </Button>
      )}
      {shouldShowCreation() && <CreateMovieReviewForm movieId={movieId} />}
    </div>
  );
};

export default MovieReviewsBlock;
