import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { navigate } from 'gatsby'
import * as React from 'react'
import TeamLinkIcon from 'src/assets/team_link.svg'
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
import { IDisplayTeamMember, isLeavable } from 'src/models/person'
import * as colors from 'src/styles/colors'
import * as Const from 'src/styles/const'
import { formattedDate } from 'src/utils/date'
import { fadeIn } from 'src/utils/Modal'
import { addComma } from 'src/utils/NumberFormatter'
import styled from 'styled-components'

type TeamModalProps = ModalProps & {
  team: IDisplayTeamMember
  onLeaveTeam: VoidFunction
}

const CloseButton = styled.div`
  position: absolute;
  top: 12px;
  right: 16px;
`

const LeaveTeamLabel = styled.div`
  display: inline-block;
  padding: 0 40px;
  border-radius: 30px;
  color: ${colors.textWhite};
  height: 50px;
  line-height: 50px;
  background: linear-gradient(70deg, ${colors.gradientRed}, ${colors.gradientYellow});
  font-weight: ${Const.fontWeight.medium};
  font-size: 16px;
  cursor: pointer;  
`

const TeamModalComponent: React.FC<TeamModalProps> = ({ closeModal, team, onLeaveTeam }) => {
  React.useEffect(() => {
    fadeIn()
  }, [])

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
        <FlagWrapper onClick={() => navigate(`/${team.pageId}`)} className="cursor-pointer">
          <Flag>
            <div className="absolute top-0 right-0">
              <TeamLinkIcon className="m-1" />
            </div>
            <MainNameText>
              <TextDisplay>{team.teamName}</TextDisplay>
              <TextDisplay>{team.classType}</TextDisplay>
            </MainNameText>
            {team.price != null && (
              <PriceText>
                <TextDisplay>￥{addComma(team.price)} / 月額</TextDisplay>
              </PriceText>
            )}
          </Flag>
        </FlagWrapper>
        <EntitlementsWrapper>
          {team.expireAt && (
            <EntitlementText>
              <TextDisplay>有効期間： ～{formattedDate(team.expireAt)}(自動更新)</TextDisplay>
            </EntitlementText>
          )}
          {team.benefits &&
            team.benefits.map((benefit, i) => (
              <EntitlementText key={i}>
                <ExternalLink href={benefit.link} className="underline">
                  <TextDisplay>{benefit.description}</TextDisplay>
                </ExternalLink>
              </EntitlementText>
            ))}
        </EntitlementsWrapper>
        {isLeavable(team.classType) && (
          <CardBodyWrapper>
            <LeaveTeamLabel
              onClick={() => {
                onLeaveTeam()
              }}
            >
              <TextDisplay>チームを脱退する</TextDisplay>
            </LeaveTeamLabel>
          </CardBodyWrapper>
        )}
      </TeamCardWrapper>
    </div>
  )
}

export const TeamModal = asModal(TeamModalComponent)
export default asModal(TeamModalComponent)
