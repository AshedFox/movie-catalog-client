import {
  ApolloClient,
  from,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { useMemo } from 'react';
import { RetryLink } from '@apollo/client/link/retry';
import { relayStylePagination } from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';
import { createUploadLink } from 'apollo-upload-client';
import { decodeJwt } from 'jose';

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

const retryLink = new RetryLink({
  delay: { initial: 100, max: 500, jitter: true },
  attempts: {
    max: 3,
    retryIf: (error) => Boolean(error),
  },
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      );
    });
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const resetToken = onError(({ graphQLErrors }) => {
  /* if (graphQLErrors) {
    for (const err of graphQLErrors) {
      switch (err.extensions.code) {
        // Apollo Server sets code to UNAUTHENTICATED
        // when an AuthenticationError is thrown in a resolver
        case 'UNAUTHENTICATED':
          localStorage.removeItem('access-token');
      }
    }
  }*/
});

let refreshPromise: Promise<string | null> | null = null;

const withToken = setContext((_, { headers }) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('access-token');

    if (token) {
      const { exp } = decodeJwt(token);

      const isExpiringSoon = !!exp && exp * 1000 - Date.now() <= 1000 * 60 * 2;

      if (isExpiringSoon) {
        if (!refreshPromise) {
          refreshPromise = fetch('http://[::1]:3000/graphql', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
              operationName: 'Refresh',
              query: /* GraphQL */ `
                mutation Refresh {
                  refresh {
                    accessToken
                    refreshToken
                  }
                }
              `,
              variables: {},
            }),
          })
            .then((res) => res.json())
            .catch(() => {
              localStorage.removeItem('access-token');
            })
            .then((data) => {
              let token: string | null = null;

              if (data?.data?.refresh) {
                token = data.data.refresh.accessToken;
                localStorage.setItem(
                  'access-token',
                  data.data.refresh.accessToken,
                );
              } else {
                localStorage.removeItem('access-token');
              }

              return token;
            });
        }

        return refreshPromise.then((token) => {
          refreshPromise = null;

          return {
            headers: {
              ...headers,
              authorization: token ? `Bearer ${token}` : '',
            },
          };
        });
      }
    }

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  }
  return {
    headers,
  };
});

const authLink = withToken.concat(resetToken);

const abortController = new AbortController();

const uploadLink = createUploadLink({
  uri: 'http://[::1]:3000/graphql',
  credentials: 'include',
  useGETForQueries: true,
  headers: {
    'Apollo-Require-Preflight': 'true',
  },
  fetchOptions: {
    signal: abortController.signal,
  },
  fetch,
});

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    connectToDevTools: typeof window !== 'undefined',
    link: from([authLink, errorLink, retryLink, uploadLink]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            getMoviesReviews: relayStylePagination(['filter', 'sort']),
            getMoviesRelay: relayStylePagination(['filter', 'sort']),
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
