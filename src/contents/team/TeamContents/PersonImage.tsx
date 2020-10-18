import * as React from 'react'
import Top from 'src/images/temp/team/top.jpg'

interface PersonImageProps {
  src?: string
  className?: string
}
export const PersonImage: React.FC<PersonImageProps> = ({ src, className = '' }) => {
  return <img src={src ? encodeURI(src) : Top} alt={Top} className={className} />
}
