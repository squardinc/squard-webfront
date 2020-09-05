import * as React from 'react'
import styles from './Caption.module.scss'

interface CaptionProps {
  text: string
  color?: 'black' | 'white'
}
export const LeftBorderCaption: React.FC<CaptionProps> = ({ text, color = 'black' }) => {
  return (
    <div className={styles.withLeftBorder} color={color}>
      {text}
    </div>
  )
}

interface TwoStagedCaptionProps {
  sub: string
  main: string
  style?: 'large' | 'medium'
}
export const TwoStagedCaption: React.FC<TwoStagedCaptionProps> = ({ sub, main, style='large' }) => {
  return (
    <>
      <LeftBorderCaption text={sub} />
      <div className={styles[style]}>
        {main}
      </div>
    </>
  )
}