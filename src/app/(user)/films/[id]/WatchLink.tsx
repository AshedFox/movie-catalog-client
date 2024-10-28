'use client';

import { useSuspenseQuery } from '@apollo/client';
import { useSession } from '@features/auth/session';
import { HasActiveSubscriptionDocument, HasPurchaseDocument } from '@shared/api/graphql';
import { cn } from '@shared/lib/utils';
import { Button, buttonVariants } from '@shared/ui';
import Link from 'next/link';

type Props = {
  filmId: string;
  videoId?: number;
};

const WatchLink = ({ filmId, videoId }: Props) => {
  const session = useSession();
  const { data: hasSubscriptionData } = useSuspenseQuery(HasActiveSubscriptionDocument, {
    errorPolicy: 'ignore',
    skip: !session.data?.user,
  });
  const { data: hasPurchaseData } = useSuspenseQuery(HasPurchaseDocument, {
    fetchPolicy: 'network-only',
    variables: {
      movieId: filmId,
    },
    errorPolicy: 'ignore',
    skip: !session.data?.user,
  });

  if (!videoId) {
    return (
      <Button className="w-full" variant="primary" disabled>
        Will be soon...
      </Button>
    );
  }

  if (!session.data?.user) {
    return null;
  }

  if (
    (!hasSubscriptionData || !hasSubscriptionData.hasActiveSubscription) &&
    (!hasPurchaseData || !hasPurchaseData.hasPurchase)
  ) {
    return null;
  }

  return (
    <Link
      className={cn(buttonVariants({ variant: 'primary' }), 'w-full')}
      href={`/films/${filmId}/watch`}
    >
      Watch
    </Link>
  );
};

export default WatchLink;
