'use client';

import React, { useEffect } from 'react';
import shaka from 'shaka-player/dist/shaka-player.ui';

type Props = {
  videoUrl: string;
  seek?: number;
};

export const VideoPlayer = ({ videoUrl, seek }: Props) => {
  const videoContainerRef = React.useRef<HTMLDivElement>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const playerRef = React.useRef<shaka.Player | null>(null);

  useEffect(() => {
    if (videoContainerRef.current && videoRef.current && !playerRef.current) {
      const player = (playerRef.current = new shaka.Player(videoRef.current));
      const ui = new shaka.ui.Overlay(
        player,
        videoContainerRef.current,
        videoRef.current,
      );
      const controls = ui.getControls();

      controls?.configure({
        ...controls?.getConfig(),
        addSeekBar: true,
        doubleClickForFullscreen: true,
        fastForwardRates: [10, 30],
        keyboardSeekDistance: 10,
        forceLandscapeOnFullscreen: true,
        volumeBarColors: {
          base: '#d1d5db',
          level: '#9333ea',
        },
        seekBarColors: {
          base: '#d1d5db',
          buffered: '#9ca3af',
          played: '#9333ea',
          adBreaks: '#facc15',
        },
        rewindRates: [10, 30],
        showUnbufferedStart: false,
        singleClickForPlayAndPause: true,
        // controlPanelElements: ['fullscreen', 'sound'],
        /* controlPanelElements: [
          'play_pause',
          'mute',
          'time_and_duration',
          'spacer',
          'fullscreen',
          'overflow_menu',
        ],*/
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
      <video className="w-full h-full" ref={videoRef} />
    </div>
  );
};

export default VideoPlayer;
