import * as React from 'react'

import { Heading1 } from 'src/components/Heading1/Heading1'
import { About } from './About/About'
import { Classes } from './Classes/Classes'
import { ManagementSystem } from './ManagementSystem/ManagementSystem'
import { Status } from './Status/Status'
import { ContentFooter } from 'src/components/Footer/ContentFooter'
import { LoginModal } from 'src/components/Modal/LoginModal'
import { withTheme } from 'src/context/ThemeContext'

const Page: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = React.useState(false)
  const [showSignUpModal, setShowSignUpModal] = React.useState(false)
  return (
    <div>
      <Heading1>About</Heading1>
      <About></About>
      <Classes></Classes>
      <Status></Status>
      <ManagementSystem></ManagementSystem>
      <ContentFooter
        titleSub='Thank you for'
        titleMain='Readiong.'
        text='こちらのページを最後まで読んでくださったことを心より感謝いたします。Squardは現在ベータ版でのご提供となりますが2020年12月の正式版リリースに伴い皆様にも自由にチームを作成していただくことが可能となります。以下より事前登録を行っていただくことで正式版ローンチのご連絡をさせていただきます。'
        buttonText='事前登録フォームに進む'
        onButtonClick={() => setShowLoginModal(true)}
      />
      <div>{showLoginModal ? <LoginModal closeModal={() => setShowLoginModal(false)} showSignUpModal={() => {
        setShowLoginModal(false)
        setShowSignUpModal(true)
      }}/> : <></>}</div>
    </div>
  )
}

export const AboutPage = withTheme(Page, 'dark')
