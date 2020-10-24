import * as React from 'react'
import innerText from 'react-innertext'
import styles from './TextDisplay.module.scss'
import CSS from 'csstype'

const REGEX = /^[a-zA-Z0-9!-/:-@¥[-`{-~'? "©]*$/
const onlyAlphanumeric = (text: string) => REGEX.test(text)
interface TextDisplayProps {
  className?: string
  alphanumericFont?: 'montserrat' | 'notosans' | 'livermore' | 'raleway' | 'raleway-v2.0' | 'lato'

  style?: CSS.Properties
}
export const TextDisplay: React.FC<TextDisplayProps> = ({
  children,
  className = '',
  alphanumericFont = 'montserrat',
  style,
}) => {
  return (
    <div
      className={`${className} ${
        onlyAlphanumeric(innerText(children)) ? styles.montserrat : styles.notosans
      }`}
      style={style ? { ...style } : {}}
    >
      {children}
    </div>
  )
}

export default TextDisplay
