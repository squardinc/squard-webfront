import * as React from 'react'
import { ApolloProvider } from '@apollo/client'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import aws_exports from 'src/aws-exports'

const httpLink = createHttpLink({
  uri: aws_exports.aws_appsync_graphqlEndpoint,
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
      'x-api-key': aws_exports.aws_appsync_apiKey
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
