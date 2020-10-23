import { Link } from 'gatsby'
import React, { Suspense } from 'react'
import { FAQItem } from 'src/components/FAQItem/FAQItem'
import { DefaultFooter } from 'src/components/Footer/ContentFooter'
import { Heading1 } from 'src/components/Heading1/Heading1'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { withTheme } from 'src/context/ThemeContext'
import styled from 'styled-components'
import * as Const from '../../styles/const'
import styles from './FAQ.module.scss'

const PageHeader = styled(Heading1)`
  font-weight: ${Const.fontWeight.simbold};
  font-size: 28px;
`

const GroupFAQ = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  :last-child {
    margin-bottom: 0px;
  }
`
export const Page: React.FC = (props) => {
  const faqs = [
    {
      question: '利用料金はいくらですか？',
      answer:
        'Squard内でのチームページや個人ページの作成に利用料金は一切発生しません。',
    },
    {
      question: '個人ページはどうやって作れますか？',
      answer:
        'Facebookアカウントをお持ちの方はFacebookログインによってワンクリックでページを作成できます。お持ちでない方はメールアドレスからご登録ください',
    },
    {
      question: 'チームページはどうやって作れますか？',
      answer: (
        <div>
          現在はチーム作成機能を一般開放しておりません。弊社にて厳選したチームのみを作成させていただいております。チーム作成のお問い合わせはお手数ですが
          <a href="mailto:contact@squard.jp" className={styles.link}>
            contact@squard.jp
          </a>
          までご連絡ください。
        </div>
      ),
    },
    {
      question: 'CLASSやSTATUSについてもっと詳しく知りたいです。',
      answer: (
        <div>
          <Link className={styles.link} to="/about">
            Aboutページ
          </Link>
          にて詳しく解説しております。
        </div>
      ),
    },
    {
      question: 'Squardのチームに加わってみたいです。',
      answer: (
        <div>
          <Link className={styles.link} to="/squard/join">
            こちら
          </Link>
          から参加できます。ご質問は
          <a href="mailto:contact@squard.jp" className={styles.link}>
            contact@squard.jp
          </a>
          までご連絡ください。
        </div>
      ),
    },
  ]

  return (
    <Suspense fallback={<></>}>
      <div className={styles.pageWrapper}>
        <PageHeader>
          <TextDisplay>FAQ</TextDisplay>
        </PageHeader>
        <GroupFAQ>
          {faqs.map((el, index) => (
            <FAQItem key={index} num={index + 1} {...el} />
          ))}
        </GroupFAQ>
      </div>
      <DefaultFooter backgroundColor={Const.darkBlue} />
    </Suspense>
  )
}
export const FAQPage = withTheme(Page, 'dark')
export default withTheme(Page, 'dark')
