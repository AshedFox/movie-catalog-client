'use client';

import React, { SyntheticEvent, useState } from 'react';
import { Button } from '@shared/ui';
import { PlanFragment, SubscribeDocument } from '@shared/api/graphql';
import clsx from 'clsx';
import { useMutation } from '@apollo/client';

type Props = {
  plan: PlanFragment;
};

const SubscriptionForm = ({ plan }: Props) => {
  const [selectedPrice, setSelectedPrice] = useState<string>();
  const [subscribe, { loading, error }] = useMutation(SubscribeDocument);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (selectedPrice) {
      const { data } = await subscribe({
        variables: {
          priceId: selectedPrice,
        },
      });

      if (data) {
        window.location.href = data.subscribe;
      }
    }
  };

  return (
    <form
      className="rounded-lg p-4 flex flex-col flex-auto gap-2 border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold leading-tight">{plan.name}</h2>
      <div className="px-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
        {"You'll get access to watching movies and series!"}
      </div>
      <div className="flex gap-2 px-4 overflow-auto">
        {plan.prices.map((price) => (
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
            <label htmlFor={`price_${price.id}`} className="cursor-pointer">{`${
              price.amount / 100
            }${
              price.currency.symbol
            } / ${price.interval!.toLocaleLowerCase()}`}</label>
          </div>
        ))}
      </div>
      <span className="text-xs text-red-500">{error?.message}</span>
      <Button disabled={!selectedPrice || loading}>Subscribe</Button>
    </form>
  );
};

export default SubscriptionForm;
