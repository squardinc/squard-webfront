import * as React from 'react'
import { DefaultButton } from 'src/components/Button/DefaultButton'
import { TwoStagedCaption } from 'src/components/Caption/Captions'

import styles from './TeamAngels.module.scss'

interface AngelProps {
  angel: string
}
const Angel: React.FC<AngelProps> = ({ angel }) => {
  return (
    <div className={styles.angelContainer}>
      <img src={angel} className={styles.angel} />
    </div>
  )
}

interface TeamAngelsProps {
  angels: string[]
  numOfAngels: number
}
export const TeamAngels: React.FC<TeamAngelsProps> = ({
  angels,
  numOfAngels,
}) => {

  return (
    <div className={styles.container}>
      <div className="pl-2 pr-2">
        <TwoStagedCaption
          sub="And we have"
          main={`${numOfAngels} Angels`}
          style="medium"
          subFontWeight=''
        />
      </div>
      <div className="pt-6">
        <div className={styles.angels}>
          {angels.map((angel, index) => (
            <Angel key={index} angel={angel} />
          ))}
        </div>
      </div>
      <div className="pt-5">
        <DefaultButton size="small" text="Show All Angels" />
      </div>
    </div>
  )
}
