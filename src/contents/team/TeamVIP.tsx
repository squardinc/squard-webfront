import * as React from 'react'
import { LeftBorderCaption } from 'src/components/Caption/Captions'
import styles from './TeamVIP.module.scss'

interface TeamVIPProps {
  vips: string[]
}
export const TeamVIP: React.FC<TeamVIPProps> = ({ vips }) => {
  return (
    <div className={styles.container}>
      <LeftBorderCaption text='V.I.P.' />
      <div className={styles.members}>
        {vips.map(member =>
          <img src={member} className={styles.member} />
        )}
      </div>
    </div >
  )
}