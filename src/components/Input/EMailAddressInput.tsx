import * as React from 'react'
import { RoundInput } from './Input'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { emaliAvaliableChars } from 'src/utils/StringValidator'

interface EMailAddressInput {
  value: string
  onChange: (value: string) => void
}
export const EMailAddressInput: React.FC<EMailAddressInput> = ({
  value,
  onChange,
}) => {
  return (
    <RoundInput
      onChange={value => { if (emaliAvaliableChars(value)) onChange(value) }}
      value={value}
      faIcon={faEnvelope}
      type='email'
      placeholder='メールアドレス'
      autoComplete='email'
    />
  )
}
