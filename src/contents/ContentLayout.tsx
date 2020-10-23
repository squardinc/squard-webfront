import { gql, useQuery } from '@apollo/client'
import { navigate } from 'gatsby'
import * as React from 'react'
import { UserContext } from 'src/context/UserContext'
import { getPage } from 'src/graphql/queries'
import { GetPageQuery } from 'src/types/API'
import { StaticPagePaths, StaticPageType } from './StaticPageRoute'
const StaticPageRoute = React.lazy(() => import('./StaticPageRoute'))
const TeamContainer = React.lazy(() => import('./team/TeamContainer'))
const PersonPageContainer = React.lazy(
  () => import('./person/PersonPageContainer')
)

interface ContentLayoutProps {
  path: string
  contentId: StaticPageType | string
}
export const ContentLayout: React.FC<ContentLayoutProps> = ({
  contentId = '',
}) => {
  const { user } = React.useContext(UserContext)
  if (StaticPagePaths.includes(contentId))
    return <StaticPageRoute contentId={contentId} />
  if (contentId === 'mypage') {
    if (user.loggedIn) return <PersonPageContainer id={user.id} />
    navigate('/')
    return <></>
  }
  const { loading, error, data } = useQuery<GetPageQuery>(gql(getPage), {
    variables: { id: contentId.toLowerCase() },
  })
  if (error) {
    navigate('/')
    return <></>
  }
  if (loading || !data) {
    // TODO loading
    return <></>
  }
  const { resourceId, type = 'Team' } = data.getPage || {}
  if (!resourceId) {
    navigate('/')
    return <></>
  }
  if (!type) {
    return <></>
  }
  if (type === 'Team') return <TeamContainer id={resourceId} />
  if (type === 'Person') return <PersonPageContainer id={resourceId} />
  return <StaticPageRoute contentId={resourceId} />
}
