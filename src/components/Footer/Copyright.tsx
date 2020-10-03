import * as React from 'react'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import styles from './Footer.module.scss'

export const Copyright = () => {
  return (
    <TextDisplay className={`${styles.copyright} background-theme-footer text-theme-text-sub`} >
      Copyright ©2020 Squard, Inc.All Rights Reseverd.
    </TextDisplay>
  )
}
