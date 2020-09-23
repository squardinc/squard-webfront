import * as React from 'react'
import { FontAwesomeIconProps, FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Button.module.scss'
import { TextDisplay } from '../TextDisplay/TextDisplay'

interface ButtonProps {
  text: string
  size?: 'medium' | 'small'
}
export const DefaultButton: React.FC<ButtonProps> = ({ text, size = 'medium' }) => {
  return (
    <div className={styles.buttonContainer}>
      <div className={styles.button} data-size={size}>
        <TextDisplay>
          {text}
        </TextDisplay>
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
interface RoundButtonProps {
  textColor: string
  bgColor: string
  text: string
}
export const RoundButton: React.FC<RoundButtonProps> = ({ textColor, bgColor, text }) => {
  return (
    <TextDisplay className={`flex justify-center items-center bg-gray-200 h-10 w-full my-2 px-4 rounded-full text-sm ${textColor} ${bgColor}`}>
      {text}
    </TextDisplay>
  )
}