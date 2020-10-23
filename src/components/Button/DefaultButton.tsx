import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import CSS from 'csstype'
import * as React from 'react'
import styled from 'styled-components'
import * as Const from '../../styles/const'
import { TextDisplay } from '../TextDisplay/TextDisplay'
import styles from './Button.module.scss'

interface DefaultButtonProps {
  size?: 'larger' | 'medium' | 'small' | string
}

const ButtonWrapper = styled.button<DefaultButtonProps>`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  border: 1px solid ${Const.textYellow};
  background-color: ${Const.bgYellow};
  color: ${Const.textDark};
  font-weight: ${Const.fontWeight.simbold};
  line-height: 1.67;
  font-size: ${(props) => {
    let size = '18px'
    // (props.size == 'small' || props.size == 'medium') && (size = '18px')

    return size
  }};
  text-align: center;
  padding: ${(props) => {
    let padding = '12px 40px'
    props.size === 'icon' && (padding = '3px')
    props.size === 'medium' && (padding = '12px 40px')
    props.size === 'small' && (padding = '4px 30px')
    props.size === 'larger' && (padding = '8px 20px')
    return padding
  }};
  width: ${(props) => {
    let width = 'auto'
    props.size === 'larger' && (width = '100%')
    return width
  }};
  white-space: nowrap;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`

interface ButtonProps extends DefaultButtonProps {
  text: string
  onClick: VoidFunction
}
export const DefaultButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  size = 'medium',
}) => {
  return (
    <div
      className={`${styles.buttonContainer} cursor-pointer`}
      onClick={onClick}
      onKeyPress={onClick}
      tabIndex={0}
      role="button"
    >
      <ButtonWrapper size={size}>
        <TextDisplay>{text}</TextDisplay>
      </ButtonWrapper>
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
  style?: CSS.Properties
}
export const RoundButton: React.FC<RoundButtonProps> = ({
  text,
  type = 'button',
  disabled = false,
  onClick = () => {},
  className = '',
  style,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full ${disabled && 'cursor-not-allowed'}`}
      disabled={disabled}
      style={style ? style : {}}
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
