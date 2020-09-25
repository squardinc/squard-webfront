import * as React from 'react'
import { RoundButton } from 'src/components/Button/DefaultButton'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { ModalProps, asModal } from './asModal'
import { DefaultModalContainer } from './ModalContainer'
import PaymentComplete from 'src/assets/payment.svg'

type PaymentCompleteComponentProps = ModalProps & {}
export const PaymentCompleteCompoenent: React.FC<PaymentCompleteComponentProps> = ({ closeModal }) => {
  return (
    <DefaultModalContainer closeModal={closeModal} >
      <div className='flex flex-col justify-center items-center font-semibold'>
        <TextDisplay className='text-3xl'>決済完了</TextDisplay>
        <TextDisplay className='mb-8 text-lg'>Payment Completed!</TextDisplay>
        <PaymentComplete />
        <TextDisplay className='mt-10 text-lg'>お支払いが完了しました</TextDisplay>
        <RoundButton className='border-2 text-lg' text='OK' />
      </div>
    </DefaultModalContainer>
  )
}

export const PaymentCompleteModal = asModal(PaymentCompleteCompoenent)