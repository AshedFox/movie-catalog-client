import React from 'react';
import { getClient } from '@shared/api/graphql/client';
import { GetPlansDocument, HasActiveSubscriptionDocument } from '@shared/api/graphql';
import { redirect } from 'next/navigation';
import { SubscribeForm } from '@features/subscribe';
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

  return (
    <main className="flex flex-col py-10 flex-auto gap-2 md:gap-5">
      <SubscribeForm plans={plansData.getPlans} />
    </main>
  );
};

export default Page;
