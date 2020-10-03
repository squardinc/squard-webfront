import * as React from 'react'
import styled from 'styled-components'

export interface ImageProps {
  src: string
  objectFit?: React.CSSProperties['objectFit']
  width?: string
  height?: string
  style?: React.CSSProperties
}

const ImageWrapper = styled.img``

export const Image = React.memo((props: ImageProps) => {
  const style = props.style ? { ...props.style } : {}
  style.objectFit = props.objectFit || 'contain'
  style.width = props.width || 'auto'
  style.height = props.height || 'auto'

  return <ImageWrapper src={props.src} style={style} />
})
