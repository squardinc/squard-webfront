import * as React from 'react'
import {
  CardBodyWrapper, EntitlementsWrapper,
  EntitlementText, Flag, FlagWrapper,

  MainNameText,

  PriceText, SubNameText, TeamCardWrapper
} from 'src/components/TeamCard'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { ITeamClass } from 'src/models/team'
import * as colors from 'src/styles/colors'
import { addComma } from 'src/utils/NumberFormatter'
import styled from 'styled-components'

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
  const formattedPrice = addComma(team.price)

  return (
    <JoinCardAnchor id={team.classType}>
      <TeamCardWrapper>
        <FlagWrapper>
          <Flag>
            <MainNameText>
              <TextDisplay>{team.classType}</TextDisplay>
            </MainNameText>
            <SubNameText>
              <TextDisplay>{team.classTypeJp}</TextDisplay>
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
