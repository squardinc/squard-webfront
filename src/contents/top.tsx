import * as React from 'react'
import { TeamLayout } from './team/TeamLayout'

interface TopLayoutProps {
  path?: string
}
export const TopLayout: React.FC<TopLayoutProps> = () => {
  return <TeamLayout />
}