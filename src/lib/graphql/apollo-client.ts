import {
  ApolloClient,
  from,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { useMemo } from 'react';
import { RetryLink } from '@apollo/client/link/retry';
import { promiseToObservable } from '../helpers/promise-to-observable.helper';
import { relayStylePagination } from '@apollo/client/utilities';

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

const retryLink = new RetryLink({
  delay: { initial: 100, max: 500, jitter: true },
  attempts: {
    max: 3,
    retryIf: (error) => Boolean(error),
  },
});

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path, extensions }) => {
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        );

        if (
          extensions.code === 'UNAUTHENTICATED' &&
          operation.operationName !== 'Refresh'
        ) {
          return promiseToObservable(
            fetch('http://[::1]:3000/graphql', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              credentials: 'include',
              body: JSON.stringify({
                operationName: 'Refresh',
                query: `
                  mutation Refresh {
                    refresh {
                      accessToken
                      refreshToken
                    }
                  }
                `,
                variables: {},
              }),
            }),
          ).flatMap(() => forward(operation));
        }
      });
    }
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  },
);

const httpLink = new HttpLink({
  uri: 'http://[::1]:3000/graphql',
  credentials: 'include',
  fetch,
});

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    connectToDevTools: typeof window !== 'undefined',
    link: from([errorLink, retryLink, httpLink]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            getMoviesReviews: relayStylePagination(['filter', 'sort']),
          },
        },
      },
    }),
  });
}

export function initializeApollo() {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (typeof window === 'undefined') {
    return _apolloClient;
  }
  if (!apolloClient) {
    apolloClient = _apolloClient;
  }

  return _apolloClient;
}

export function useApollo() {
  return useMemo(() => initializeApollo(), []);
}
