'use client';

import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
// import { loadStripe } from '@stripe/stripe-js';
import {
  CreatePurchaseSessionDocument,
  GetProductDocument,
} from '@shared/api/graphql';
import { Button } from '@shared/ui';

type Props = {
  movieId: string;
  productId: string;
};

const PurchaseBlock = ({ movieId, productId }: Props) => {
  const { data: productData, loading: productLoading } = useQuery(
    GetProductDocument,
    {
      variables: {
        id: productId,
      },
    },
  );
  const [createPurchaseSession] = useMutation(CreatePurchaseSessionDocument);

  if (productLoading || !productData) {
    return <></>;
  }

  return (
    <Button
      onClick={async () => {
        const { data: sessionData } = await createPurchaseSession({
          variables: {
            priceId: productData.getProduct.defaultPrice.id,
            movieId,
          },
        });

        if (sessionData) {
          window.open(sessionData.createPurchaseSession, '_blank');
        }
      }}
    >
      Buy
    </Button>
  );
};

export default PurchaseBlock;
