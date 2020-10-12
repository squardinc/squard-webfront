import * as React from 'react'
import innerText from 'react-innertext'
import styles from './TextDisplay.module.scss'

const REGEX = /^[a-zA-Z0-9!-/:-@¥[-`{-~'? "©]*$/
const onlyAlphanumeric = (text: string) => REGEX.test(text)
interface TextDisplayProps {
  className?: string
  alphanumericFont?:
    | 'montserrat'
    | 'notosans'
    | 'livermore'
    | 'raleway'
    | 'raleway-v2.0'
    | 'lato'
}
export const TextDisplay: React.FC<TextDisplayProps> = ({
  children,
  className = '',
  alphanumericFont = 'montserrat',
}) => {
  return (
    <div
      className={`${className} ${
        onlyAlphanumeric(innerText(children)) ? styles[alphanumericFont] : ''
      }`}
    >
      {children}
    </div>
  )
}
