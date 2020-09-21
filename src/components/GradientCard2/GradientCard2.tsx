import * as React from 'react'

import styles from './GradientCard2.module.scss'

export const GradientCard2: React.FC = (props) => {
  return <div className={styles.wrapper}>{props.children}</div>
}
