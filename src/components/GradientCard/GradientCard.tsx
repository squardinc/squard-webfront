import * as React from 'react'

import styles from './GradientCard.module.scss'

export const GradientCard: React.FC = (props) => {
  return <div className={styles.wrapper}>{props.children}</div>
}
