'use client';

import { ApolloError, useMutation, useSuspenseQuery } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreatePurchaseSessionDocument, GetProductDocument } from '@shared/api/graphql';
import { useToast } from '@shared/hooks/use-toast';
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@shared/ui';
import { useForm } from 'react-hook-form';
import { PurchaseInput, purchaseSchema } from '../model/schema';

type Props = {
  title: string;
  productId: string;
  movieId: string;
};

const PurchaseForm = ({ title, productId, movieId }: Props) => {
  const form = useForm<PurchaseInput>({
    resolver: zodResolver(purchaseSchema),
  });
  const { toast } = useToast();

  const { data: productData } = useSuspenseQuery(GetProductDocument, {
    variables: {
      id: productId,
    },
  });
  const [createPurchaseSession] = useMutation(CreatePurchaseSessionDocument);

  const onSubmit = async (input: PurchaseInput) => {
    try {
      const { data, errors } = await createPurchaseSession({
        variables: {
          priceId: productData.getProduct.prices[0].id,
          movieId,
        },
      });
      if (data && !errors) {
        window.open(data.createPurchaseSession, 'Purchase', 'toolbar=false,menubar=false');

        // toast({
        //   title: 'Success',
        //   description: 'Successfully updated profile information!',
        //   variant: 'success',
        // });
      }
    } catch (error) {
      if (error instanceof ApolloError) {
        toast({
          title: 'Error',
          description: error.message,
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Error',
          description: 'Failed to make purchase!',
          variant: 'destructive',
        });
      }
    }
  };

  return (
    <Form {...form}>
      <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
        <FormDescription>{title}</FormDescription>
        <FormField
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <Select
                disabled={!productData}
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select plan..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {productData.getProduct.prices.map((price) => (
                    <SelectItem key={price.id} value={price.id}>
                      {`${price.amount / 100}${price.currency.symbol}`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
          name="priceId"
        />
        <Button
          type="submit"
          isLoading={form.formState.isLoading}
          disabled={form.formState.isValid}
        >
          Buy
        </Button>
      </form>
    </Form>
  );
};

export default PurchaseForm;
