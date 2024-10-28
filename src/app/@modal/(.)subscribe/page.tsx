import React from 'react';
import { getClient } from '@shared/api/graphql/client';
import { GetPlansDocument, HasActiveSubscriptionDocument } from '@shared/api/graphql';
import ClientSide from './ClientSide';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Subscribe' };

const Page = async () => {
  const client = getClient();
  const { data: subscriptionData } = await client.query({
    query: HasActiveSubscriptionDocument,
    fetchPolicy: 'no-cache',
  });

  if (!subscriptionData || subscriptionData.hasActiveSubscription) {
    redirect('/');
  }

  const { data: plansData } = await client.query({
    query: GetPlansDocument,
  });

  return <ClientSide plans={plansData.getPlans} />;
};

export default Page;
