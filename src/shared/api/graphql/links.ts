import { RetryLink } from '@apollo/client/link/retry';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { decodeJwt } from 'jose';
import { createUploadLink } from 'apollo-upload-client';
import { ApolloLink } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';

export const httpLink = createUploadLink({
  uri: 'http://[::1]:3000/graphql',
  credentials: 'include',
  headers: {
    'Apollo-Require-Preflight': 'true',
  },
  fetchOptions: { cache: 'no-store' },
}) as unknown as ApolloLink;

export const wsLink = new GraphQLWsLink(
  createClient({
    url: 'ws://[::1]:3000/graphql',
  }),
);

export const splitLink = ApolloLink.split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

export const retryLink = new RetryLink({
  delay: { initial: 100, max: 500, jitter: true },
  attempts: {
    max: 3,
    retryIf: (error) => Boolean(error),
  },
});

export const errorLink = onError(({ graphQLErrors, networkError }) => {
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

export const authLink = withToken;
