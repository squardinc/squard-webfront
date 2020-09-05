import * as React from 'react'
import { LeftBorderCaption } from 'src/components/Caption/Captions'
import styles from './TeamProspects.module.scss'

interface ProspectProps {
  prospect: string
}
const Prospect: React.FC<ProspectProps> = ({ prospect }) => {
  return (
    <div className={styles.prospectContainer} >
      <img src={prospect} className={styles.prospect} />
    </div>
  )
}

interface TeamPropspectsProps {
  propspects: string[]
}
export const TeamProspects: React.FC<TeamPropspectsProps> = ({ propspects }) => {
  return (
    <div className={styles.container}>
      <LeftBorderCaption text='PROSPECTS' color='white' />
      <div className={styles.prospects}>
        {propspects.map(prospect =>
          <Prospect prospect={prospect} />
        )}
      </div>
    </div >
  )
}