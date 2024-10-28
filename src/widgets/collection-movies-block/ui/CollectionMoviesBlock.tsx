'use client';

import React from 'react';
import { useQuery } from '@apollo/client';
import { GetMoviesRelayDocument } from '@shared/api/graphql';
import { Button, Loader } from '@shared/ui';
import { MoviesList } from '@widgets/movies-list';

type Props = {
  collectionId: number;
  moviesCount?: number;
};

const CollectionMoviesBlock = ({ collectionId, moviesCount = 2 }: Props) => {
  const { data, loading, error, refetch, fetchMore } = useQuery(GetMoviesRelayDocument, {
    variables: {
      filter: {
        collectionsConnection: {
          collectionId: {
            eq: collectionId.toString(),
          },
        },
      },
      first: moviesCount,
    },
  });

  if (loading) {
    return (
      <div className="flex flex-col flex-auto p-4">
        <Loader />
      </div>
    );
  } else if (!data || error) {
    return (
      <div className="flex flex-col flex-auto p-4">
        <Button onClick={() => refetch()}>Reload reviews</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-auto gap-2">
      <MoviesList movies={data.getMoviesRelay.edges.map((edge) => edge.node)} />
      {data.getMoviesRelay.pageInfo.hasNextPage && (
        <Button
          onClick={() =>
            fetchMore({
              variables: {
                after: data?.getMoviesRelay.pageInfo.endCursor,
              },
            })
          }
        >
          Load More
        </Button>
      )}
    </div>
  );
};

export default CollectionMoviesBlock;
