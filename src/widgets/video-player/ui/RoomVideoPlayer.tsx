'use client';

import React, { ComponentProps, useEffect } from 'react';
import shaka from 'shaka-player/dist/shaka-player.ui';

type Props = ComponentProps<'video'> & {
  videoUrl: string;
  seek?: number;
};

export const VideoPlayer = ({ videoUrl, seek, ...otherProps }: Props) => {
  const videoContainerRef = React.useRef<HTMLDivElement>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const playerRef = React.useRef<shaka.Player | null>(null);

  useEffect(() => {
    if (videoContainerRef.current && videoRef.current && !playerRef.current) {
      const volume = localStorage.getItem('player_volume');
      if (volume) {
        videoRef.current.volume = Number(volume);
      }
      const player = (playerRef.current = new shaka.Player(videoRef.current));
      const ui = new shaka.ui.Overlay(
        player,
        videoContainerRef.current,
        videoRef.current,
      );
      const controls = ui.getControls();

      controls?.configure({
        ...controls?.getConfig(),
        doubleClickForFullscreen: true,
        forceLandscapeOnFullscreen: true,
        volumeBarColors: {
          base: '#d1d5db',
          level: '#9333ea',
        },
        addSeekBar: false,
        showUnbufferedStart: false,
        singleClickForPlayAndPause: true,
        overflowMenuButtons: ['language', 'quality', 'captions'],
        controlPanelElements: [
          'play_pause',
          'time_and_duration',
          'spacer',
          'mute',
          'volume',
          'fullscreen',
          'overflow_menu',
        ],
      });

      player
        .load(videoUrl.replace(/%2F/gi, '/'), seek ? seek / 1000 : undefined)
        .then(() => {
          console.log('video loaded');
        })
        .catch((err) => console.log('error', err));
    }
  }, [seek, videoUrl]);

  return (
    <div
      className="shadow-lg mx-auto flex-auto bg-gray-900 rounded-lg overflow-hidden"
      ref={videoContainerRef}
    >
      <video
        className="w-full h-full"
        ref={videoRef}
        onVolumeChange={(e) => {
          localStorage.setItem('player_volume', String(e.currentTarget.volume));
        }}
        {...otherProps}
      />
    </div>
  );
};

export default VideoPlayer;
