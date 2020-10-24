import * as React from 'react'
import { RoundButton } from 'src/components/Button/DefaultButton'
import { asModal, ModalProps } from 'src/components/Modal/asModal'
import { DefaultModalContainer } from 'src/components/Modal/ModalContainer'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'

type LogoutComponentProps = ModalProps & {}
export const LogoutComponent: React.FC<LogoutComponentProps> = ({ closeModal }) => (
  <DefaultModalContainer closeModal={closeModal}>
    <div className="flex flex-col justify-center items-center font-semibold">
      <TextDisplay className="text-3xl">{}</TextDisplay>
      <TextDisplay className="mb-8 text-lg">ログアウトしました</TextDisplay>
      <RoundButton className="border-2 text-lg" text="Close" onClick={closeModal} />
    </div>
  </DefaultModalContainer>
)

export const LogoutModal = asModal(LogoutComponent)
