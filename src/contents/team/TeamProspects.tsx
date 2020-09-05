import * as React from 'react'
import { LeftBorderCaption } from 'src/components/Caption/Captions'
import styles from './TeamProspects.module.scss'

interface TeamPropspectsProps {
  propspects: string[]
}
export const TeamProspects: React.FC<TeamPropspectsProps> = ({ propspects }) => {
  return (
    <div className={styles.container}>
      <LeftBorderCaption text='PROSPECTS' color='white' />
      <div className={styles.members}>
        {propspects.map(member =>
          <img src={member} className={styles.member} />
        )}
      </div>
    </div >
  )
}