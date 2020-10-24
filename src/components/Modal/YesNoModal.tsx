import * as React from 'react'
import { RoundButton } from 'src/components/Button/DefaultButton'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { asModal, ModalProps } from './asModal'
import { DefaultModalContainer } from './ModalContainer'

type MessageComponentProps = ModalProps & {
  title?: string
  message: string
  onExecute: VoidFunction
  cancelButtonText?: string
  executeButtonText?: string
}
export const MessageCompoenent: React.FC<MessageComponentProps> = ({
  onExecute,
  closeModal,
  title = '',
  message,
  cancelButtonText = 'Cancel',
  executeButtonText = 'Execute',
}) => (
  <DefaultModalContainer closeModal={closeModal}>
    <TextDisplay className="text-4xl font-semibold">{title}</TextDisplay>
    <div className="flex flex-col justify-center items-center">
      <TextDisplay className="mb-8">{message}</TextDisplay>
      <RoundButton className="border-2 text-lg" text={executeButtonText} onClick={onExecute} />
      <RoundButton className="border-2 text-lg" text={cancelButtonText} onClick={closeModal} />
    </div>
  </DefaultModalContainer>
)

export const YesNoModal = asModal(MessageCompoenent)
