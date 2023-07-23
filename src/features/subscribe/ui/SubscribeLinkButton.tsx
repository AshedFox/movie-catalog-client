'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@shared/ui';
import { useQuery } from '@apollo/client';
import { HasActiveSubscriptionDocument } from '@shared/api/graphql';

const SubscribeLinkButton = () => {
  const { data } = useQuery(HasActiveSubscriptionDocument, {
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore',
  });

  if ((data && data.hasActiveSubscription) || !data) {
    return <></>;
  }

  return (
    <Link href={'/subscribe'}>
      <Button size="sm" variant="secondary">
        Subscribe
      </Button>
    </Link>
  );
};

export default SubscribeLinkButton;
