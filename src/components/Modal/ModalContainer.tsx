import * as React from 'react'
import { ModalProps } from './asModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export const DefaultModalContainer: React.FC<ModalProps> = ({
  children,
  closeModal,
}) => {
  return (
    <div className='bg-v-gradient text-white p-6 rounded-xl w-full bg-opacity-25'>
      <div className='flex justify-end w-full'>
        <FontAwesomeIcon icon={faTimes} className='text-white cursor-pointer' onClick={closeModal} />
      </div>
      {children}
    </div>
  )
}
