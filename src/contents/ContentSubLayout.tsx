import { navigate } from 'gatsby'
import * as React from 'react'
import { StaticPagePaths } from './ContentLayout'
const JoinTeamContainer = React.lazy(() => import('src/contents/team/Join/JoinTeamContainer'))
const LeaveTeamContainer = React.lazy(() => import('src/contents/team/Leave/LeaveTeamContainer'))

interface ContentSubLayoutProps {
  path: string
  contentId: string
  subContentId: string
}
export const ContentSubLayout: React.FC<ContentSubLayoutProps> = ({ contentId, subContentId }) => {
  if (StaticPagePaths.includes(contentId)) {
    navigate(`/${contentId}`)
    return <></>
  }
  switch (subContentId) {
    case 'join':
      return <JoinTeamContainer teamId={contentId} />
    case 'leave':
      return <LeaveTeamContainer />
  }
  navigate(`/${contentId}`)
  return <></>
}
