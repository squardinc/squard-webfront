import * as React from 'react'
import { DefaultButton } from 'src/components/Button/DefaultButton'
import { TwoStagedCaption } from 'src/components/Caption/Captions'

import styles from './TeamAngels.module.scss'

interface TeamAngelsProps {
  angels: string[]
  numOfAngels: number
}
export const TeamAngels: React.FC<TeamAngelsProps> = ({ angels, numOfAngels }) => {
  return (
    <div className={styles.container}>
      <TwoStagedCaption sub='And we have' main={`${numOfAngels} Angels`} style='medium' />
      <div className={styles.members}>
        {angels.map(member =>
          <img src={member} className={styles.member} />
        )}
      </div>
      <DefaultButton text='Show All Angels' />
    </div >
  )
}