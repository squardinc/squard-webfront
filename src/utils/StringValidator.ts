const EMAIL_ADDRESS_CHAR_REGEX = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~\-@]*$/
const EMAIL_ADDRESS_REGEX = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

export const emaliAvaliableChars = (str: string) =>
  EMAIL_ADDRESS_CHAR_REGEX.test(str)
export const validEmaliAddress = (str: string) => EMAIL_ADDRESS_REGEX.test(str)
