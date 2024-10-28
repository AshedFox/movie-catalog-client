import { ApolloClient, from, InMemoryCache } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';
import { authLink, errorLink, httpLink, retryLink } from './links';

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: from([authLink, errorLink, retryLink, httpLink]),
  });
});
