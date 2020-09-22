import * as React from 'react'
import { WithApolloProvider } from 'src/Apollo'
import { PageWrapper } from 'src/components/PageWrapper'
import { TeamLayout } from 'src/contents/team/TeamLayout'

const IndexPage: React.FC = () => {
  return (
    <PageWrapper>
      <TeamLayout />
    </PageWrapper>
  )
}

export default WithApolloProvider(IndexPage)
