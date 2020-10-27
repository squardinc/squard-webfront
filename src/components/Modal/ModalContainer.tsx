import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { fadeIn } from 'src/utils/Modal'
import { ModalProps } from './asModal'
export const DefaultModalContainer: React.FC<ModalProps> = ({
  children,
  closeModal,
  backgroundColor = 'bg-v-gradient bg-opacity-25',
}) => {
  React.useEffect(() => {
    fadeIn()
  }, [])
  return (
    <div className={`${backgroundColor} text-white p-6 rounded-xl w-full max-h-screen`}>
      <div className="flex justify-end w-full">
        <FontAwesomeIcon
          icon={faTimes}
          className="text-white cursor-pointer"
          onClick={closeModal}
        />
      </div>
      {children}
    </div>
  )
}
