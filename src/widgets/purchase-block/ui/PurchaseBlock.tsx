'use client';

import React, { SyntheticEvent, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
// import { loadStripe } from '@stripe/stripe-js';
import {
  CreatePurchaseSessionDocument,
  GetProductDocument,
} from '@shared/api/graphql';
import { Button } from '@shared/ui';
import clsx from 'clsx';

type Props = {
  movieId: string;
  productId: string;
};

const PurchaseBlock = ({ movieId, productId }: Props) => {
  const [selectedPrice, setSelectedPrice] = useState<string>();
  const { data: productData, loading: productLoading } = useQuery(
    GetProductDocument,
    {
      variables: {
        id: productId,
      },
    },
  );
  const [createPurchaseSession, { loading: createLoading }] = useMutation(
    CreatePurchaseSessionDocument,
  );

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (productData) {
      const { data: sessionData } = await createPurchaseSession({
        variables: {
          priceId: productData.getProduct.prices[0].id,
          movieId,
        },
      });

      if (sessionData) {
        window.open(sessionData.createPurchaseSession, '_blank');
      }
    }
  };

  if (productLoading || !productData) {
    return <></>;
  }

  const product = productData.getProduct;

  return (
    <form
      className="rounded-lg p-4 flex flex-col gap-2 border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900"
      onSubmit={handleSubmit}
    >
      {product.prices.length > 0 && (
        <div className="flex gap-2 px-4 overflow-auto">
          {product.prices.map((price) => (
            <div
              key={price.id}
              className={clsx(
                'flex gap-1 items-center whitespace-nowrap text-sm select-none rounded-lg py-2 px-3 cursor-pointer transition-colors',
                {
                  ['text-gray-50 dark:text-gray-100 bg-gray-500 dark:bg-gray-700']:
                    selectedPrice === price.id,
                  ['text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-800']:
                    selectedPrice !== price.id,
                },
              )}
              onClick={() => setSelectedPrice(price.id)}
            >
              <input
                id={`price_${price.id}`}
                type="radio"
                name="plan"
                value={price.id}
                className="hidden"
              />
              <label htmlFor={`price_${price.id}`} className="cursor-pointer">
                {`${price.amount / 100}${price.currency.symbol}`}
              </label>
            </div>
          ))}
        </div>
      )}
      <Button disabled={!selectedPrice || productLoading || createLoading}>
        Buy
      </Button>
    </form>
  );
};

export default PurchaseBlock;
