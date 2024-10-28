'use client';

import { useSuspenseQuery } from '@apollo/client';
import { HasActiveSubscriptionDocument, HasPurchaseDocument } from '@shared/api/graphql';
import { cn } from '@shared/lib/utils';
import { Button, buttonVariants } from '@shared/ui';
import Link from 'next/link';

type Props = {
  seriesId: string;
};

const WatchLink = ({ seriesId }: Props) => {
  const { data: hasSubscriptionData } = useSuspenseQuery(HasActiveSubscriptionDocument, {
    errorPolicy: 'ignore',
  });
  const { data: hasPurchaseData } = useSuspenseQuery(HasPurchaseDocument, {
    fetchPolicy: 'network-only',
    variables: {
      movieId: seriesId,
    },
    errorPolicy: 'ignore',
  });

  if (
    (!hasSubscriptionData || !hasSubscriptionData.hasActiveSubscription) &&
    (!hasPurchaseData || !hasPurchaseData.hasPurchase)
  ) {
    return null;
  }

  return (
    <Link
      className={cn(buttonVariants({ variant: 'primary' }), 'w-full')}
      href={`/series/${seriesId}/watch`}
    >
      Watch
    </Link>
  );
};

export default WatchLink;
