import * as React from 'react'

import styles from './Heading2.module.scss'

interface Heading2Props {
  main: string
  sub: string
  size?: string
}

export const Heading2: React.FC<Heading2Props> = (props) => {
  const size = props.size ? { fontSize: props.size } : {}
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <div className={styles.main} style={size}>
          {props.main}
        </div>
        <div className={styles.sub}>（{props.sub}）</div>
      </div>
    </div>
  )
}
