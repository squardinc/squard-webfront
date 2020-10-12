import * as React from 'react'
import { StaticPagePaths } from './ContentLayout'
import { navigate } from 'gatsby'
import JoinTeamContainer from 'src/contents/team/Join/JoinTeamContainer'
import LeaveTeamContainer from 'src/contents/team/Leave/LeaveTeamContainer'

interface ContentSubLayoutProps {
  path: string
  contentId: string
  subContentId: string
}
export const ContentSubLayout: React.FC<ContentSubLayoutProps> = ({
  contentId,
  subContentId,
}) => {
  console.log(contentId, subContentId)
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
