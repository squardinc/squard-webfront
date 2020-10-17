import React, { lazy, Suspense } from 'react'
import { withTheme } from 'src/context/ThemeContext'
import * as Const from 'src/styles/const'
import styled from 'styled-components'

const Status = lazy(() => import('./Status/Status'))
const Heading1 = lazy(() => import('src/components/Heading1/Heading1'))
const About = lazy(() => import('./About/About'))
const Classes = lazy(() => import('./Classes/Classes'))
const ManagementSystem = lazy(() => import('./ManagementSystem/ManagementSystem'))
const ContentFooter = lazy(() => import('src/components/Footer/ContentFooter'))

const PageHeader = styled(Heading1)`
  font-size: ${Const.fontSize.xl2};
`
const renderLoader = () => <p>Loading</p>
const Page: React.FC = () => {
  return (
    <Suspense fallback={renderLoader()}>
      <PageHeader>About</PageHeader>
      <About></About>
      <Classes></Classes>
      <Status></Status>
      <ManagementSystem></ManagementSystem>
      <ContentFooter
        backgroundColor={Const.darkBlue}
        titleSub="Thank you for"
        titleMain="Reading."
        text="こちらのページを最後まで読んでくださったことを心より感謝いたします。Squardは現在ベータ版でのご提供となりますが2020年11月の正式版リリースに伴い皆様にも自由にチームを作成していただくことが可能となります。以下より事前登録を行っていただくことで正式版ローンチのご連絡をさせていただきます。"
        buttonText="事前登録フォームに進む"
        onButtonClick={() =>
          window.open('https://www.squard.co.jp/coming-soon/', '_blank')
        }
      />
    </Suspense>
  )
}

export const AboutPage = withTheme(Page, 'dark')
export default withTheme(Page, 'dark')
