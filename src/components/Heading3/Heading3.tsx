import * as React from 'react'

import styles from './Heading3.module.scss'

export const Heading3: React.FC = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>{props.children}</div>
    </div>
  )
}
