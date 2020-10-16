import * as React from 'react'

interface TeamTopProps {
  image: string
}
export const TeamTop: React.FC<TeamTopProps> = ({ image }) => {
  return <img src={encodeURI(image)} alt="" />
}

export default TeamTop;