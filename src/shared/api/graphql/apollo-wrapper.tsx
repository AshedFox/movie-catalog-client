'use client';

import { ApolloLink } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { PropsWithChildren } from 'react';
import { authLink, errorLink, retryLink, splitLink } from './links';

export const makeClient = () => {
  const links = [authLink, errorLink, retryLink, splitLink];

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            getMoviesReviewsRelay: relayStylePagination(['filter', 'sort']),
            getMoviesRelay: relayStylePagination(['filter', 'sort']),
            getCollectionsReviewsRelay: relayStylePagination(['filter', 'sort']),
          },
        },
      },
    }),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            ...links,
          ])
        : ApolloLink.from(links),
  });
};

export const ApolloWrapper = ({ children }: PropsWithChildren) => (
  <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
);
