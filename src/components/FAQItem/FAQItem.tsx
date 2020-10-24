import * as React from 'react'

import styles from './FAQItem.module.scss'

import Quote from 'src/assets/faq/quote.svg'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'

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
          <div className={styles.questionTitle}>
            <TextDisplay>Question. {num}</TextDisplay>
          </div>
          <div className={styles.questionText}>
            <TextDisplay>{question}</TextDisplay>
          </div>
          <div className={styles.questionQuote}>
            <Quote />
          </div>
        </div>
      </div>
      <div className={styles.answerWrapper}>
        <div className={styles.answerTitle}>
          <TextDisplay>Answer. {num}</TextDisplay>
        </div>
        <div className={styles.answerText}>
          <TextDisplay>{answer}</TextDisplay>
        </div>
      </div>
    </div>
  )
}

export default FAQItem
