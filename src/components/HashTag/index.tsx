import * as React from 'react'
import styles from './HashTag.module.scss'

interface HashTagProps {
  text: string
}
export const HashTag:React.FC<HashTagProps> = ({ text }) => {
  return (
    <div className={styles.container}>
      #{text}
    </div>
  )
}