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
import { IDisplayTeamMember } from 'src/models/person'
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
  font-size: 0.8rem;
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
        <FlagWrapper>
          <Flag>
            <MainNameText>
              <TextDisplay>{team.teamName}</TextDisplay>
              <TextDisplay>{team.classType}</TextDisplay>
            </MainNameText>
            {team.price && (
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
                <ExternalLink href={benefit.link}>
                  <TextDisplay>{benefit.description}</TextDisplay>
                </ExternalLink>
              </EntitlementText>
            ))}
        </EntitlementsWrapper>
        <CardBodyWrapper>
          <LeaveTeamLabel
            onClick={() => {
              onLeaveTeam()
            }}
          >
            <TextDisplay>チームを脱退する</TextDisplay>
          </LeaveTeamLabel>
        </CardBodyWrapper>
      </TeamCardWrapper>
    </div>
  )
}

export const TeamModal = asModal(TeamModalComponent)
export default asModal(TeamModalComponent)
