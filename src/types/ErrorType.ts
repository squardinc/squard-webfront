const ERROR_TYPES = ['BAD_REQUEST', 'ALREADY_JOINED', 'NOT_JOINED', 'ALREADY_LEFT'] as const
export type ErrorType = typeof ERROR_TYPES[number]
