import * as React from 'react'
import innerText from 'react-innertext'
import styles from './TextDisplay.module.scss'

const REGEX = /^[a-zA-Z0-9!-/:-@¥[-`{-~]*$/
const onlyAlphanumeric = (text: string) => REGEX.test(text)
interface TextDisplayProps {
  className?: string
}
export const TextDisplay: React.FC<TextDisplayProps> = ({ children, className = '' }) => {
  return (
    <div className={`${className} ${onlyAlphanumeric(innerText(children)) ? styles.alphanumeric : ''}`} >
      {children}
    </div>
  )
}
