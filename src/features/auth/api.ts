import {
  LoginInput,
  LoginMutation,
  RefreshMutation,
  SignUpInput,
  SignUpMutation,
} from '@shared/api/graphql';
import { GraphQLError } from 'graphql';

export const login = async (
  input: LoginInput,
): Promise<{
  data?: LoginMutation['login'];
  errors?: readonly GraphQLError[];
}> => {
  const res = await fetch(`${process.env.AUTH_URL ?? 'http://localhost:3001'}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });
  const data = await res.json();

  if (res.ok) {
    return { data };
  }

  return { errors: data };
};

export const signUp = async (
  input: SignUpInput,
): Promise<{
  data?: SignUpMutation['signUp'];
  errors?: readonly GraphQLError[];
}> => {
  const res = await fetch(`${process.env.AUTH_URL ?? 'http://localhost:3001'}/api/auth/sign-up`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });
  const data = await res.json();

  if (res.ok) {
    return { data };
  }

  return { errors: data };
};

export const refresh = async (): Promise<{
  data?: RefreshMutation['refresh'];
  errors?: readonly GraphQLError[];
}> => {
  const res = await fetch(`${process.env.AUTH_URL ?? 'http://localhost:3001'}/api/auth/refresh`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await res.json();

  if (res.ok) {
    return { data };
  }

  return { errors: data };
};

export const logout = async (): Promise<{
  errors?: readonly GraphQLError[];
}> => {
  const res = await fetch(`${process.env.AUTH_URL ?? 'http://localhost:3001'}/api/auth/logout`, {
    method: 'POST',
    credentials: 'include',
  });
  const data = await res.json();

  if (res.ok) {
    return {};
  }

  return { errors: data };
};
