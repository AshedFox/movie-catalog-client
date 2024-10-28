'use client';

import React from 'react';
import { VideoPlayer } from '../../video-player';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@shared/ui';
import { useRouter } from 'next/navigation';
import { FilmItem_FilmFragment, VideoFragment } from '@shared/api/graphql';

type Props = {
  film: FilmItem_FilmFragment;
  video: VideoFragment;
};

const FilmWatchModal = ({ film, video }: Props) => {
  const router = useRouter();

  return (
    <Dialog defaultOpen onOpenChange={(open) => !open && router.back()}>
      <DialogContent className="w-screen max-w-screen-lg">
        <DialogHeader>
          <DialogTitle className="text-3xl">{film.title}</DialogTitle>
        </DialogHeader>
        <div>
          {video.dashManifestMedia?.url ? (
            <VideoPlayer
              videoUrl={video.dashManifestMedia.url}
              subtitles={video.subtitles.map((s) => ({
                language: s.languageId,
                url: s.file.url,
              }))}
            />
          ) : (
            <div>Unable to watch...</div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FilmWatchModal;
