'use client';

import { useMutation, useQuery } from '@apollo/client';
import { useSession } from '@features/auth/session';
import {
  CreateMovieUserDocument,
  GetMovieUserDocument,
  MovieUserFragment,
  UpdateMovieUserDocument,
} from '@shared/api/graphql';
import { cn } from '@shared/lib/utils';
import { Button } from '@shared/ui';
import { Bookmark, Eye, Heart } from 'lucide-react';
import { useState } from 'react';

type Props = {
  className?: string;
  movieId: string;
};

const MovieListsBlock = ({ movieId, className }: Props) => {
  const session = useSession();
  const [movieUser, setMovieUser] = useState<MovieUserFragment | null>(null);
  const user = session.data?.user;

  useQuery(GetMovieUserDocument, {
    skip: !user?.id,
    variables: {
      movieId,
      userId: user?.id!,
    },
    onError(err) {
      if (err.graphQLErrors[0].extensions.status === 404) {
        createMovieUser({
          variables: {
            input: {
              movieId,
            },
          },
        });
      }
    },
    onCompleted(data) {
      setMovieUser(data.getMovieUser);
    },
  });
  const [createMovieUser] = useMutation(CreateMovieUserDocument, {
    onCompleted(data) {
      setMovieUser(data.createMovieUser);
    },
  });
  const [updateMovieUser] = useMutation(UpdateMovieUserDocument, {
    onCompleted(data) {
      setMovieUser(data.updateMovieUser);
    },
  });

  if (!user || !movieUser) {
    return null;
  }

  return (
    <div className={className}>
      <Button
        title="Bookmark"
        variant="ghost"
        size="icon"
        onClick={() => {
          updateMovieUser({
            variables: {
              userId: movieUser.userId,
              movieId: movieUser.movieId,
              input: {
                isBookmarked: !movieUser.isBookmarked,
              },
            },
          });
        }}
      >
        <Bookmark
          className={cn({
            ['text-amber-500 dark:text-amber-600 fill-amber-500 dark:fill-amber-600']:
              movieUser.isBookmarked,
          })}
        />
      </Button>
      <Button
        title="Watched"
        variant="ghost"
        size="icon"
        onClick={() => {
          updateMovieUser({
            variables: {
              userId: movieUser.userId,
              movieId: movieUser.movieId,
              input: {
                isWatched: !movieUser.isWatched,
              },
            },
          });
        }}
      >
        <Eye
          className={cn({
            ['text-purple-500 dark:text-purple-600']: movieUser.isWatched,
          })}
        />
      </Button>
      <Button
        title="Favorite"
        variant="ghost"
        size="icon"
        onClick={() => {
          updateMovieUser({
            variables: {
              userId: movieUser.userId,
              movieId: movieUser.movieId,
              input: {
                isFavorite: !movieUser.isFavorite,
              },
            },
          });
        }}
      >
        <Heart
          className={cn({
            ['text-red-500 dark:text-red-600 fill-red-500 dark:fill-red-600']: movieUser.isFavorite,
          })}
        />
      </Button>
    </div>
  );
};

export default MovieListsBlock;
