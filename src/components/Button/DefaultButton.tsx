import * as React from 'react'
import { FontAwesomeIconProps, FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Button.module.scss'
import { TextDisplay } from '../TextDisplay/TextDisplay'

interface ButtonProps {
  text: string
  onClick: VoidFunction
  size?: 'medium' | 'small'
}
export const DefaultButton: React.FC<ButtonProps> = ({ text, onClick, size = 'medium' }) => {
  return (
    <div className={`${styles.buttonContainer} cursor-pointer`}
      onClick={onClick}
      onKeyPress={onClick}
      tabIndex={0}
      role='button'
    >
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
  text: string
  onClick?: VoidFunction
  className?: string
}
export const RoundButton: React.FC<RoundButtonProps> = ({ text, onClick = () => { }, className = '' }) => {
  return (
    <button onClick={onClick} className='w-full'>
      <TextDisplay className={`flex justify-center items-center h-10 w-full my-2 px-4 rounded-full text-sm ${className}`}>
        {text}
      </TextDisplay>
    </button>
  )
}