import { getServerSession } from '@features/auth/session';
import { RoleEnum } from '@shared/api/graphql';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<
  | { shouldBeAuthorized?: false; shouldBeOfRole?: never; redirectPath?: string }
  | {
      shouldBeAuthorized: true;
      shouldBeOfRole?: RoleEnum[];
      redirectPath?: string;
    }
>;

const AuthChecker = async ({
  redirectPath = '/',
  shouldBeAuthorized = true,
  shouldBeOfRole,
  children,
}: Props) => {
  const session = await getServerSession();

  if (shouldBeAuthorized && !session) {
    redirect(redirectPath);
  }

  if (!shouldBeAuthorized && session) {
    redirect(redirectPath);
  }

  if (
    shouldBeAuthorized &&
    session &&
    shouldBeOfRole &&
    !shouldBeOfRole.includes(session.user.role)
  ) {
    redirect(redirectPath);
  }

  return children;
};

export default AuthChecker;
