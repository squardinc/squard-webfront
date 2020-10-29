const ERROR_TYPES = [
  'BAD_REQUEST',
  'ALREADY_JOINED',
  'NOT_JOINED',
  'ALREADY_LEFT',
  'AGREEMENT_TO_TERMS_OF_USE_REQUIRED',
] as const
export type ErrorType = typeof ERROR_TYPES[number]
