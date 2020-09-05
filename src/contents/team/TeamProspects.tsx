import * as React from 'react'
import { LeftBorderCaption } from 'src/components/Caption/Captions'
import styles from './TeamProspects.module.scss'

const CORE_MEMBERS = [
  'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/squard%2Fshunpei.png?alt=media&token=3e8b258d-fb7d-4437-ac86-298573471d81',
  'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/squard%2Fmatsui.png?alt=media&token=6b84927f-4069-40ac-8a90-09099a7f71ab',
  'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/squard%2Fkimura.png?alt=media&token=ce7a24bd-b92d-4c31-a803-90263e76d52a',
  'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/squard%2Fshoya.png?alt=media&token=50e1a69b-2f2c-4998-bba9-8fc3deb7d06d',
]

export const TeamProspects = () => {
  return (
    <div className={styles.container}>
      <LeftBorderCaption text='PROSPECTS' color='white' />
      <div className={styles.members}>
        {CORE_MEMBERS.map(member =>
          <img src={member} className={styles.member} />
        )}
      </div>
    </div >
  )
}