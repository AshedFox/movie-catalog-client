'use client';

import React from 'react';
import { useSuspenseQuery_experimental } from '@apollo/client';
import { GetSeasonsDocument, SortDirectionEnum } from '@shared/api/graphql';
import { Button, List } from '@shared/ui';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  seriesId: string;
  hasPurchase: boolean;
};

const SeriesSeasonsList = ({ seriesId, hasPurchase }: Props) => {
  const { data } = useSuspenseQuery_experimental(GetSeasonsDocument, {
    variables: {
      limit: 999,
      offset: 0,
      filter: {
        seriesId: {
          eq: seriesId,
        },
      },
      sort: {
        numberInSeries: {
          direction: SortDirectionEnum.ASC,
        },
      },
    },
  });

  const seasons = data?.getSeasons?.nodes ?? [];

  return (
    <List
      items={seasons.map((season) => {
        return {
          key: season.id,
          content: (
            <details className="flex p-4 flex-col flex-auto border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-900 gap-2">
              <summary className="text-lg font-semibold cursor-pointer">
                {season.title ?? `Season #${season.numberInSeries}`}
              </summary>
              <div className="flex flex-auto overflow-x-auto overflow-y-hidden">
                <List
                  direction="horizontal"
                  items={season.episodes.map((episode) => {
                    return {
                      key: episode.id,
                      content: (
                        <div className="rounded w-[150px] h-full flex flex-col border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-800">
                          <div className="rounded-t w-full h-24 shrink-0 relative overflow-hidden border border-gray-200 dark:border-gray-800">
                            <Image
                              src={episode.cover?.url ?? '/blank_item.jpg'}
                              alt={'card cover'}
                              width={512}
                              height={512}
                              className={'object-cover w-full h-full'}
                            />
                          </div>
                          <div className="flex flex-col p-2 gap-2">
                            <h3
                              className="truncate"
                              title={
                                episode.title ??
                                `Episode #${episode.numberInSeries}`
                              }
                            >
                              {episode.title ??
                                `Episode #${episode.numberInSeries}`}
                            </h3>
                            {hasPurchase &&
                              episode.video?.dashManifestMedia?.url && (
                                <Link
                                  className="flex"
                                  href={`series/${seriesId}/watch?e=${episode.numberInSeries}`}
                                >
                                  <Button stretch size="sm">
                                    Watch
                                  </Button>
                                </Link>
                              )}
                          </div>
                        </div>
                      ),
                    };
                  })}
                />
              </div>
            </details>
          ),
        };
      })}
    />
  );
};

export default SeriesSeasonsList;
