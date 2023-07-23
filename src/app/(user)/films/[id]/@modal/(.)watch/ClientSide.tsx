'use client';

import React from 'react';
import { useSuspenseQuery_experimental } from '@apollo/client';
import {
  FilmItem_FilmFragment,
  HasActiveSubscriptionDocument,
  HasPurchaseDocument,
} from '@shared/api/graphql';
import { WatchModal } from '@widgets/watch-modal';

type Props = {
  film: FilmItem_FilmFragment;
};

const ClientSide = ({ film }: Props) => {
  const { data: hasPurchaseData } = useSuspenseQuery_experimental(
    HasPurchaseDocument,
    {
      fetchPolicy: 'network-only',
      errorPolicy: 'ignore',
      variables: {
        movieId: film.id,
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
    !!film.video &&
    !!(
      (hasPurchaseData && hasPurchaseData.hasPurchase) ||
      (hasSubscriptionData && hasSubscriptionData.hasActiveSubscription)
    );

  if (!canWatch) {
    return <></>;
  }

  return (
    <WatchModal
      title={`Watch ${film.title}`}
      url={film.video?.dashManifestMedia?.url}
      subtitles={film.video?.subtitles.map((value) => ({
        url: value.file.url,
        language: value.languageId,
      }))}
    />
  );
};

export default ClientSide;
