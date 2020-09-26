import * as React from 'react'
import { ModalProps } from './asModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export const DefaultModalContainer: React.FC<ModalProps> = ({
  children,
  closeModal,
}) => {
  function closeModalHandler(e: any) {
    e.stopPropagation()
    let element = document.getElementsByClassName('modal-transition')[1]
    if (!element) {
      element = document.getElementsByClassName('modal-transition')[0]
    }
    if (element) {
      element.classList.remove('open')
      element.classList.add('close')
    }
    setTimeout(() => {
      closeModal()
    }, 500)
  }
  return (
    <div className="bg-v-gradient text-white p-6 rounded-xl w-full bg-opacity-25">
      <div className="flex justify-end w-full">
        <FontAwesomeIcon
          icon={faTimes}
          className="text-white cursor-pointer"
          onClick={closeModalHandler}
        />
      </div>
      {children}
    </div>
  )
}
