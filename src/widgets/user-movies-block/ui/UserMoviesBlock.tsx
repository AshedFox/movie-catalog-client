'use client';

import React from 'react';
import { GetMoviesUsersDocument } from '@shared/api/graphql';
import Link from 'next/link';
import { FilmRow } from '@entities/film';
import { SeriesRow } from '@entities/series';
import { List } from '@shared/ui';
import { useSuspenseQuery_experimental } from '@apollo/client';

type Props = {
  title: string;
  userId: string;
  moviesCount: number;
  type: 'bookmark' | 'favorite';
  fullLink: string;
};

const UserMoviesBlock = ({
  moviesCount,
  userId,
  type,
  title,
  fullLink,
}: Props) => {
  const { data } = useSuspenseQuery_experimental(GetMoviesUsersDocument, {
    variables: {
      offset: 0,
      limit: moviesCount,
      withMovie: true,
      filter: {
        userId: {
          eq: userId,
        },
        ...(type === 'bookmark'
          ? {
              isBookmarked: {
                eq: true,
              },
            }
          : {
              isWatched: {
                eq: true,
              },
            }),
      },
    },
  });

  const moviesUsers = data.getMoviesUsers.nodes;

  return (
    <div className="flex flex-col flex-auto gap-2 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
      <h2 className="font-bold text-2xl leading-tight">{title}</h2>
      <div className="flex p-2 max-h-[400px] flex-auto overflow-auto">
        <List
          items={moviesUsers.map((movieUser) => {
            const item = movieUser.movie!;

            return {
              key: item.id,
              content:
                item.__typename === 'Film' ? (
                  <FilmRow key={item.id} film={item} />
                ) : item.__typename === 'Series' ? (
                  <SeriesRow key={item.id} series={item} />
                ) : (
                  <></>
                ),
            };
          })}
        />
      </div>
      {fullLink && (
        <Link
          className="text-sm border-t border-gray-200 dark:border-gray-800 pt-1"
          href={fullLink}
        >
          See all →
        </Link>
      )}
    </div>
  );
};

export default UserMoviesBlock;
