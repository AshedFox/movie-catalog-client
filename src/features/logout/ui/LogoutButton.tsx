'use client';

import React, { useState } from 'react';
import { useApolloClient } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { Button } from '@shared/ui/Button';
import { LogOut } from 'lucide-react';
import { useSession } from '@features/auth/session';
import { logout } from '@features/auth';

const LogoutButton = () => {
  const session = useSession();
  const router = useRouter();
  const { cache } = useApolloClient();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    const { errors } = await logout();

    if (!errors) {
      await cache.reset();
      await session.update();
      router.push('/login');
    }
    setLoading(false);
  };

  return (
    <Button
      className="w-full flex items-center gap-1"
      variant="destructive"
      size="sm"
      isLoading={loading}
      onClick={handleLogout}
    >
      {!loading && <LogOut className="w-4 h-4" />}
      Logout
    </Button>
  );
};

export default LogoutButton;
