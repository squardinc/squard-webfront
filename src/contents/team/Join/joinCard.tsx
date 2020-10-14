import * as React from 'react'
import {
  CardBodyWrapper,
  EntitlementsWrapper,
  EntitlementText,
  Flag,
  FlagWrapper,
  MainNameText,
  SubNameText,
  TeamCardWrapper
} from 'src/components/TeamCard'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { ITeamClass } from 'src/models/team'
import * as colors from 'src/styles/colors'
import * as Const from 'src/styles/const'
import { addComma } from 'src/utils/NumberFormatter'
import styled from 'styled-components'

type JoinCardProps = {
  team: ITeamClass
  join: VoidFunction
}

const CardTitle = styled(MainNameText)`
  font-weight: ${Const.fontWeight.bold};
  font-size: 23px;
  margin-top: -5px;
`

const CardSubTitle = styled(SubNameText)`
  font-weight: ${Const.fontWeight.light};
  font-size: 14px;
  margin-top: -2px;
`
const CardPriceTitle = styled(SubNameText)`
  font-weight: ${Const.fontWeight.dimlight};
  font-size: 16px;
  margin-top: 15px;
`

const CardEntitlementText = styled(EntitlementText)`
  font-weight: ${Const.fontWeight.thin};
  font-size: 14px;
  padding-left: 10px;
  padding-right: 10px;
`

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

  background: linear-gradient(70deg, ${colors.gradientRed}, ${colors.gradientYellow});

  font-weight: ${Const.fontWeight.medium};
  font-size: 16px;
`

const JoinCard: React.FC<JoinCardProps> = ({ team, join }) => {
  const formattedPrice = addComma(team.price)

  return (
    <JoinCardAnchor id={team.classType}>
      <TeamCardWrapper>
        <FlagWrapper>
          <Flag>
            <CardTitle
              style={{
                fontSize: team.classType && team.classType.length > 8 ? '23px' : '29px',
              }}
            >
              <TextDisplay>{team.classType}</TextDisplay>
            </CardTitle>
            <CardSubTitle>
              <TextDisplay>({team.classTypeJp})</TextDisplay>
            </CardSubTitle>
            <CardPriceTitle>
              <TextDisplay>￥{formattedPrice} / 月額</TextDisplay>
            </CardPriceTitle>
          </Flag>
        </FlagWrapper>
        <EntitlementsWrapper>
          {team.benefits.map((benefit, i) => (
            <EntitlementText key={i}>
              <TextDisplay>{benefit.description}</TextDisplay>
            </EntitlementText>
          ))}
        </EntitlementsWrapper>
        <CardBodyWrapper>
          <JoinNowButton onClick={join}>
            <TextDisplay>今すぐ参加する</TextDisplay>
          </JoinNowButton>
        </CardBodyWrapper>
      </TeamCardWrapper>
    </JoinCardAnchor>
  )
}

export default React.memo(JoinCard)
