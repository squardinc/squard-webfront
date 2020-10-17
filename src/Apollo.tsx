import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  createHttpLink,
  GraphQLRequest,
  InMemoryCache
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import fetch from 'cross-fetch'
import * as React from 'react'
import { isTokenRequired } from './graphql/tokenRequiredOperations'
import { AuthService } from './services/AuthService'
import { AWS_APPSYNC_API_KEY, AWS_APPSYNC_GRAPHQL_ENDPOINT } from './utils/env'

const httpLink = createHttpLink({
  uri: AWS_APPSYNC_GRAPHQL_ENDPOINT,
  fetch,
})

type OperationType = 'query' | 'mutation'
const useToken = (operation: GraphQLRequest): boolean => {
  const operationDefinition = operation.query.definitions[0]
  const operationType: OperationType = operationDefinition.operation
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
