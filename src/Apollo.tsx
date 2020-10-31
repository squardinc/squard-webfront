import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  createHttpLink,
  GraphQLRequest,
  InMemoryCache
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import fetch from 'cross-fetch'
import { navigate } from 'gatsby'
import * as React from 'react'
import { createNetworkStatusNotifier } from 'react-apollo-network-status'
import { isTokenRequired } from './graphql/tokenRequiredOperations'
import { AuthService } from './services/AuthService'
import { AWS_APPSYNC_API_KEY, AWS_APPSYNC_GRAPHQL_ENDPOINT } from './utils/env'
import { setItem } from './utils/LocalStorage'

const httpLink = createHttpLink({
  uri: AWS_APPSYNC_GRAPHQL_ENDPOINT,
  fetch,
})

const { link, useApolloNetworkStatus } = createNetworkStatusNotifier()
const errorLink = onError(({ operation }) => {
  const { response } = operation.getContext()
  if (response.status === 401) {
    setItem('previous_path', window.location.pathname)
    navigate('/logout')
  }
})

type OperationType = 'query' | 'mutation'
const useToken = (operation: GraphQLRequest): boolean => {
  const operationType: OperationType = operation.query.definitions[0].operation
  if (operationType === 'mutation') return true
  if (isTokenRequired(operation.operationName)) return true
  return false
}
const authLink = setContext(async (operation, { headers }) => {
  const token = await AuthService.idToken().catch(() => '')
  if (useToken(operation) && token) {
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
  link: link.concat(ApolloLink.from([authLink, errorLink, httpLink])),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
})

export const WithApolloProvider = (Component: React.FC) => () => (
  <ApolloProvider client={client}>
    <Component />
  </ApolloProvider>
)

export { useApolloNetworkStatus }
