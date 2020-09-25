import * as React from 'react'

import styles from './Description.module.scss'

export const Description: React.FC = (props) => {
  return <p className={styles.wrapper}>{props.children}</p>
}
