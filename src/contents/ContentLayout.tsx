import * as React from 'react'
import { TeamLayout } from './team/TeamLayout'

interface ContentLayoutProps {
  path: string
  contentId: string
}
export const ContentLayout: React.FC<ContentLayoutProps> = ({ contentId }) => {
  return <TeamLayout />
}