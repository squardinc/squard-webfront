import * as React from 'react'
import { TextDisplay } from '../TextDisplay/TextDisplay'
import styles from './Caption.module.scss'

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
      className={shadow ? styles.withLeftBorderAndShadow : styles.withLeftBorder}
      color={color}
      data-font-weight={fontWeight}
    >
      <TextDisplay className={shadow ? styles['textShadow'] : ''}>{text}</TextDisplay>
    </div>
  )
}

interface TwoStagedCaptionProps {
  sub: string
  main: string
  style?: 'large' | 'medium' | 'mediumItalic'
  subFontWeight?: 'bold' | ''
  shadow?: true | false
  color?: 'black' | 'white'
}
export const TwoStagedCaption: React.FC<TwoStagedCaptionProps> = ({
  sub,
  main,
  style = 'large',
  subFontWeight = 'bold',
  shadow = false,
  color = 'black',
}) => {
  return (
    <>
      <LeftBorderCaption text={sub} fontWeight={subFontWeight} shadow={shadow} color={color} />
      <TextDisplay
        className={
          styles[style] +
          ' ' +
          (shadow ? styles['textShadow'] : '' + (color === 'white' ? 'text-white' : ''))
        }
      >
        {main}
      </TextDisplay>
    </>
  )
}
