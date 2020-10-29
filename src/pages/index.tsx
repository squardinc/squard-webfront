import { Router } from '@reach/router'
import * as React from 'react'
import { WithApolloProvider } from 'src/Apollo'
import Loading from 'src/components/Loading'
import { PageWrapper } from 'src/components/PageWrapper'
import { ContentLayout } from 'src/contents/ContentLayout'
import { ContentSubLayout } from 'src/contents/ContentSubLayout'
import { TopLayout } from 'src/contents/TopLayout'
import { LoadingContextProvider } from 'src/context/LoadingContextProvider'
import { ThemeContextProvider } from 'src/context/ThemeContext'
import { UserContextProvider } from 'src/context/UserContext'

const IndexPage: React.FC = () => {
  const isSSR = typeof window === 'undefined'

  return (
    <>
      {!isSSR && (
        <>
          <LoadingContextProvider>
            <ThemeContextProvider>
              <UserContextProvider>
                <PageWrapper>
                  <React.Suspense fallback={<Loading loading />}>
                    <Router>
                      <ContentLayout path=":contentId" contentId="" />
                      <ContentSubLayout
                        path=":contentId/:subContentId"
                        contentId=""
                        subContentId=""
                      />
                      <TopLayout default />
                    </Router>
                  </React.Suspense>
                </PageWrapper>
              </UserContextProvider>
            </ThemeContextProvider>
          </LoadingContextProvider>
        </>
      )}
    </>
  )
}

export default WithApolloProvider(IndexPage)
