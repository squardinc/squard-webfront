import * as React from 'react'
import { ImageOverlay } from 'src/components/ImageOverlay/TeamCoreMembers'

interface TeamTopProps {
  image: string
}
export const TeamTop: React.FC<TeamTopProps> = ({ image }) => {
  return (
    <div className="relative">
      <ImageOverlay />
      <img src={encodeURI(image)} alt="" style={{ background: '' }} />
    </div>
  )
}
