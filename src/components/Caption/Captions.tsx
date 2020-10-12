import * as React from 'react'
import styles from './Caption.module.scss'
import { TextDisplay } from '../TextDisplay/TextDisplay'

interface CaptionProps {
  text: string
  color?: 'black' | 'white'
  fontWeight?: 'bold' | ''
  shadow?: true | false
}
export const LeftBorderCaption: React.FC<CaptionProps> = ({
  text,
  color = 'black',
  fontWeight = 'bold',
  shadow = false,
}) => {
  return (
    <div
      className={
        shadow ? styles.withLeftBorderAndShadow : styles.withLeftBorder
      }
      color={color}
      data-font-weight={fontWeight}
    >
      <TextDisplay className={shadow ? styles['textShadow'] : ''}>
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
  shadow?: true | false
}
export const TwoStagedCaption: React.FC<TwoStagedCaptionProps> = ({
  sub,
  main,
  style = 'large',
  subFontWeight = 'bold',
  shadow = false,
}) => {
  return (
    <>
      <LeftBorderCaption
        text={sub}
        fontWeight={subFontWeight}
        shadow={shadow}
      />
      <TextDisplay
        className={styles[style] + ' ' + (shadow ? styles['textShadow'] : '')}
      >
        {main}
      </TextDisplay>
    </>
  )
}
