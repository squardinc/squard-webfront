import * as React from 'react'

import styles from './FAQ.module.scss'

import { Heading1 } from 'src/components/Heading1/Heading1'
import { FAQItem } from 'src/components/FAQItem/FAQItem'

export const FAQ: React.FC = (props) => {
  const faqs = [
    {
      question: '新しくチームを作りたい場合はどうすればいいですか？',
      answer:
        '新規チーム作成は○○ページ右上の△△ボタンを押していただき、××から行うことができます。',
    },
    {
      question: '新しくチームを作りたい場合はどうすればいいですか？',
      answer:
        '新規チーム作成は○○ページ右上の△△ボタンを押していただき、××から行うことができます。',
    },
    {
      question: '新しくチームを作りたい場合はどうすればいいですか？',
      answer:
        '新規チーム作成は○○ページ右上の△△ボタンを押していただき、××から行うことができます。',
    },
  ]

  return (
    <div className={styles.pageWrapper}>
      <Heading1>FAQ</Heading1>
      <div>
        {faqs.map((el, index) => (
          <FAQItem key={index} num={index + 1} {...el} />
        ))}
      </div>
    </div>
  )
}
