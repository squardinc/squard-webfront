import * as React from 'react'
import styles from './HashTag.module.scss'
import { TextDisplay } from '../TextDisplay/TextDisplay'

interface HashTagProps {
  text: string
}
export const HashTag: React.FC<HashTagProps> = ({ text }) => {
  return (
    <div className={styles.container}>
      <TextDisplay>
        {`#${text}`}
      </TextDisplay>
    </div>
  )
}