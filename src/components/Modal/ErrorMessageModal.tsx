import { GraphQLError } from 'graphql'
import * as React from 'react'
import { LoadingContext } from 'src/context/LoadingContextProvider'
import { ErrorType } from 'src/types/ErrorType'
import { AgreementsComponent } from './AgreementsModal'
import { asModal, ModalProps } from './asModal'
import { MessageModal } from './MessageModal'

const NEW_LINE = '%0D%0A'
const ERROR_HEADER = `${NEW_LINE}${NEW_LINE}----------- 以下は問題調査のため自動的に付加された情報です ----------${NEW_LINE}${NEW_LINE}`

export const errorMessage = (errorType?: ErrorType, mailBody?: string) => {
  if (errorType === 'NOT_JOINED') return 'チームに参加していません。'
  if (errorType === 'ALREADY_JOINED') return '既に参加しています。'
  if (errorType === 'ALREADY_LEFT') return 'チームに参加していないか、既に脱退しています。'
  return (
    <div>
      サーバーとの通信に失敗しました。再度お試し頂くか、
      <a
        className="underline"
        href={`mailto:contact@squard.co.jp?body=${ERROR_HEADER + mailBody || ''}`}
        target="_blank"
      >
        運営者へお問い合わせ
      </a>
      下さい。
      <br />
      <div className="text-xs">
        ※お問い合わせの際、問題調査のための情報が予め本文に記載されている場合がございます。記載された情報を送信したくない場合はお手数ですが本文から削除の上ご送信ください。
      </div>
    </div>
  )
}

type ErrorMessageComponentProps = ModalProps & {
  message?: string | JSX.Element
  errorInfo?: GraphQLError
  buttonText?: string
  errorData?: string
}
export const ErrorMessageComponent: React.FC<ErrorMessageComponentProps> = ({
  closeModal,
  message,
  errorInfo,
  buttonText = 'Close',
  closable,
  errorData,
}) => {
  const { setLoading } = React.useContext(LoadingContext)
  const errorType: ErrorType | undefined = errorInfo?.errorType
  React.useEffect(() => {
    setLoading(false)
  }, [])
  if (errorType === 'AGREEMENT_TO_TERMS_OF_USE_REQUIRED') {
    return (
      <AgreementsComponent
        currentVersion={errorInfo?.errorInfo?.latest}
        closeModal={closeModal}
        closable={closable}
      />
    )
  }
  return (
    <MessageModal
      closeModal={closeModal}
      message={message ? message : errorMessage(errorType, errorData)}
      buttonText={buttonText}
      closable={closable}
    />
  )
}

export const ErrorMessageModal = asModal(ErrorMessageComponent, false)
