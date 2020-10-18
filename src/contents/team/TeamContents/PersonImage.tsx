import * as React from 'react'
import Top from 'src/images/temp/team/top.jpg'
import { CSSProperties } from 'styled-components'

interface PersonImageProps {
  src?: string
  className?: string
  style?: CSSProperties
}
export const PersonImage: React.FC<PersonImageProps> = ({ src, className = '', style }) => {
  return <img src={src ? encodeURI(src) : Top} alt={Top} className={className} style={style} />
}
