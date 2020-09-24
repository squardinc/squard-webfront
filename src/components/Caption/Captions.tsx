import * as React from 'react'
import styles from './Caption.module.scss'
import { TextDisplay } from '../TextDisplay/TextDisplay'

interface CaptionProps {
  text: string
  color?: 'black' | 'white'
  fontWeight?: 'bold' | ''
}
export const LeftBorderCaption: React.FC<CaptionProps> = ({ text, color = 'black', fontWeight = 'bold' }) => {
  return (
    <div className={styles.withLeftBorder} color={color} data-font-weight={fontWeight}>
      <TextDisplay>
        {text}
      </TextDisplay>
    </div>
  )
}

interface TwoStagedCaptionProps {
  sub: string
  main: string
  style?: 'large' | 'medium'
  subFontWeight?: 'bold' | ''
}
export const TwoStagedCaption: React.FC<TwoStagedCaptionProps> = ({ sub, main, style = 'large', subFontWeight = 'bold' }) => {
  return (
    <>
      <LeftBorderCaption text={sub} fontWeight={subFontWeight} />
      <TextDisplay className={styles[style]}>
        {main}
      </TextDisplay>
    </>
  )
}