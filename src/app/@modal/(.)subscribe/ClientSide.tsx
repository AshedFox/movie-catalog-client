'use client';

import React from 'react';
import { useSuspenseQuery_experimental } from '@apollo/client';
import {
  HasActiveSubscriptionDocument,
  PlanFragment,
} from '@shared/api/graphql';
import { SubscribeModal } from '@widgets/subscribe-modal';

type Props = {
  plans: PlanFragment[];
};

const ClientSide = ({ plans }: Props) => {
  const { data } = useSuspenseQuery_experimental(
    HasActiveSubscriptionDocument,
    {
      fetchPolicy: 'network-only',
      errorPolicy: 'ignore',
    },
  );

  if (!data || data.hasActiveSubscription) {
    return <></>;
  }

  return <SubscribeModal plans={plans} />;
};

export default ClientSide;
