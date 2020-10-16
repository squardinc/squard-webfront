import { gql, useQuery } from '@apollo/client'
import { navigate } from 'gatsby'
import * as React from 'react'
import { getPage } from 'src/graphql/queries'
import { GetPageQuery } from 'src/types/API'
import { PersonPageContainer } from './person/PersonPageContainer'
import { StaticPageRoute } from './StaticPageRoute'
import { TeamContainer } from './team/TeamContainer'

export const StaticPagePaths = [
  'about',
  'company',
  'faq',
  'privacypolicy',
  'sctl',
  'signup',
  'confirmSignUp',
  'resetPassword',
  'socialSignIn',
] as const

type StaticPageType = typeof StaticPagePaths[number]

interface ContentLayoutProps {
  path: string
  contentId: StaticPageType | string
}
export const ContentLayout: React.FC<ContentLayoutProps> = ({ contentId = '' }) => {
  if (StaticPagePaths.includes(contentId)) return <StaticPageRoute contentId={contentId} />

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
