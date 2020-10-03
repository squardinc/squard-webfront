import * as React from 'react'
import styled from 'styled-components'

export interface IconProps {
  name: string
  color?: string
  size?: string
  style?: React.CSSProperties
  withText?: boolean
  onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

const Wrapper = styled.svg`
  display: inline-flex;
  margin-top: ${(props: IconProps) => (props.withText ? '-0.2em' : '0')};
  overflow: hidden;
  width: ${(props: IconProps) => (props.size ? props.size : '1em')};
  height: ${(props: IconProps) => (props.size ? props.size : '1em')};
  fill: ${(props) => (props.color ? props.color : 'currentColor')};
`

export const Icon = React.memo((props: IconProps) => {
  return (
    <Wrapper {...props} viewBox="0 0 24 24" aria-hidden="true">
      <use xlinkHref={`#icon-${props.name}`} />
    </Wrapper>
  )
})
