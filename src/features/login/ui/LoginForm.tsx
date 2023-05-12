'use client';

import React, { startTransition } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Field } from 'shared/ui';
import { useMutation } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';
import * as Crypto from 'crypto';
import Link from 'next/link';
import { ROUTES } from '@shared/constants/routes';
import { loginSchema } from '../model/login-schema';
import { useUser } from '@entities/user';
import { LoginDocument, LoginInput } from '@shared/api/graphql';
import { useRouter } from 'next/navigation';

type Props = {
  redirect?: 'back' | string;
};

const LoginForm = ({ redirect }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [login, { loading, error }] = useMutation(LoginDocument);
  const { setUser } = useUser();
  const router = useRouter();

  const onSubmit = async (input: LoginInput) => {
    try {
      const { errors, data } = await login({
        variables: {
          input: {
            email: input.email,
            password: Crypto.createHash('sha512')
              .update(input.password)
              .digest('hex'),
          },
        },
      });

      if (!errors && data) {
        startTransition(() => {
          localStorage.setItem('access-token', data.login.accessToken);
          setUser(data.login.user);
          if (redirect) {
            if (redirect === 'back') {
              router.back();
            } else {
              router.push(redirect);
            }
          }
        });
      }
    } catch {
      //
    }
  };

  return (
    <form
      className="flex flex-col p-5 rounded gap-3 w-[300px] md:w-[640px] lg:w-[720px] bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset className="flex flex-col gap-2" disabled={loading}>
        <Field
          type="email"
          label="Email"
          {...register('email')}
          error={errors.email?.message}
        />
        <Field
          type="password"
          label="Password"
          {...register('password')}
          error={errors.password?.message}
        />
      </fieldset>
      <span className="text-xs text-red-500">{error?.message}</span>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <Button type="submit" stretch disabled={loading}>
          Login
        </Button>
        <Link
          className="text-xs text-gray-500 border-b-2 border-gray-500 self-start lg:self-center"
          href={ROUTES.signUp}
        >
          {"Don't have account?"}
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
