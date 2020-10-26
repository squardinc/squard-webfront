import { Link, navigate } from 'gatsby'
import * as React from 'react'
import { DefaultButton } from 'src/components/Button/DefaultButton'
import { TwoStagedCaption } from 'src/components/Caption/Captions'
import ComingSoon from 'src/images/ComingSoon.jpg'
import NoImage from 'src/images/NoImage.jpg'
import { ITeamMember } from 'src/models/team'
import { PersonImage } from './PersonImage'
import styles from './TeamAngels.module.scss'

const ComingSoonAngel: React.FC = () => {
  return (
    <div className={styles.angelContainer}>
      <PersonImage src={ComingSoon} className={styles.angel} />
    </div>
  )
}
interface AngelProps {
  angel: ITeamMember
}
const Angel: React.FC<AngelProps> = ({ angel }) => {
  return (
    <Link to={`/${angel.user.pageId}`}>
      <div className={styles.angelContainer}>
        <PersonImage
          src={angel?.image || angel?.user.icon || NoImage}
          className={styles.angel}
        />
      </div>
    </Link>
  )
}

interface TeamAngelsProps {
  angels: ITeamMember[]
  numOfAngels: number
}
export const TeamAngels: React.FC<TeamAngelsProps> = ({ angels = [], numOfAngels }) => {
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
        <ComingSoonAngel />
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
