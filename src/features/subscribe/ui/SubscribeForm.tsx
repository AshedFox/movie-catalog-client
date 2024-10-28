'use client';

import React from 'react';
import { PlanFragment, SubscribeDocument } from '@shared/api/graphql';
import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@shared/ui/Form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@shared/ui/Select';
import { Button } from '@shared/ui/Button';
import { useToast } from '@shared/hooks/use-toast';

type Props = {
  plans: PlanFragment[];
};

const SubscribeForm = ({ plans }: Props) => {
  const [subscribe, { loading }] = useMutation(SubscribeDocument);
  const form = useForm<{ price: string }>();
  const { toast } = useToast();

  const onSubmit = async (input: { price: string }) => {
    const { data, errors } = await subscribe({
      variables: {
        priceId: input.price,
      },
    });

    if (data && !errors) {
      window.open(data.subscribe, 'PaymentWindow', 'popup')?.addEventListener('close', (e) => {});
    } else {
      toast({
        title: 'Error',
        description: 'Failed to subscribe!',
      });
    }
  };

  return (
    <Form {...form}>
      <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          render={({ field }) => (
            <FormItem>
              <FormLabel>Plan</FormLabel>
              <Select {...field} onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select subscription plan.." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {plans.map((plan) =>
                    plan.prices.map((price) => (
                      <SelectItem key={price.id} value={price.id}>
                        {Intl.NumberFormat('en-EN', {
                          currency: price.currency.id,
                          style: 'currency',
                        }).format(price.amount / 100)}{' '}
                        / {price.interval}
                      </SelectItem>
                    )),
                  )}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
          name={'price'}
        />
        <Button isLoading={loading} disabled={!form.getValues('price')}>
          Subscribe
        </Button>
      </form>
    </Form>
  );
};

export default SubscribeForm;
