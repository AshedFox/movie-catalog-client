'use client';

import React from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { HasActiveSubscriptionDocument } from '@shared/api/graphql';
import { cn } from '@shared/lib/utils';
import { buttonVariants } from '@shared/ui/Button';
import { DollarSign } from 'lucide-react';

const SubscribeLink = () => {
  const { data } = useQuery(HasActiveSubscriptionDocument, {
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore',
  });

  if ((data && data.hasActiveSubscription) || !data) {
    return <></>;
  }

  return (
    <Link
      className={cn(
        buttonVariants({ variant: 'primary', size: 'sm' }),
        'w-full flex items-center gap-1',
      )}
      href={'/subscribe'}
    >
      <DollarSign className="w-4 h-4" />
      Subscribe
    </Link>
  );
};

export default SubscribeLink;
