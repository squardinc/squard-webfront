import * as React from 'react'
import { LoadingContext } from 'src/context/LoadingContextProvider'
import { ErrorType } from 'src/types/ErrorType'
import { AgreementsModal } from './AgreementsModal'
import { asModal, ModalProps } from './asModal'
import { MessageModal } from './MessageModal'

export const errorMessage = (errorType?: ErrorType) => {
  if (errorType === 'NOT_JOINED') return 'チームに参加していません。'
  if (errorType === 'ALREADY_JOINED') return '既に参加しています。'
  if (errorType === 'ALREADY_LEFT') return 'チームに参加していないか、既に脱退しています。'
  return (
    <div>
      サーバーとの通信に失敗しました。再度お試し頂くか、
      <a href="mailto:contact@squard.co.jp">運営者</a>へお問い合わせ下さい。
    </div>
  )
}

type ErrorMessageComponentProps = ModalProps & {
  message?: string | JSX.Element
  errorType?: ErrorType
  buttonText?: string
}
const ErrorMessageComponent: React.FC<ErrorMessageComponentProps> = ({
  closeModal,
  message,
  errorType,
  buttonText = 'Close',
  closable,
}) => {
  const { setLoading } = React.useContext(LoadingContext)
  React.useEffect(() => {
    setLoading(false)
  }, [])
  if (errorType === 'AREEMENT_TO_TERMS_OF_USE_REQUIRED')
    return <AgreementsModal closeModal={() => closeModal} closable={closable} />
  return (
    <MessageModal
      closeModal={closeModal}
      message={message ? message : errorMessage(errorType)}
      buttonText={buttonText}
      closable={closable}
    />
  )
}

export const ErrorMessageModal = asModal(ErrorMessageComponent, false)
