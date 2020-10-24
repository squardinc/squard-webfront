import * as React from 'react'
import { RoundButton } from 'src/components/Button/DefaultButton'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { ModalProps, asModal } from './asModal'
import { DefaultModalContainer } from './ModalContainer'

type LeaveTeamCompleteProps = ModalProps & { name: string }

const LeaveTeamComplete: React.FC<LeaveTeamCompleteProps> = ({ name, closeModal }) => {
  return (
    <DefaultModalContainer closeModal={closeModal}>
      <div className="flex flex-col justify-center items-center font-semibold">
        <TextDisplay className="text-3xl">脱退完了</TextDisplay>
        <TextDisplay className="mt-10 mb-10 text-lg">{name}を脱退しました。</TextDisplay>
        <RoundButton className="border-2 text-lg" text="OK" onClick={closeModal} />
      </div>
    </DefaultModalContainer>
  )
}

export const LeaveTeamCompleteModal = asModal(LeaveTeamComplete)
