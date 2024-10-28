'use client';

import React from 'react';
import { useSuspenseQuery } from '@apollo/client';
import {
  EpisodeFragment,
  HasActiveSubscriptionDocument,
  HasPurchaseDocument,
} from '@shared/api/graphql';
import { VideoPlayer } from '@widgets/video-player';

type Props = {
  seriesId: string;
  episode: EpisodeFragment;
};

const ClientSide = ({ episode, seriesId }: Props) => {
  const { data: hasPurchaseData } = useSuspenseQuery(HasPurchaseDocument, {
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore',
    variables: {
      movieId: seriesId,
    },
  });
  const { data: hasSubscriptionData } = useSuspenseQuery(HasActiveSubscriptionDocument, {
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore',
  });

  const canWatch =
    !!episode.video &&
    !!(
      (hasPurchaseData && hasPurchaseData.hasPurchase) ||
      (hasSubscriptionData && hasSubscriptionData.hasActiveSubscription)
    );

  if (!canWatch) {
    return <main className="relative flex container">Cannot watch!</main>;
  }

  return (
    <main className="relative flex container">
      {episode.video?.dashManifestMedia?.url ? (
        <VideoPlayer videoUrl={episode.video.dashManifestMedia.url} />
      ) : (
        <div>Unable to watch...</div>
      )}
    </main>
  );
};

export default ClientSide;
