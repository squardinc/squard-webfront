import * as React from 'react'
import { Router } from '@reach/router'
import { WithApolloProvider } from 'src/Apollo'
import { PageWrapper } from 'src/components/PageWrapper'
import { ContentLayout } from 'src/contents/ContentLayout'
import { ContentSubLayout } from 'src/contents/ContentSubLayout'
import { ThemeContextProvider } from 'src/context/ThemeContext'
import { Redirect } from 'src/contents/redirect'
import { UserContextProvider } from 'src/context/UserContext'

const IndexPage: React.FC = () => {
  return (
    <ThemeContextProvider>
      <UserContextProvider >
        <PageWrapper>
          <Router>
            <ContentLayout path=":contentId" contentId="" />
            <ContentSubLayout
              path=":contentId/:subContentId"
              contentId=""
              subContentId=""
            />
            <Redirect default />
          </Router>
        </PageWrapper>
      </UserContextProvider >
    </ThemeContextProvider>
  )
}

export default WithApolloProvider(IndexPage)
