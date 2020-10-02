import * as React from 'react'
import styled from 'styled-components'
import { Image } from '../Image/index'
export interface ImageProfileProps {
  cover?: string
  avatar?: string
  style?: React.CSSProperties
}

const ImageProfileWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 340px;
`
const ImageCoverWrapper = styled.div`
  width: 100%;
  height: 250px;
`
const ImageAvatarWrapper = styled.div`
  position: absolute;
  top: 175px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  height: 150px;
`

export const ImageProfile = React.memo((props: ImageProfileProps) => {
  const style = props.style ? { ...props.style } : {}

  const cover = props.cover
  const avatar = props.avatar
  
  return (
    <ImageProfileWrapper style={style}>
      <ImageCoverWrapper>
        <Image
          src={cover}
          width={'100%'}
          height={'100%'}
          objectFit={'cover'}
          style={{ overflow: 'hidden' }}
        />
      </ImageCoverWrapper>
      <ImageAvatarWrapper>
        <Image
          src={avatar}
          width={'100%'}
          height={'100%'}
          objectFit={'cover'}
          style={{ borderRadius: '75px', overflow: 'hidden' }}
        />
      </ImageAvatarWrapper>
    </ImageProfileWrapper>
  )
})
