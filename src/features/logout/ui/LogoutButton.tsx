'use client';

import React, { startTransition } from 'react';
import { Button } from '@shared/ui';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useUser } from '@entities/user';
import { LogoutDocument } from '@shared/api/graphql';

const LogoutButton = () => {
  const { setUser } = useUser();
  const [logout, { loading: loadingLogout }] = useMutation(LogoutDocument);
  const router = useRouter();

  return (
    <Button
      variant="secondary"
      size="sm"
      disabled={loadingLogout}
      onClick={async () => {
        const { data, errors } = await logout();

        if (data && !errors) {
          startTransition(() => {
            setUser(null);
            localStorage.removeItem('access-token');
            router.push('/');
          });
        }
      }}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
