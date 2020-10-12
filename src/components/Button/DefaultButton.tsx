import * as React from 'react'
import {
  FontAwesomeIconProps,
  FontAwesomeIcon,
} from '@fortawesome/react-fontawesome'
import styles from './Button.module.scss'
import { TextDisplay } from '../TextDisplay/TextDisplay'
import CSS from 'csstype';

interface ButtonProps {
  text: string
  onClick: VoidFunction
  size?: 'medium' | 'small' | string
  style?:CSS.Properties
}
export const DefaultButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  size = 'medium',
  style
}) => {

  return (
    <div
      className={`${styles.buttonContainer} cursor-pointer`}
      onClick={onClick}
      onKeyPress={onClick}
      tabIndex={0}
      role="button"
    >
      <div className={styles.button} data-size={size} style={style ? style : {}}>
        <TextDisplay>{text}</TextDisplay>
      </div>
    </div>
  )
}
type FontAwesomeIconButtonProps = FontAwesomeIconProps & {}
export const IconButton: React.FC<FontAwesomeIconButtonProps> = ({
  ...props
}) => {
  return (
    <div className={styles.buttonContainer}>
      <FontAwesomeIcon {...props} className={styles.button} data-size="icon" />
    </div>
  )
}
interface RoundButtonProps {
  text: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit'
}
export const RoundButton: React.FC<RoundButtonProps> = ({
  text,
  type = 'button',
  disabled = false,
  onClick = () => {},
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full"
      disabled={disabled}
    >
      <TextDisplay
        className={`flex justify-center items-center h-10 w-full my-1 rounded-full text-sm ${className}`}
      >
        {text}
      </TextDisplay>
    </button>
  )
}

interface RoundFileUploadButtonProps {
  text: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  disabled?: boolean
}
export const RoundFileUploadButton: React.FC<RoundFileUploadButtonProps> = ({
  text,
  onChange,
  className = '',
  disabled = false,
}) => {
  return (
    <label className="w-full">
      <TextDisplay
        className={`flex justify-center items-center cursor-pointer h-10 w-full my-1 bg-white text-gray-900 rounded-full text-sm ${className}`}
      >
        {text}
      </TextDisplay>
      <input type="file" className="hidden" onChange={onChange} />
    </label>
  )
}
