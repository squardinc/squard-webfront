import styled from 'styled-components'
import * as colors from '../../styles/colors'
import * as sizes from '../../styles/sizes'

export const TeamCardWrapper = styled.div`
  width: ${sizes.cardWidth};
  background: ${colors.bgBlack};
  box-shadow: 0 20px 30px 0px ${colors.bgBlack};
  margin: 0 auto;
`

export const FlagWrapper = styled.div`
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

export const Flag = styled.div`
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

export const MainNameText = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`

export const SubNameText = styled.div`
  font-size: 0.9rem;
`

export const PriceText = styled.div`
  margin-top: 10px;
`

export const EntitlementsWrapper = styled.div`
  padding: 20px 0 16px;
`

export const EntitlementText = styled.div`
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

export const CardBodyWrapper = styled.div`
  display: block;
  text-align: center;
  padding: 10px 0 30px;
`
