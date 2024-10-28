'use client';

import React, { useEffect, useMemo } from 'react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@shared/ui';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
  GetEpisodesDocument,
  SeasonItem_SeasonFragment,
  SeriesItem_SeriesFragment,
  SortDirectionEnum,
} from '@shared/api/graphql';
import { useLazyQuery } from '@apollo/client';
import { VideoPlayer } from '@widgets/video-player';

type Props = {
  series: SeriesItem_SeriesFragment;
  seasons: SeasonItem_SeasonFragment[];
};

const SeriesWatchModal = ({ series, seasons }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [getEpisdoes, { data: episodesData, loading: episodesLoading }] =
    useLazyQuery(GetEpisodesDocument);

  const seasonNum = searchParams.get('s');
  const episodeNum = seasonNum ? searchParams.get('e') : null;

  const changeSeason = (seasonNum: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    newSearchParams.set('s', seasonNum);
    newSearchParams.delete('e');

    router.push(`${pathname}?${newSearchParams.toString()}`);
  };

  const changeEpisode = (episodeNum: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    newSearchParams.set('e', episodeNum);

    router.push(`${pathname}?${newSearchParams.toString()}`);
  };

  const episode = useMemo(() => {
    if (!episodesData) {
      return null;
    }
    return episodesData?.getEpisodes.nodes.find(
      (episode) => episode.numberInSeason === Number(episodeNum),
    );
  }, [episodeNum, episodesData]);

  useEffect(() => {
    const season = seasons.find((season) => season.numberInSeries === Number(seasonNum));

    if (season) {
      getEpisdoes({
        variables: {
          limit: 9999,
          offset: 0,
          filter: {
            seasonId: {
              eq: season.id,
            },
          },
          sort: {
            numberInSeason: {
              direction: SortDirectionEnum.ASC,
            },
          },
        },
      });
    }
  }, [getEpisdoes, seasonNum, seasons]);

  return (
    <Dialog defaultOpen onOpenChange={(open) => !open && router.push(`/series/${series.id}`)}>
      <DialogContent className="w-screen max-w-screen-lg">
        <DialogHeader>
          <DialogTitle className="text-3xl">{series.title}</DialogTitle>
        </DialogHeader>
        <div className="aspect-video flex items-center justify-center">
          {episode ? (
            episode.video?.dashManifestMedia?.url ? (
              <VideoPlayer
                videoUrl={episode.video.dashManifestMedia.url}
                subtitles={episode.video.subtitles.map((s) => ({
                  language: s.languageId,
                  url: s.file.url,
                }))}
              />
            ) : (
              <div className="m-auto">Unable to watch...</div>
            )
          ) : (
            <div className="m-auto">Select season and episode...</div>
          )}
        </div>
        <DialogFooter>
          <Select
            onValueChange={changeSeason}
            defaultValue={seasonNum ?? undefined}
            disabled={episodesLoading}
          >
            <SelectTrigger>
              <SelectValue placeholder="Season..." />
            </SelectTrigger>
            <SelectContent>
              {seasons.map((season) => (
                <SelectItem key={season.id} value={season.numberInSeries.toString()}>
                  {season.numberInSeries}
                  {season.title ? ` - ${season.title}` : ''}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            onValueChange={changeEpisode}
            defaultValue={episodeNum ?? undefined}
            disabled={episodesLoading || !seasonNum}
          >
            <SelectTrigger>
              <SelectValue placeholder="Episode..." />
            </SelectTrigger>
            <SelectContent>
              {episodesData?.getEpisodes.nodes.map((episode) => (
                <SelectItem key={episode.id} value={episode.numberInSeason.toString()}>
                  {episode.numberInSeason}
                  {episode.title ? ` - ${episode.title}` : ''}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SeriesWatchModal;
