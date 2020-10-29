import * as React from 'react'
import { TeamContainer } from './team/TeamContainer'

interface TopLayoutProps {
  default: boolean
}
export const TopLayout: React.FC<TopLayoutProps> = () => {
  return <TeamContainer id="squard" />
}
