import * as React from 'react'
import { LoadingContext } from 'src/context/LoadingContextProvider'
import { ErrorType } from 'src/types/ErrorType'
import { errorMessage } from 'src/utils/errorMessage'
import { asModal, ModalProps } from './asModal'
import { MessageModal } from './MessageModal'

type ErrorMessageComponentProps = ModalProps & {
  errorType?: ErrorType
  buttonText?: string
}
export const ErrorMessageCompoenent: React.FC<ErrorMessageComponentProps> = ({
  closeModal,
  errorType,
  buttonText = 'Close',
}) => {
  const { setLoading } = React.useContext(LoadingContext)
  React.useEffect(() => {
    setLoading(false)
  }, [])
  return (
    <MessageModal
      closeModal={closeModal}
      message={errorMessage(errorType)}
      buttonText={buttonText}
    />
  )
}

export const ErrorMessageModal = asModal(ErrorMessageCompoenent)
