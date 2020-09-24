import * as React from 'react'
import { Router } from '@reach/router'
import { WithApolloProvider } from 'src/Apollo'
import { PageWrapper } from 'src/components/PageWrapper'
import { TopLayout } from 'src/contents/top'
import { ContentLayout } from 'src/contents/ContentLayout'
import { ContentSubLayout } from 'src/contents/ContentSubLayout'
import { ThemeContextProvider } from 'src/context/ThemeContext'

const IndexPage: React.FC = () => {
  return (
    <ThemeContextProvider>
      <PageWrapper>
        <Router>
          <TopLayout default />
          <ContentLayout path=':contentId' contentId='' />
          <ContentSubLayout path=':contentId/:subContentId' contentId='' subContentId='' />
        </Router>
      </PageWrapper>
    </ThemeContextProvider>
  )
}

export default WithApolloProvider(IndexPage)
