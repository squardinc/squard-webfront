import { navigate } from 'gatsby'
import * as React from 'react'
import { DefaultButton } from 'src/components/Button/DefaultButton'
import { TwoStagedCaption } from 'src/components/Caption/Captions'
import Top from 'src/images/temp/team/top.jpg'
import { ITeamMember } from 'src/models/team'
import styles from './TeamAngels.module.scss'

interface AngelProps {
  angel: ITeamMember
}
const Angel: React.FC<AngelProps> = ({ angel }) => {
  return (
    <div className={styles.angelContainer}>
      <img
        src={angel?.image ? encodeURI(angel.image) : Top}
        className={styles.angel}
      />
    </div>
  )
}

interface TeamAngelsProps {
  angels: ITeamMember[]
  numOfAngels: number
}
export const TeamAngels: React.FC<TeamAngelsProps> = ({
  angels = [],
  numOfAngels,
}) => {
  return (
    <div className={styles.container}>
      <TwoStagedCaption
        sub="And we have"
        main={`${numOfAngels} Angels`}
        style="medium"
        subFontWeight=""
      />
      {angels.length ? (
        <div className="pt-6">
          <div className={styles.angels}>
            {angels.map((angel) => (
              <Angel key={angel.teamMemberId} angel={angel} />
            ))}
          </div>
        </div>
      ) : (
        ''
      )}
      <div className="pt-5">
        <DefaultButton
          size="small"
          text="Angelsとして参加する"
          onClick={() => {
            navigate('join#ANGELS')
          }}
        />
      </div>
    </div>
  )
}

export default TeamAngels
