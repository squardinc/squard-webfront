import * as React from 'react'

import styles from './ClassCard.module.scss'
import styled from 'styled-components'
import { GradientCard } from '../GradientCard/GradientCard'
import * as Const from '../../styles/const'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
const Card = styled.div`
  margin-left: 15px;
  margin-right: 15px;
`

const SvgLogo = styled.div`
  padding-top: 10px;
  svg {
    margin: 0 auto;
  }
`

const Title = styled.div`
  text-align: center;
  font-weight: ${Const.fontWeight.light};
  font-size: 35px;
  letter-spacing: ${Const.letterSpacing.normal};
  margin: 0px 20px;
  white-space: pre-wrap;
`
const SubTitle = styled.div`
  text-align: center;
  font-weight: ${Const.fontWeight.light};
  font-size: 15px;
  letter-spacing: ${Const.letterSpacing.normal};
  margin-bottom: 20px;
  white-space: pre-wrap;
`

const Description = styled.div`
  text-align: left;
  font-weight: ${Const.fontWeight.light};
  font-size: 14px;
  line-height: 1.875;
  letter-spacing: -0.05em;
  margin: 0px 20px;
  margin-bottom: 0px;
  white-space: pre-wrap;
`

interface ClassCardProps {
  logo: any
  title: string
  subTitle: string
  description: string
}

export const ClassCard: React.FC<ClassCardProps> = (props) => {
  return (
    <Card>
      <GradientCard>
        <SvgLogo>{props.logo}</SvgLogo>
        <Title>
          <TextDisplay>{props.title}</TextDisplay>
        </Title>
        <SubTitle>
          <TextDisplay>{props.subTitle}</TextDisplay>
        </SubTitle>
        <Description>
          <TextDisplay>{props.description}</TextDisplay>{' '}
        </Description>
      </GradientCard>
    </Card>
  )
}
