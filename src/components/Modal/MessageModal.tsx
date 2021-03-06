import * as React from 'react'
import { RoundButton } from 'src/components/Button/DefaultButton'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { asModal, ModalProps } from './asModal'
import { DefaultModalContainer } from './ModalContainer'

type MessageComponentProps = ModalProps & {
  title?: string
  message: string | JSX.Element
  buttonText?: string
}
export const MessageComponent: React.FC<MessageComponentProps> = ({
  closeModal,
  title = '',
  message,
  buttonText = 'Close',
  closable,
}) => (
    <DefaultModalContainer closeModal={closeModal} closable={closable}>
      <TextDisplay className="text-4xl font-semibold">{title}</TextDisplay>
      <div className="flex flex-col justify-center items-center">
        <TextDisplay className="mb-8">{message}</TextDisplay>
        <RoundButton className="border-2 text-lg" text={buttonText} onClick={closeModal} />
      </div>
    </DefaultModalContainer>
  )

export const MessageModal = asModal(MessageComponent)
