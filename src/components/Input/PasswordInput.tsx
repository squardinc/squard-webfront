import * as React from 'react'
import { RoundInput } from './Input'
import { faLock } from '@fortawesome/free-solid-svg-icons'

interface PasswordInput {
  value: string
  onChange: (value: string) => void
}
export const PasswordInput: React.FC<PasswordInput> = ({ value = '', onChange }) => {
  return (
    <RoundInput
      onChange={(value) => {
        if (value.length <= 16) {
          onChange(value)
        }
      }}
      value={value}
      faIcon={faLock}
      type="password"
      placeholder="パスワード"
      autoComplete="password"
    />
  )
}
