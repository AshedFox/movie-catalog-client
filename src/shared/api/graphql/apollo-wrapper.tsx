'use client';

import { ApolloClient, ApolloLink, SuspenseCache } from '@apollo/client';
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { PropsWithChildren } from 'react';
import { authLink, errorLink, retryLink, splitLink } from './links';
import { relayStylePagination } from '@apollo/client/utilities';

const makeClient = () => {
  const links = [authLink, errorLink, retryLink, splitLink];

  return new ApolloClient({
    cache: new NextSSRInMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            getMoviesReviewsRelay: relayStylePagination(['filter', 'sort']),
            getMoviesRelay: relayStylePagination(['filter', 'sort']),
            getCollectionsReviewsRelay: relayStylePagination([
              'filter',
              'sort',
            ]),
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

const makeSuspenseCache = () => new SuspenseCache();

export const ApolloWrapper = ({ children }: PropsWithChildren) => (
  <ApolloNextAppProvider
    makeClient={makeClient}
    makeSuspenseCache={makeSuspenseCache}
  >
    {children}
  </ApolloNextAppProvider>
);
