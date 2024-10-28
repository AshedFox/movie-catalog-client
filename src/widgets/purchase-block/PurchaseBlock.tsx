'use client';

import { useSuspenseQuery } from '@apollo/client';
import { useSession } from '@features/auth/session';
import { PurchaseModal, PurchaseOpenButton } from '@features/purchase';
import { HasPurchaseDocument } from '@shared/api/graphql';
import { buttonVariants } from '@shared/ui';
import Link from 'next/link';

type Props = {
  movieId: string;
  videoId?: number;
  movieTitle: string;
  productId?: string;
};

const PurchaseBlock = ({ movieId, videoId, productId, movieTitle }: Props) => {
  const session = useSession();
  const user = session.data?.user;
  const { data } = useSuspenseQuery(HasPurchaseDocument, {
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore',
    variables: {
      movieId: movieId,
    },
  });

  if (!data || !data.hasPurchase || !productId) {
    return null;
  }

  if (!user) {
    return (
      <Link className={buttonVariants({ variant: 'primary', size: 'lg' })} href="/login">
        Buy
      </Link>
    );
  }

  return (
    <>
      <PurchaseModal title={movieTitle} productId={productId} movieId={movieId} />
      <PurchaseOpenButton />
    </>
  );
};

export default PurchaseBlock;
