import * as React from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Const from '../../styles/const'
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
    <div
      className="flex items-center h-10 w-full my-2 px-4 rounded-full text-sm"
      style={{
        zIndex: 0,
        position: 'relative',
        overflow: 'hidden',
        height: '45px',
      }}
    >
      <div
        style={{
          zIndex: -1,
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#E6CA9B',
        }}
      />
      {faIcon ? (
        <div className="flex justify-center items-center">
          <FontAwesomeIcon
            icon={faIcon}
            color={'white'}
            style={{
              width: '20px',
              height: '20px',
              background: '#707070',
              padding: '5px',
              borderRadius: '50vh',
            }}
          />
        </div>
      ) : (
        ''
      )}
      <input
        className="ml-2 bg-gray-200 h-full w-full text-gray-600 focus:outline-none"
        style={{
          fontSize: Const.fontSize.sm,
          fontFamily: Const.fontFamily.sans,
          fontWeight: Const.fontWeight.light,
          color: 'black',
          background: 'transparent',
        }}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
      />
    </div>
  )
}
