import * as React from 'react'
import styled from 'styled-components'
import { ITeam } from '../../../models/team'
import * as colors from '../../../styles/colors'
import * as sizes from '../../../styles/sizes'
import { addComma } from 'src/utils/NumberFormatter'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'

type JoinCardProps = {
  team: ITeam
}

const JoinCardAnchor = styled.div`
    padding-top: 70px;
    margin-top: -70px;
`
const JoinCardWrapper = styled.div`
  margin: 60px auto;
  max-width: ${sizes.cardWidth};
  background: ${colors.bgBlack};
  box-shadow: 0 20px 30px 0px ${colors.bgBlack};
`

const FlagWrapper = styled.div`
  position: relative;
  width: ${sizes.flagWidth};
  margin: 0 auto;
  top: -${sizes.flagTopShift};

  &::before {
    position: absolute;
    top: 0;
    left: -${sizes.flagTopShift};
    content: '';
    display: block;
    border-top: ${sizes.flagTopShift} ${colors.gradientYellow} solid;
    border-left: ${sizes.flagTopShift} ${colors.gradientYellow} solid;
    border-radius: ${sizes.flagTopShift} 0 0 0;
    width: 0;
    height: 0;
  }

  &::after {
    position: absolute;
    top: 0;
    right: -${sizes.flagTopShift};
    content: '';
    display: block;
    border-top: ${sizes.flagTopShift} ${colors.gradientYellow} solid;
    border-right: ${sizes.flagTopShift} ${colors.gradientYellow} solid;
    border-radius: 0 ${sizes.flagTopShift} 0 0;
    width: 0;
    height: 0;
  }
`

const Flag = styled.div`
  background: linear-gradient(
    to top,
    ${colors.gradientRed},
    ${colors.gradientYellow}
  );
  padding: 40px 10px 80px;
  text-align: center;

  position: relative;
  color: ${colors.textWhite};

  &:before {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    display: block;
    border-top: ${sizes.flagBottomCut} solid transparent;
    border-right: ${sizes.halfFlagWidth} solid ${colors.bgBlack};
  }

  &:after {
    position: absolute;
    bottom: 0;
    right: 0;
    content: '';
    display: block;
    border-top: ${sizes.flagBottomCut} solid transparent;
    border-left: ${sizes.halfFlagWidth} solid ${colors.bgBlack};
  }
`

const MainNameText = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`

const SubNameText = styled.div`
  font-size: 0.9rem;
`

const PriceText = styled.div`
  margin-top: 10px;
`

const EntitlementsWrapper = styled.div`
  margin: 20px 0;
`

const EntitlementText = styled.div`
  padding: 8px 0;
  text-align: center;
  color: ${colors.textWhite};
  border-top: 1px solid ${colors.borderGray};
  font-size: 0.9rem;
  white-space: pre-wrap;

  &:last-child {
    border-bottom: 1px solid ${colors.borderGray};
  }
`

const JoinNowWrapper = styled.div`
  display: block;
  text-align: center;
  padding: 10px 0 30px;
`

const JoinNowText = styled.div`
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

const JoinCard = (props: JoinCardProps) => {
  const { team } = props
  const formattedPrice = addComma(team.monthlyPrice)

  return (
    <JoinCardAnchor id={team.main}>
      <JoinCardWrapper>
        <FlagWrapper>
          <Flag>
            <MainNameText><TextDisplay>{team.main}</TextDisplay></MainNameText>
            <SubNameText>{team.sub}</SubNameText>
            <PriceText>￥{formattedPrice} / 月額</PriceText>
          </Flag>
        </FlagWrapper>
        <EntitlementsWrapper>
          {team.entitlements.map((el, i) => (
            <EntitlementText key={i}>{el}</EntitlementText>
          ))}
        </EntitlementsWrapper>
        <JoinNowWrapper>
          <JoinNowText>今すぐ参加する</JoinNowText>
        </JoinNowWrapper>
      </JoinCardWrapper>
    </JoinCardAnchor>
  )
}

export default React.memo(JoinCard)
