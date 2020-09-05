import * as React from 'react'
import { FontAwesomeIconProps, FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Button.module.scss'

interface ButtonProps {
  text: string
  size?: 'medium' | 'small'
}
export const DefaultButton: React.FC<ButtonProps> = ({ text, size = 'medium' }) => {
  return (
    <div className={styles.buttonContainer}>
      <div className={styles.button} data-size={size}>
        {text}
      </div>
    </div>
  )
}
type FontAwesomeIconButtonProps = FontAwesomeIconProps & {
}
export const IconButton: React.FC<FontAwesomeIconButtonProps> = ({ ...props }) => {
  return (
    <div className={styles.buttonContainer}>
      <FontAwesomeIcon {...props} className={styles.button} data-size='icon' />
    </div>
  )
}