'use client';

import React, { PropsWithChildren } from 'react';
import GridVariantProvider from './GridVariantProvider';
import { UserProvider } from '@entities/user';
import ThemeProvider from './ThemeProvider';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <UserProvider>
      <ThemeProvider>
        <GridVariantProvider>{children}</GridVariantProvider>
      </ThemeProvider>
    </UserProvider>
  );
};

export default Providers;
