import { ApolloLink, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { getServerSession, getSession } from '@features/auth/session';
import { Session } from '@features/auth/types';
import { createClient } from 'graphql-ws';

export const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_HTTP_SERVER_URL ?? 'http://[::1]:3000/graphql',
  credentials: 'include',
  headers: {
    'Apollo-Require-Preflight': 'true',
  },
});

export const wsLink = new GraphQLWsLink(
  createClient({
    url: process.env.NEXT_PUBLIC_GRAPHQL_WS_SERVER_URL ?? 'http://[::1]:3000/graphql',
  }),
);

export const splitLink = ApolloLink.split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
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
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
    });
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const withToken = setContext(async (_, { headers }) => {
  let session: Session | null;
  if (typeof window === 'undefined') {
    session = await getServerSession();
  } else {
    session = await getSession();
  }

  return {
    headers: {
      ...(session?.jwt?.accessToken && {
        Authorization: `Bearer ${session.jwt.accessToken}`,
      }),
      ...headers,
    },
  };
});

export const authLink = withToken;
