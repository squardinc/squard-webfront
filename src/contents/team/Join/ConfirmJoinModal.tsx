import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { ExternalLink } from 'src/components/Link/ExternalLink'
import { asModal, ModalProps } from 'src/components/Modal/asModal'
import {
  CardBodyWrapper,
  EntitlementsWrapper,
  EntitlementText,
  Flag,
  FlagWrapper,
  MainNameText,
  PriceText,
  TeamCardWrapper
} from 'src/components/TeamCard'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { ITeamClass } from 'src/models/team'
import * as colors from 'src/styles/colors'
import * as Const from 'src/styles/const'
import { fadeIn } from 'src/utils/Modal'
import { addComma } from 'src/utils/NumberFormatter'
import styled from 'styled-components'

type ConfirmJoinModalProps = ModalProps & {
  currentClass?: ITeamClass
  team: ITeamClass
  onPaying: VoidFunction
}

const CloseButton = styled.div`
  position: absolute;
  top: 12px;
  right: 16px;
`

const FooterBtn = styled.button`
  display: inline-block;
  width: 70%;
  padding: 0 40px;
  border-radius: 30px;
  color: ${colors.textWhite};
  height: 50px;
  line-height: 50px;
  background: linear-gradient(70deg, ${colors.gradientRed}, ${colors.gradientYellow});
  font-weight: ${Const.fontWeight.medium};
  font-size: 16px;
`

const WarningWrapper = styled.div`
  padding: 20px 20px;
  padding-top: 0px;
  font-size: 13px;
`

const ConfirmJoinModalComponent: React.FC<ConfirmJoinModalProps> = ({
  currentClass,
  closeModal,
  team,
  onPaying,
}) => {
  React.useEffect(() => {
    fadeIn()
  }, [])
  const joinBtnText = team.price === 0 ? '参加する' : '決済画面に遷移する'
  const warningProspects = `※ 現在参加中のクラス「${currentClass?.classType}」の\r\n翌月以降の支払いは自動的に解除されます。`

  return (
    <div className="text-white rounded-xl bg-opacity-25 relative">
      <CloseButton>
        <FontAwesomeIcon
          icon={faTimes}
          className="text-white cursor-pointer"
          onClick={closeModal}
        />
      </CloseButton>
      <TeamCardWrapper>
        <FlagWrapper>
          <Flag>
            <MainNameText>
              <TextDisplay>
                {team.classType}
                <br />
                <div>{'として参加する'}</div>
              </TextDisplay>
            </MainNameText>
            {team.price != null && (
              <PriceText>
                <TextDisplay>￥{addComma(team.price)} / 月額</TextDisplay>
              </PriceText>
            )}
          </Flag>
        </FlagWrapper>
        <EntitlementsWrapper>
          {team.benefits &&
            team.benefits.map((benefit, i) => (
              <EntitlementText key={i}>
                <ExternalLink href={benefit.link} className="underline">
                  <TextDisplay>{benefit.description}</TextDisplay>
                </ExternalLink>
              </EntitlementText>
            ))}
        </EntitlementsWrapper>
        <CardBodyWrapper>
          {currentClass?.price?.price > 0 && (
            <WarningWrapper>
              <TextDisplay>{warningProspects}</TextDisplay>
            </WarningWrapper>
          )}
          <FooterBtn onClick={onPaying}>
            <TextDisplay>{joinBtnText}</TextDisplay>
          </FooterBtn>
          <FooterBtn style={{ marginTop: '10px' }} onClick={closeModal}>
            <TextDisplay>キャンセル</TextDisplay>
          </FooterBtn>
        </CardBodyWrapper>
      </TeamCardWrapper>
    </div>
  )
}

export const ConfirmJoinModal = asModal(ConfirmJoinModalComponent)
export default asModal(ConfirmJoinModalComponent)
