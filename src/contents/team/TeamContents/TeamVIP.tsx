import * as React from 'react'
import { LeftBorderCaption } from 'src/components/Caption/Captions'
import { faPaperPlane, faLink } from '@fortawesome/free-solid-svg-icons'
import { DefaultButton, IconButton } from 'src/components/Button/DefaultButton'
import styles from './TeamVIP.module.scss'

const trim = (text: string, length: number) => `${text.substring(0, length)}...`
interface VIPProps {
  vip: string
  name: string
  introduction: string
}
const VIP: React.FC<VIPProps> = ({ vip, name, introduction }) => {
  return (
    <div className={styles.vipContainer} >
      <img src={vip} className={styles.vip} />
      <div className={styles.vipCaptionContainer}>
        <div className={styles.vipCaption}>
          <div className={styles.vipCaptionTop} >
            <div className={styles.vipName}>{name}</div>
            <div className={styles.vipIntroduction}>{introduction}</div>
          </div>
          <div className={styles.vipLinks}>
            <IconButton icon={faPaperPlane} />
            <IconButton icon={faLink} />
            <DefaultButton text='Read More' size='small' />
          </div>
        </div>
      </div>
    </div>
  )

}
interface TeamVIPProps {
  vips: string[]
}
export const TeamVIP: React.FC<TeamVIPProps> = ({ vips }) => {
  return (
    <div className={styles.container}>
      <LeftBorderCaption text='V.I.P.' />
      <div className={styles.vips}>
        {vips.map(vip =>
          <VIP
            vip={vip}
            name='Shunpei Koike'
            introduction={
              trim(
                '起業家。2017年にブルームバーグ社の「世界に一番影響力を与えた人物50人」のうちの1人に選ばれ、2018年にはフォーブス誌の「30アンダー30」に選ばれる。'
                , 50
              )}
          />)}
      </div>
    </div >
  )
}