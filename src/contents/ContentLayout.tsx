import { gql, useQuery } from '@apollo/client'
import { navigate } from 'gatsby'
import * as React from 'react'
import { getPage } from 'src/graphql/queries'
import { GetPageQuery } from 'src/types/API'
import { PersonPageContainer } from './person/PersonPageContainer'
import { StaticPageRoute } from './StaticPageRoute'
import { TeamContainer } from './team/TeamContainer'

export const StaticPagePaths = ['about', 'company', 'faq', 'privacypolicy', 'signup'] as const

type StaticPageType = typeof StaticPagePaths[number]

interface ContentLayoutProps {
  path: string
  contentId: StaticPageType | string
}
export const ContentLayout: React.FC<ContentLayoutProps> = ({ contentId }) => {
  const { loading, error, data } = useQuery<GetPageQuery>(gql(getPage), {
    variables: { id: contentId },
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
  console.log(resourceId, type)
  if (type === 'Team') return <TeamContainer id={resourceId} />
  console.log('person')
  if (type === 'Person') return <PersonPageContainer id={resourceId} />
  console.log('static')
  return <StaticPageRoute contentId={resourceId} />
}
