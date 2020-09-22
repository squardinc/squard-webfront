import * as React from 'react'
import { TeamLayout } from './team/TeamLayout'

interface TopLayoutProps {
  default: boolean
}
export const TopLayout: React.FC<TopLayoutProps> = () => {
  return <TeamLayout />
}