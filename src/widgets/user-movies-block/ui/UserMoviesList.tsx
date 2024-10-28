'use client';

import { useSuspenseQuery } from '@apollo/client';
import { MovieRow } from '@entities/movie';
import { GetMoviesUsersDocument } from '@shared/api/graphql';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef } from 'react';

type Props = {
  moviesCount: number;
  userId: string;
  type: 'isBookmarked' | 'isWatched' | 'isFavorite';
  height: number | string;
};

const UserMoviesList = ({ moviesCount, type, userId, height }: Props) => {
  const { data } = useSuspenseQuery(GetMoviesUsersDocument, {
    variables: {
      offset: 0,
      limit: moviesCount,
      withMovie: true,
      filter: {
        userId: {
          eq: userId,
        },
        [type]: {
          eq: true,
        },
      },
    },
  });
  const userMovies = data.getMoviesUsers.nodes;
  const parentRef = useRef(null);
  const virtualizer = useVirtualizer({
    count: userMovies.length,
    estimateSize: () => 200,
    getScrollElement: () => parentRef.current,
    overscan: 5,
  });

  const virtualItems = virtualizer.getVirtualItems();

  if (userMovies.length === 0) {
    return <div className="flex items-center justify-center flex-1">Nothing here...</div>;
  }

  return (
    <div className="overflow-y-auto w-full" style={{ height }} ref={parentRef}>
      <div className="relative w-full" style={{ height: virtualizer.getTotalSize() }}>
        {virtualItems.map((virtualRow) => (
          <div
            key={virtualRow.key}
            data-index={virtualRow.index}
            ref={virtualizer.measureElement}
            className="absolute top-0 left-0 w-full"
            style={{
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            <MovieRow
              className={virtualRow.index !== userMovies.length - 1 ? 'mb-1' : ''}
              movie={userMovies[virtualRow.index].movie!}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserMoviesList;
