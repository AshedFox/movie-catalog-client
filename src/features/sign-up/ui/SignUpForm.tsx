'use client';

import React, { startTransition } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Field } from 'shared/ui';
import { useApolloClient, useMutation } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';
import * as Crypto from 'crypto';
import Link from 'next/link';
import { signUpSchema } from '../model/sign-up-schema';
import { useUser } from '@entities/user';
import { ROUTES } from '@shared/constants/routes';
import { RegisterInput, SignUpDocument } from '@shared/api/graphql';
import { useRouter } from 'next/navigation';

type Props = {
  redirect?: 'back' | string;
};

const SignUpForm = ({ redirect }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
      passwordRepeat: '',
      name: '',
    },
  });
  const [signUp, { loading, error }] = useMutation(SignUpDocument);
  const { setUser } = useUser();
  const router = useRouter();
  const { cache } = useApolloClient();

  const onSubmit = async (input: RegisterInput) => {
    const { errors, data } = await signUp({
      variables: {
        input: {
          ...input,
          password: Crypto.createHash('sha512')
            .update(input.password)
            .digest('hex'),
          passwordRepeat: Crypto.createHash('sha512')
            .update(input.passwordRepeat)
            .digest('hex'),
        },
      },
      errorPolicy: 'ignore',
    });

    if (!errors && data) {
      await cache.reset();
      startTransition(() => {
        if (redirect) {
          if (redirect === 'back') {
            router.back();
          } else {
            router.push(redirect);
          }
        }
        router.refresh();

        localStorage.setItem('access-token', data.register.accessToken);
        setUser(data.register.user);
      });
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
        <Field
          type="password"
          label="Password(repeat)"
          {...register('passwordRepeat', {
            validate: (v, formValues) => {
              return v === formValues.password;
            },
          })}
          error={errors.password?.message}
        />
        <Field
          type="text"
          label="Name"
          {...register('name')}
          error={errors.name?.message}
        />
      </fieldset>
      <span className="text-xs text-red-500">{error?.message}</span>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <Button type="submit" stretch disabled={loading}>
          Sign Up
        </Button>
        <Link
          className="text-xs text-gray-500 border-b-2 border-gray-500 self-start lg:self-center"
          href={ROUTES.login}
        >
          Already have account?
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
