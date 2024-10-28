'use client';

import { useQuery } from '@apollo/client';
import { CreateMovieReviewForm } from '@features/create-movie-review';
import { HasMovieReviewDocument } from '@shared/api/graphql';
import MovieReviewsList from './MovieReviewsList';
import { useSession } from '@features/auth/session';

type Props = {
  movieId: string;
  reviewsCount?: number;
};

const MovieReviewsBlock = ({ movieId, reviewsCount = 2 }: Props) => {
  const session = useSession();
  const user = session.data?.user;

  const { data: hasReviewData } = useQuery(HasMovieReviewDocument, {
    variables: {
      movieId,
    },
    skip: !user,
  });

  const isFormVisible = !!user && hasReviewData && !hasReviewData?.hasMovieReview;

  return (
    <div className="flex flex-col flex-auto gap-2">
      <h2 className="font-semibold text-xl leading-tight">Reviews</h2>
      <div className="flex flex-col gap-2 min-h-[120px]">
        <MovieReviewsList movieId={movieId} count={reviewsCount} />
      </div>
      {isFormVisible && <CreateMovieReviewForm movieId={movieId} />}
    </div>
  );
};

export default MovieReviewsBlock;
