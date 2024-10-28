import React, { PropsWithChildren } from 'react';
import ThemeProvider from './ThemeProvider';
import { SessionProvider, getServerSession } from '@features/auth/session';

const Providers = async ({ children }: PropsWithChildren) => {
  const session = await getServerSession();

  return (
    <SessionProvider session={session}>
      <ThemeProvider>{children}</ThemeProvider>
    </SessionProvider>
  );
};

export default Providers;
