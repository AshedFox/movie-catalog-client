'use client';

import React from 'react';
import { useSuspenseQuery } from '@apollo/client';
import {
  HasActiveSubscriptionDocument,
  HasPurchaseDocument,
  SeasonItem_SeasonFragment,
  SeriesItem_SeriesFragment,
} from '@shared/api/graphql';
import { SeriesWatchModal } from '@widgets/watch-modal';

type Props = {
  series: SeriesItem_SeriesFragment;
  seasons: SeasonItem_SeasonFragment[];
};

const ClientSide = ({ series, seasons }: Props) => {
  const { data: hasPurchaseData } = useSuspenseQuery(HasPurchaseDocument, {
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore',
    variables: {
      movieId: series.id,
    },
  });
  const { data: hasSubscriptionData } = useSuspenseQuery(HasActiveSubscriptionDocument, {
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore',
  });

  if (
    (!hasSubscriptionData || !hasSubscriptionData.hasActiveSubscription) &&
    (!hasPurchaseData || !hasPurchaseData.hasPurchase)
  ) {
    return null;
  }

  return <SeriesWatchModal series={series} seasons={seasons} />;
};

export default ClientSide;
