import * as React from 'react'

import styles from './Heading1.module.scss'

export const Heading1: React.FC = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>{props.children}</div>
    </div>
  )
}

export default Heading1
