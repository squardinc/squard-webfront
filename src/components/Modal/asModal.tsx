import * as React from 'react'
import Modal from 'react-modal'
import { withFadeOut } from 'src/utils/Modal'
import styles from './modal.module.scss'

Modal.setAppElement('body')
export const MODAL_Z_INDEX = 50

export interface ModalProps {
  closeModal: (e: React.MouseEvent<Element, MouseEvent>) => void
  backgroundColor?: string
}
export const asModal = <T extends ModalProps>(Component: React.FC<T>) => {
  return (props: T) => {
    const closeModal = withFadeOut(props.closeModal)
    return (
      <Modal
        isOpen
        onRequestClose={closeModal}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
        portalClassName="relative"
        overlayClassName="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-50 blur-3"
        className={`${styles.content} outline-none modal-transition close`}
      >
        <div className="max-w-xs w-full flex justify-center">
          <Component {...props} closeModal={closeModal} />
        </div>
      </Modal>
    )
  }
}
