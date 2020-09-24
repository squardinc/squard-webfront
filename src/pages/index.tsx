import * as React from 'react'
import { Router } from '@reach/router'
import { WithApolloProvider } from 'src/Apollo'
import { PageWrapper } from 'src/components/PageWrapper'
import { TopLayout } from 'src/contents/top'
import { ContentLayout } from 'src/contents/ContentLayout'

const IndexPage: React.FC = () => {
  return (
    <PageWrapper>
      <Router>
        <TopLayout default />
        <ContentLayout path=':contentId' contentId='' />
      </Router>
    </PageWrapper>
  )
}

export default WithApolloProvider(IndexPage)
