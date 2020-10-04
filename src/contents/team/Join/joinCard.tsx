import * as React from 'react'
import styled from 'styled-components'
import * as colors from 'src/styles/colors'
import { ITeamClass } from 'src/models/team'
import { addComma } from 'src/utils/NumberFormatter'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import {
  TeamCardWrapper,
  FlagWrapper,
  Flag,
  MainNameText,
  SubNameText,
  PriceText,
  EntitlementsWrapper,
  EntitlementText,
  CardBodyWrapper,
} from 'src/components/TeamCard'

type JoinCardProps = {
  team: ITeamClass
  join: VoidFunction
}

const JoinCardAnchor = styled.div`
  padding-top: 70px;
  margin-top: -70px;
`

const JoinNowButton = styled.button`
  display: inline-block;
  padding: 0 40px;
  border-radius: 30px;
  color: ${colors.textWhite};
  height: 50px;
  line-height: 50px;
  font-size: 1.2rem;
  background: linear-gradient(
    70deg,
    ${colors.gradientRed},
    ${colors.gradientYellow}
  );
`

const JoinCard: React.FC<JoinCardProps> = ({ team, join }) => {
  const formattedPrice = addComma(team.monthlyPrice)

  return (
    <JoinCardAnchor id={team.main}>
      <TeamCardWrapper>
        <FlagWrapper>
          <Flag>
            <MainNameText>
              <TextDisplay>{team.main}</TextDisplay>
            </MainNameText>
            <SubNameText>
              <TextDisplay>{team.sub}</TextDisplay>
            </SubNameText>
            <PriceText>
              <TextDisplay>￥{formattedPrice} / 月額</TextDisplay>
            </PriceText>
          </Flag>
        </FlagWrapper>
        <EntitlementsWrapper>
          {team.benefits.map((el, i) => (
            <EntitlementText key={i}>
              <TextDisplay>{el}</TextDisplay>
            </EntitlementText>
          ))}
        </EntitlementsWrapper>
        <CardBodyWrapper>
          <JoinNowButton onClick={join} >
            <TextDisplay>今すぐ参加する</TextDisplay>
          </JoinNowButton>
        </CardBodyWrapper>
      </TeamCardWrapper>
    </JoinCardAnchor>
  )
}

export default React.memo(JoinCard)
