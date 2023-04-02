'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Field } from '@components/ui';
import { CreateUserInput } from '@lib/graphql/__generated__/graphql';
import { graphql } from '@lib/graphql/__generated__';
import { useMutation } from '@apollo/client';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@constants/routes';
import * as Crypto from 'crypto';
import Link from 'next/link';

const SignUpDocument = graphql(/* GraphQL */ `
  mutation SignUp($input: CreateUserInput!) {
    register(input: $input) {
      accessToken
      refreshToken
    }
  }
`);

const signUpSchema: z.ZodSchema<CreateUserInput> = z.object({
  email: z.string().email(),
  password: z
    .string()
    .regex(
      /^[a-zA-Z0-9!@#$%^&*(){}\[\]:;<>,.?~_+\-=|]{8,32}$/i,
      'Password must contain only latin letters, arabic numbers and special symbols!',
    ),
  name: z
    .string()
    .regex(
      /^\w{2,255}$/i,
      'Name must contain from 2 to 255 alphanumeric characters',
    ),
});

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserInput>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  });
  const [signUp, { loading, error }] = useMutation(SignUpDocument);
  const router = useRouter();

  const onSubmit = async (input: CreateUserInput) => {
    try {
      const { errors, data } = await signUp({
        variables: {
          input: {
            ...input,
            password: Crypto.createHash('sha512')
              .update(input.password)
              .digest('hex'),
          },
        },
      });

      if (!errors && data) {
        router.push(ROUTES.home);
      }
    } catch {
      //
    }
  };

  return (
    <form
      className="flex flex-col p-5 rounded gap-3 w-full md:w-4/5 lg:w-3/5 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-2xl font-bold">Sign Up</h1>
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
