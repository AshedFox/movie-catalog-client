'use client';

import { useApolloClient } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpInput } from '@shared/api/graphql';
import { useToast } from '@shared/hooks/use-toast';
import { Button } from '@shared/ui/Button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@shared/ui/Form';
import { Input } from '@shared/ui/Input';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { signUpSchema } from '../model/sign-up-schema';
import { signUp } from '@features/auth/api';
import { useSession } from '@features/auth/session';

type Props = {
  redirectOnSuccess?: 'back' | string;
};

const SignUpForm = ({ redirectOnSuccess }: Props) => {
  const { toast } = useToast();
  const form = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
      passwordRepeat: '',
      name: '',
    },
  });
  const router = useRouter();
  const { cache } = useApolloClient();
  const session = useSession();

  const onSubmit = async (input: SignUpInput) => {
    try {
      const { data, errors } = await signUp(input);

      if (!errors && data) {
        await cache.reset();
        await session.update();

        if (redirectOnSuccess) {
          redirectOnSuccess === 'back' ? router.back() : router.push(redirectOnSuccess);
        }
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'There was an error signing up!',
        variant: 'destructive',
      });
    }
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-3 w-full"
        onSubmit={form.handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <FormField
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@example.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name="email"
        />
        <FormField
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="********" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name="password"
        />
        <FormField
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password (repeat)</FormLabel>
              <FormControl>
                <Input placeholder="********" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name="passwordRepeat"
        />
        <FormField
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John, Mary, etc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name="name"
        />
        <Button type="submit" isLoading={form.formState.isLoading}>
          Sign Up
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
