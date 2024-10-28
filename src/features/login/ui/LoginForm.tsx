'use client';

import { ApolloError, useApolloClient } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginInput } from '@shared/api/graphql';
import { useToast } from '@shared/hooks/use-toast';
import { Button } from '@shared/ui/Button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@shared/ui/Form';
import { Input } from '@shared/ui/Input';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { loginSchema } from '../model/login-schema';
import { login } from '@features/auth/api';
import { useSession } from '@features/auth/session';

type Props = {
  redirectOnSuccess?: 'back' | string;
};

const LoginForm = ({ redirectOnSuccess }: Props) => {
  const { toast } = useToast();
  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const router = useRouter();
  const { cache } = useApolloClient();
  const session = useSession();

  const onSubmit = async (input: LoginInput) => {
    try {
      const { data, errors } = await login(input);

      if (!errors && data) {
        await cache.reset();
        await session.update();

        if (redirectOnSuccess) {
          redirectOnSuccess === 'back' ? router.back() : router.push(redirectOnSuccess);
        }
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
          description: 'There is an error on login!',
          variant: 'destructive',
        });
      }
    }
  };

  return (
    <Form {...form}>
      <form className="flex flex-col gap-3 w-full" onSubmit={form.handleSubmit(onSubmit)}>
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
        <Button type="submit" isLoading={form.formState.isLoading}>
          Login
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
