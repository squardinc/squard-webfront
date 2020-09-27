import * as React from 'react'

import styles from './FAQItem.module.scss'

import Quote from 'src/assets/faq/quote.svg'

interface FAQItemProps {
  num: number
  question: string
  answer: string | JSX.Element
}

export const FAQItem: React.FC<FAQItemProps> = ({ num, question, answer }) => {
  return (
    <div className={styles.faq}>
      <div className={styles.questionWrapper}>
        <div className={styles.questionContent}>
          <div className={styles.questionTitle}>Question. {num}</div>
          <div className={styles.questionText}>{question}</div>
          <div className={styles.questionQuote}>
            <Quote />
          </div>
        </div>
      </div>
      <div className={styles.answerWrapper}>
        <div className={styles.answerTitle}>Answer. {num}</div>
        <div className={styles.answerText}>{answer}</div>
      </div>
    </div>
  )
}
