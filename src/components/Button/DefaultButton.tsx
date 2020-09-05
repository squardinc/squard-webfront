import * as React from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
  text: string
}
export const DefaultButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div className={styles.buttonContainer}>
      <div className={styles.button}>
        {text}
        </div>
    </div>
  )
}