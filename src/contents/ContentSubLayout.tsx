import * as React from 'react'
import { StaticPagePaths } from './ContentLayout'
import { navigate } from 'gatsby'
import JoinTeamContainer from 'src/containers/pages/JoinTeam'
import LeaveTeamContainer from 'src/containers/pages/LeaveTeam'

interface ContentSubLayoutProps {
  path: string
  contentId: string
  subContentId: string
}
export const ContentSubLayout: React.FC<ContentSubLayoutProps> = ({
  contentId,
  subContentId,
}) => {
  if (StaticPagePaths.includes(contentId)) {
    navigate(`/${contentId}`)
    return <></>
  }
  switch (subContentId) {
    case 'join':
      return <JoinTeamContainer />
    case 'leave':
      return <LeaveTeamContainer />
  }
  navigate(`/${contentId}`)
  return <></>
}
