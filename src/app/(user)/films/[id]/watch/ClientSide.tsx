'use client';

import { useSuspenseQuery } from '@apollo/client';
import {
  FilmItem_FilmFragment,
  GetVideoDocument,
  HasActiveSubscriptionDocument,
  HasPurchaseDocument,
} from '@shared/api/graphql';
import { buttonVariants } from '@shared/ui';
import { VideoPlayer } from '@widgets/video-player';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

type Props = {
  film: FilmItem_FilmFragment;
};

const ClientSide = ({ film }: Props) => {
  const { data: hasPurchaseData } = useSuspenseQuery(HasPurchaseDocument, {
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore',
    variables: {
      movieId: film.id,
    },
  });
  const { data: hasSubscriptionData } = useSuspenseQuery(HasActiveSubscriptionDocument, {
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore',
  });
  const { data: videoData } = useSuspenseQuery(GetVideoDocument, {
    variables: {
      id: Number(film.video?.id!),
    },
    skip: !film.video?.id,
  });

  if (
    (!hasSubscriptionData || !hasSubscriptionData.hasActiveSubscription) &&
    (!hasPurchaseData || !hasPurchaseData.hasPurchase)
  ) {
    return (
      <div className="text-3xl flex-1 flex items-center justify-center">
        No access to watch this film!
      </div>
    );
  }

  if (!videoData) {
    return <div className="text-3xl flex-1 flex items-center justify-center">Will be soon...</div>;
  }

  const video = videoData.getVideo;

  return (
    <main className="relative flex-1 flex flex-col p-4 gap-3">
      <div className="flex gap-3 items-center">
        <Link href={`/films/${film.id}`} className={buttonVariants({ variant: 'ghost' })}>
          <ChevronLeft className="w-3 h-3" />
          Back
        </Link>
        <h1 className="font-semibold text-3xl leading-tight">{film.title}</h1>
      </div>
      <div>
        {video?.dashManifestMedia?.url ? (
          <VideoPlayer
            videoUrl={video.dashManifestMedia.url}
            subtitles={video.subtitles.map((value) => ({
              url: value.file.url,
              language: value.languageId,
            }))}
          />
        ) : (
          <div>Unable to watch...</div>
        )}
      </div>
    </main>
  );
};

export default ClientSide;
