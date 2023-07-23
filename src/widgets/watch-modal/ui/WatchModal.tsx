'use client';

import React, { useState } from 'react';
import { VideoPlayer } from '../../video-player';
import { Modal } from '@shared/ui';
import { useRouter } from 'next/navigation';

type Props = {
  title: string;
  url?: string;
  subtitles?: { url: string; language: string }[];
};

const WatchModal = ({ title, url, subtitles }: Props) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(true);

  return (
    <Modal
      rootId="modal-root"
      showModal={showModal}
      title={<div className="text-xl font-semibold">{title}</div>}
      onClose={() => {
        setShowModal(false);
        router.back();
      }}
    >
      <div className="flex w-screen max-w-screen-lg overflow-hidden">
        {url ? (
          <VideoPlayer videoUrl={url} subtitles={subtitles ?? []} />
        ) : (
          <div>Unable to watch...</div>
        )}
      </div>
    </Modal>
  );
};

export default WatchModal;
