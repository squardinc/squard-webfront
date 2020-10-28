const TOKEN_REQUIRED_QUERIES = ['GetMyself', 'GetAgreements']

export const isTokenRequired = (operationName?: string) => {
  if (!operationName) return false
  return TOKEN_REQUIRED_QUERIES.includes(operationName)
}
