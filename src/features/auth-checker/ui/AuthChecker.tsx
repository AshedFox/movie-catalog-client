'use client';

import React, { PropsWithChildren, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@entities/user';
import { RoleEnum } from '@shared/api/graphql';

type Props = PropsWithChildren<{
  shouldBeAuthorized?: boolean;
  shouldBeOfRole?: RoleEnum[];
  redirect?: string;
}>;

const AuthChecker = ({
  redirect = '/',
  shouldBeAuthorized = true,
  shouldBeOfRole,
  children,
}: Props) => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (
      (shouldBeAuthorized && !user) ||
      (!shouldBeAuthorized && user) ||
      (shouldBeAuthorized &&
        user &&
        shouldBeOfRole &&
        !shouldBeOfRole.includes(user.role))
    ) {
      router.push(redirect);
    }
  }, [redirect, router, shouldBeAuthorized, shouldBeOfRole, user]);

  if ((shouldBeAuthorized && !user) || (!shouldBeAuthorized && user)) {
    return <></>;
  }

  return <>{children}</>;
};

export default AuthChecker;
