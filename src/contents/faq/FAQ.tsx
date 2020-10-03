import * as React from 'react'

import styles from './FAQ.module.scss'

import { Heading1 } from 'src/components/Heading1/Heading1'
import { FAQItem } from 'src/components/FAQItem/FAQItem'
import { withTheme } from 'src/context/ThemeContext'
import { DefaultFooter } from 'src/components/Footer/ContentFooter'
import { Link } from 'gatsby'

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
    <>
      <div className={styles.pageWrapper}>
        <Heading1>FAQ</Heading1>
        <div>
          {faqs.map((el, index) => (
            <FAQItem key={index} num={index + 1} {...el} />
          ))}
        </div>
      </div>
      <DefaultFooter />
    </>
  )
}
export const FAQPage = withTheme(Page, 'dark')
