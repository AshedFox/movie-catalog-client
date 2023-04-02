'use client';

import React, { PropsWithChildren } from 'react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@lib/graphql/apollo-client';

const Providers = ({ children }: PropsWithChildren) => {
  const client = useApollo();

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Providers;
