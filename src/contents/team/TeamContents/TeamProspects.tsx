import * as React from 'react'
import { LeftBorderCaption } from 'src/components/Caption/Captions'
import styles from './TeamProspects.module.scss'
import { DefaultButton } from 'src/components/Button/DefaultButton'

interface ProspectProps {
  prospect: string
}
const Prospect: React.FC<ProspectProps> = ({ prospect }) => {
  return (
    <div className={styles.prospectContainer}>
      <div className="pl-1 pr-2 w-40">
        <img src={prospect} className={styles.prospect} />
      </div>
    </div>
  )
}

interface TeamPropspectsProps {
  propspects: string[]
}
export const TeamProspects: React.FC<TeamPropspectsProps> = ({
  propspects,
}) => {
  return (
    <div className={styles.container}>
      <LeftBorderCaption text="PROSPECTS" color="white" />
      <div className="flex overflow-x-auto">
        {propspects.map((prospect, index) => (
          <Prospect key={index} prospect={prospect} />
        ))}
      </div>
      <div className="py-5">
        <DefaultButton size="small" text="Prospectとして参加する" />
      </div>
    </div>
  )
}
