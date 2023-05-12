'use client';

import React, { useEffect, useState } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import clsx from 'clsx';
import { useUser } from '@entities/user';
import {
  CreateMovieUserDocument,
  GetMovieUserDocument,
  MovieUserFragment,
  UpdateMovieUserDocument,
} from '@shared/api/graphql';

type Props = {
  movieId: string;
};

const MovieBookmarkBlock = ({ movieId }: Props) => {
  const { user } = useUser();
  const [movieUser, setMovieUser] = useState<MovieUserFragment | null>(null);

  const [getMovieUser] = useLazyQuery(GetMovieUserDocument, {
    onError() {
      if (user) {
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
  const [updateMovieUser, { loading }] = useMutation(UpdateMovieUserDocument, {
    onCompleted(data) {
      setMovieUser(data.updateMovieUser);
    },
  });

  useEffect(() => {
    if (user) {
      getMovieUser({
        variables: {
          movieId,
          userId: user.id,
        },
      });
    }
  }, [getMovieUser, movieId, user]);

  if (!movieUser || !user) {
    return <></>;
  }

  return (
    <div className="flex gap-2">
      <button
        className="w-fit outline-none border-none"
        disabled={loading}
        onClick={() => {
          if (movieUser) {
            updateMovieUser({
              variables: {
                userId: movieUser.userId,
                movieId: movieUser.movieId,
                input: {
                  isBookmarked: !movieUser.isBookmarked,
                },
              },
            });
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className={clsx('transition-colors', {
            ['fill-yellow-400 dark:fill-yellow-500 hover:fill-red-400 dark:hover:fill-red-500']:
              movieUser.isBookmarked,
            ['fill-gray-500 dark:fill-gray-300 hover:fill-yellow-400 dark:hover:fill-yellow-500']:
              !movieUser.isBookmarked,
          })}
          viewBox="0 0 16 16"
        >
          {movieUser.isBookmarked ? (
            <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
          ) : (
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
          )}
        </svg>
      </button>
      <button
        className="w-fit outline-none border-none"
        disabled={loading}
        onClick={() => {
          if (movieUser) {
            updateMovieUser({
              variables: {
                userId: movieUser.userId,
                movieId: movieUser.movieId,
                input: {
                  isWatched: !movieUser.isWatched,
                },
              },
            });
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
          className={clsx('transition-colors', {
            ['fill-pink-400 dark:fill-pink-500 hover:fill-gray-400 dark:hover:fill-gray-500']:
              movieUser.isWatched,
            ['fill-gray-500 dark:fill-gray-300 hover:fill-pink-400 dark:hover:fill-pink-500']:
              !movieUser.isWatched,
          })}
        >
          {movieUser.isWatched ? (
            <path
              d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z"
              fillRule="nonzero"
            />
          ) : (
            <path
              d="m7.234 3.004c-2.652 0-5.234 1.829-5.234 5.177 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-3.353-2.58-5.168-5.229-5.168-1.836 0-3.646.866-4.771 2.554-1.13-1.696-2.935-2.563-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7.14.198.368.316.611.317.243 0 .471-.117.612-.314.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z"
              fillRule="nonzero"
            />
          )}
        </svg>
      </button>
    </div>
  );
};

export default MovieBookmarkBlock;
