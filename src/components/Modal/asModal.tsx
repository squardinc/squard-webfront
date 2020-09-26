import * as React from 'react'
import Modal from 'react-modal'
import styles from './modal.module.scss'

Modal.setAppElement('body')

export interface ModalProps {
  closeModal: VoidFunction
}
export const asModal = <T extends ModalProps>(Component: React.FC<T>) => {
  return (props: T) => (
    <Modal
      isOpen
      onRequestClose={(e) => {
        e.stopPropagation()
        props.closeModal()
      }}
      shouldFocusAfterRender={false}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      portalClassName="relative"
      overlayClassName="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-50 blur-3"
      className={styles.content}
    >
      <div className="max-w-xs w-full flex justify-center">
        <Component {...props} />
      </div>
    </Modal>
  )
}
