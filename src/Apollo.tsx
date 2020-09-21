import * as React from 'react'
import { ApolloProvider } from '@apollo/client'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { AWS_APPSYNC_GRAPHQL_ENDPOINT, AWS_APPSYNC_API_KEY } from './utils/env';

const httpLink = createHttpLink({
  uri: AWS_APPSYNC_GRAPHQL_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  if (token) {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  }
  return {
    headers: {
      ...headers,
      'x-api-key': AWS_APPSYNC_API_KEY
    }
  }

});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export const WithApolloProvider = (Component: React.FC) => (
  () => (
    <ApolloProvider client={client}>
      <Component />
    </ApolloProvider>
  )
)
