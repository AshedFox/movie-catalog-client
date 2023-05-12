'use client';

import React, { PropsWithChildren } from 'react';
import { ApolloProvider } from '@apollo/client';
import GridVariantProvider from './GridVariantProvider';
import { useApollo } from '@shared/api/graphql';
import { UserProvider } from '@entities/user';

const Providers = ({ children }: PropsWithChildren) => {
  const client = useApollo();

  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <GridVariantProvider>{children}</GridVariantProvider>
      </UserProvider>
    </ApolloProvider>
  );
};

export default Providers;
