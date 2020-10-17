import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import fetch from 'cross-fetch'
import * as React from 'react'
import { AuthService } from './services/AuthService'
import { AWS_APPSYNC_API_KEY, AWS_APPSYNC_GRAPHQL_ENDPOINT } from './utils/env'

const httpLink = createHttpLink({
  uri: AWS_APPSYNC_GRAPHQL_ENDPOINT,
  fetch,
})

type OperationType = 'query' | 'mutation'
const authLink = setContext(async (operation, { headers }) => {
  const operationType: OperationType =
    operation.query.definitions[0].operation || 'query'
  const token = await AuthService.idToken().catch(() => '')
  if (operationType === 'mutation' && token) {
    return {
      headers: {
        ...headers,
        authorization: token,
      },
    }
  }
  return {
    headers: {
      ...headers,
      'x-api-key': AWS_APPSYNC_API_KEY,
    },
  }
})
const client = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    query: {
      fetchPolicy: 'no-cache',
    },
  },
})

export const WithApolloProvider = (Component: React.FC) => () => (
  <ApolloProvider client={client}>
    <Component />
  </ApolloProvider>
)
