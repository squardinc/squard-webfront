import * as React from 'react'
import styled from 'styled-components'
import * as colors from '../../styles/colors'
import * as Const from '../../styles/const'

export interface Heading3Props {
  children: React.ReactNode
}

const Wrapper = styled.div`
  margin: 20px;
  text-align: center;
  font-size: 2.4rem;
  font-weight: 600;
  color: ${colors.textBlack};
  text-align: center;
`

const Heading = styled.div`
  display: inline-block;
  padding: 0 10px 8px;

  &::after {
    margin: 0px -5px 0px -5px;
    content: '';
    display: block;
    height: 8px;
    background-image: linear-gradient(to right bottom, transparent 0% 45%, #ddd 50%, white 60% 100%),
      linear-gradient(to right, ${colors.gradientYellow} 0%, ${colors.gradientRed} 100%);
  }
`

export const Heading3 = React.memo((props: Heading3Props) => {
  return (
    <Wrapper>
      <Heading>{props.children}</Heading>
    </Wrapper>
  )
})
