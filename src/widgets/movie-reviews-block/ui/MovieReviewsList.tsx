import { NetworkStatus, useQuery } from '@apollo/client';
import { ReviewItem } from '@entities/review';
import { useSession } from '@features/auth/session';
import { GetMoviesReviewsRelayDocument } from '@shared/api/graphql';
import { Button } from '@shared/ui';
import { Loader } from 'lucide-react';
import React from 'react';

type Props = {
  movieId: string;
  count?: number;
};

const MovieReviewsList = ({ movieId, count = 2 }: Props) => {
  const session = useSession();
  const { data, loading, networkStatus, fetchMore } = useQuery(GetMoviesReviewsRelayDocument, {
    variables: {
      filter: {
        movieId: {
          eq: movieId,
        },
      },
      last: count,
    },
  });

  if (loading) {
    return <Loader className="animate-spin m-auto w-6 h-6" />;
  }

  if (!data) {
    return null;
  }

  if (data.getMoviesReviewsRelay.edges.length === 0) {
    return <div className="text-gray-500 italic m-auto">Nothing here...</div>;
  }

  return (
    <ul className="w-full flex flex-col gap-2">
      {data.getMoviesReviewsRelay.edges
        .slice()
        .reverse()
        .map((edge) => (
          <ReviewItem
            key={edge.node.id}
            review={edge.node}
            isOwn={edge.node.user.id === session.data?.user?.id}
          />
        ))}
      {networkStatus === NetworkStatus.fetchMore && (
        <Loader className="animate-spin m-auto w-6 h-6" />
      )}
      {data.getMoviesReviewsRelay.pageInfo.hasPreviousPage && (
        <Button
          onClick={() =>
            fetchMore({
              variables: {
                before: data?.getMoviesReviewsRelay.pageInfo.startCursor,
              },
            })
          }
        >
          Load More
        </Button>
      )}
    </ul>
  );
};

export default MovieReviewsList;
