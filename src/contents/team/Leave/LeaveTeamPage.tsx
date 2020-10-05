import * as React from 'react'
import styled from 'styled-components'
import * as colors from 'src/styles/colors'
import { ITeam } from 'src/models/team'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { Heading3 } from 'src/components/Heading3/Heading3'
import {
  TeamCardWrapper,
  FlagWrapper,
  Flag,
  MainNameText,
  SubNameText,
  PriceText,
  EntitlementsWrapper,
  EntitlementText,
} from 'src/components/TeamCard'
import { addComma } from 'src/utils/NumberFormatter'
import { LeaveTeamCompleteModal } from 'src/components/Modal/LeaveTeamCompleteModal'
import { navigate } from 'gatsby'

type LeaveTeamProps = {
  isLoading: boolean
  teamData: ITeam
}

const LeaveTeamWrapper = styled.div`
  background: ${colors.textWhite};
  padding: 20px;
`

const LeaveTeamTitle = styled.div`
  white-space: nowrap;
`

const JoinInfoWrapper = styled.div`
  padding: 20px 30px;
`

const TextLeaveTeam = styled.div`
  font-size: 1.5rem;
  margin: 12px;
`

const TextTeamName = styled.span`
  text-decoration: underline;
  font-weight: 700;
  margin-right: 4px;
`

const TextDesciption = styled.div`
  margin: 20px 12px;
  line-height: 2;
`

const CardWrapper = styled.div`
  position: relative;
  margin: 30px 0;
`

const LeaveTeamAnchorWrapper = styled.div`
  margin: 60px 0 28px;
  text-align: center;
`

const LeaveTeamAnchor = styled.span`
  cursor: pointer;
`

const LeaveTeam = ({ teamData }: LeaveTeamProps) => {
  const [showModal, setShowModal] = React.useState<boolean>(false)

  return (
    <>
      <LeaveTeamWrapper>
        <LeaveTeamTitle>
          <Heading3>
            <TextDisplay>Teamを脱退する</TextDisplay>
          </Heading3>
        </LeaveTeamTitle>
        <JoinInfoWrapper>
          <TextLeaveTeam>
            <TextTeamName>Squard</TextTeamName>を脱退する
          </TextLeaveTeam>
          <TextDesciption>
            チームを脱退すると以下の特典を失います。本当に脱退しますか。
          </TextDesciption>
        </JoinInfoWrapper>
        <CardWrapper>
          <TeamCardWrapper>
            <FlagWrapper>
              <Flag>
                <MainNameText>
                  <TextDisplay>{teamData.main}</TextDisplay>
                </MainNameText>
                <SubNameText>
                  <TextDisplay>{teamData.sub}</TextDisplay>
                </SubNameText>
                <PriceText>
                  <TextDisplay>
                    ￥{addComma(teamData.monthlyPrice)} / 月額
                  </TextDisplay>
                </PriceText>
              </Flag>
            </FlagWrapper>
            <EntitlementsWrapper>
              {teamData.entitlements.map((el, i) => (
                <EntitlementText key={i}>
                  <TextDisplay>{el}</TextDisplay>
                </EntitlementText>
              ))}
            </EntitlementsWrapper>
          </TeamCardWrapper>
        </CardWrapper>
        <LeaveTeamAnchorWrapper>
          <LeaveTeamAnchor
            onClick={() => {
              setShowModal(true)
            }}
          >
            Squardを脱退する
          </LeaveTeamAnchor>
        </LeaveTeamAnchorWrapper>
      </LeaveTeamWrapper>
      {showModal && (
        <LeaveTeamCompleteModal
          name="Squard"
          closeModal={() => {
            setShowModal(false)
            navigate('/') // TODO 遷移先確定
          }}
        />
      )}
    </>
  )
}

export default React.memo(LeaveTeam)
