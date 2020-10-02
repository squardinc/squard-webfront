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
    width:100%;
    height:250px;
`
const ImageAvatarWrapper = styled.div`
    position: absolute; 
    top:175px;
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
    ? props.cover
    : 'https://i.pinimg.com/600x315/ea/cc/7b/eacc7b2dd8e74df581203a1172d7cee4.jpg'
  const avatar = props.cover
    ? props.cover
    : 'https://cdn.vox-cdn.com/thumbor/48ExsWf9xBecr-aK18m01PRLVio=/95x601:1280x1460/1400x933/filters:focal(538x858:742x1062):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66699060/mgidarccontentnick.comc008fa9d_d.0.png'

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
