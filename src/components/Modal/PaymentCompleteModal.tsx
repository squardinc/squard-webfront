import * as React from 'react'
import { RoundButton } from 'src/components/Button/DefaultButton'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { ModalProps, asModal } from './asModal'
import { DefaultModalContainer } from './ModalContainer'
import PaymentComplete from 'src/assets/payment.svg'
import styled from 'styled-components'
import * as Const from '../../styles/const'

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  font-family: ${Const.fontFamily.monster};
  font-weight: ${Const.fontWeight.bold};
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 5px;
`
const SubTitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  font-family: ${Const.fontFamily.monster};
  font-weight: ${Const.fontWeight.bold};
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 15px;
`
const CompletedTitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  font-family: ${Const.fontFamily.monster};
  font-weight: ${Const.fontWeight.bold};
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 10px;
`

type PaymentCompleteComponentProps = ModalProps & {}
export const PaymentCompleteCompoenent: React.FC<PaymentCompleteComponentProps> = ({
  closeModal,
}) => {
  return (
    <DefaultModalContainer closeModal={closeModal}>
      <div className="flex flex-col justify-center items-center font-semibold">
        <TitleWrapper>決済完了</TitleWrapper>
        <SubTitleWrapper>Payment Completed!</SubTitleWrapper>
        <PaymentComplete />
        <CompletedTitleWrapper>お支払いが完了しました</CompletedTitleWrapper>
        <RoundButton className="border-2 text-lg" text="OK" />
      </div>
    </DefaultModalContainer>
  )
}

export const PaymentCompleteModal = asModal(PaymentCompleteCompoenent)
