import * as React from 'react'
import styled from 'styled-components'
import { ModalProps, asModal } from './asModal'
import { ITeam } from 'src/models/personal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { fadeIn } from 'src/utils/Modal'
import {
  FlagWrapper,
  Flag,
  MainNameText,
  PriceText,
  EntitlementsWrapper,
  EntitlementText,
  CardBodyWrapper,
  TeamCardWrapper,
} from '../TeamCard'
import { TextDisplay } from '../TextDisplay/TextDisplay'
import { addComma } from 'src/utils/NumberFormatter'

type TeamModalProps = ModalProps & {
  team: ITeam
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

const TeamModalComponent: React.FC<TeamModalProps> = ({
  closeModal,
  team,
  onLeaveTeam,
}) => {
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
              <TextDisplay>{team.name}</TextDisplay>
            </MainNameText>
            {team.monthlyPrice && (
              <PriceText>
                <TextDisplay>
                  ￥{addComma(team.monthlyPrice)} / 月額
                </TextDisplay>
              </PriceText>
            )}
          </Flag>
        </FlagWrapper>
        <EntitlementsWrapper>
          {team.entitlements &&
            team.entitlements.map((el, i) => (
              <EntitlementText key={i}>
                <TextDisplay>{el}</TextDisplay>
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
