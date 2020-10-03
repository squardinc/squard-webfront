import * as React from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface InputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  faIcon?: IconDefinition
  type?: string
  autoComplete?: string
}
export const RoundInput: React.FC<InputProps> = ({
  value,
  onChange,
  type = 'text',
  placeholder,
  faIcon,
  autoComplete,
}) => {
  return (
    <div className="flex items-center border-2 border-gray-300 bg-gray-200 h-10 w-full my-2 px-4 rounded-full text-sm">
      {faIcon ? (
        <div className="flex justify-center items-center bg-gray-500 rounded-full h-6 w-6">
          <FontAwesomeIcon icon={faIcon} className="text-gray-200" />
        </div>
      ) : (
          ''
        )}
      <input
        className="ml-2 bg-gray-200 h-full w-full text-gray-600 focus:outline-none"
        style={{ fontSize: '16px' }}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
      />
    </div>
  )
}
