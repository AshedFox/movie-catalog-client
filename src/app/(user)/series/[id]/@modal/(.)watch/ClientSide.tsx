'use client';

import React from 'react';
import { useSuspenseQuery_experimental } from '@apollo/client';
import {
  EpisodeFragment,
  HasActiveSubscriptionDocument,
  HasPurchaseDocument,
} from '@shared/api/graphql';
import { WatchModal } from '@widgets/watch-modal';

type Props = {
  seriesId: string;
  episode: EpisodeFragment;
};

const ClientSide = ({ episode, seriesId }: Props) => {
  const { data: hasPurchaseData } = useSuspenseQuery_experimental(
    HasPurchaseDocument,
    {
      fetchPolicy: 'network-only',
      errorPolicy: 'ignore',
      variables: {
        movieId: seriesId,
      },
    },
  );
  const { data: hasSubscriptionData } = useSuspenseQuery_experimental(
    HasActiveSubscriptionDocument,
    {
      fetchPolicy: 'network-only',
      errorPolicy: 'ignore',
    },
  );

  const canWatch =
    !!episode.video &&
    !!(
      (hasPurchaseData && hasPurchaseData.hasPurchase) ||
      (hasSubscriptionData && hasSubscriptionData.hasActiveSubscription)
    );

  if (!canWatch) {
    return <></>;
  }

  return (
    <WatchModal
      title={`Watch ${episode.title ?? `Episode #${episode.numberInSeries}`}`}
      url={episode.video?.dashManifestMedia?.url}
      subtitles={episode.video?.subtitles.map((value) => ({
        url: value.file.url,
        language: value.languageId,
      }))}
    />
  );
};

export default ClientSide;
