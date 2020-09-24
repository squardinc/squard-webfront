import * as React from 'react'
import { JoinTeamPage } from './join/JoinTeamPage'
import { navigate } from 'gatsby'

interface ContentSubLayoutProps {
  path: string
  contentId: string
  subContentId: string
}
export const ContentSubLayout: React.FC<ContentSubLayoutProps> = ({ contentId, subContentId }) => {
  console.log(contentId)
  switch (subContentId) {
    case 'join':
      return <JoinTeamPage teamId={contentId} />
  }
  navigate(`${contentId}`)
  return <></>
}