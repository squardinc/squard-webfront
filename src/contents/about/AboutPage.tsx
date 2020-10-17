import * as React from 'react'
import { ContentFooter } from 'src/components/Footer/ContentFooter'
import { Heading1 } from 'src/components/Heading1/Heading1'
import { withTheme } from 'src/context/ThemeContext'
import * as Const from 'src/styles/const'
import styled from 'styled-components'
import { About } from './About/About'
import { Classes } from './Classes/Classes'
import { ManagementSystem } from './ManagementSystem/ManagementSystem'
import { Status } from './Status/Status'

const PageHeader = styled(Heading1)`
  font-size: ${Const.fontSize.xl2};
`
const Page: React.FC = () => {
  return (
    <div>
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
    </div>
  )
}

export const AboutPage = withTheme(Page, 'dark')
export default withTheme(Page, 'dark')
