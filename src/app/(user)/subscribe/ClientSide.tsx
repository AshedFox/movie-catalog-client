'use client';

import React from 'react';
import { SubscriptionForm } from '@features/subscribe';
import {
  HasActiveSubscriptionDocument,
  PlanFragment,
} from '@shared/api/graphql';
import { useSuspenseQuery_experimental } from '@apollo/client';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();

  if (!data || data.hasActiveSubscription) {
    router.replace('/');
  }

  return (
    <main className="flex flex-col py-4 gap-3 container">
      {plans.map((plan) => (
        <SubscriptionForm key={plan.id} plan={plan} />
      ))}
    </main>
  );
};

export default ClientSide;
