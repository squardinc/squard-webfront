import { faLink, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { ITeamMember } from 'src/models/team'
import styles from './TeamVIP.module.scss'

const trim = (text: string, length: number) => `${text.substring(0, length)}...`
interface VIPProps {
  vip: ITeamMember
}
const VIP: React.FC<VIPProps> = ({ vip }) => {
  return (
    <div className={styles.vipContainer}>
      <div className="pl-0 pr-0" style={{ width: '300px', height: '520px' }}>
        <img src={vip.image} className={styles.vip} />
        <div className={styles.vipCaptionContainer}>
          <div className={styles.vipCaption}>
            <div className={styles.vipCaptionTop}>
              <TextDisplay className={styles.vipName}>{name}</TextDisplay>
              <TextDisplay className={styles.vipIntroduction}>{vip.introduction}</TextDisplay>
            </div>
            <div className={styles.vipLinks}>
              <div className="bg-yellow text-black rounded-full h-12 w-12 flex items-center justify-center mr-2">
                <FontAwesomeIcon icon={faPaperPlane} size="1x" cursor="pointer" />
              </div>
              <div className="bg-yellow text-black rounded-full h-12 w-12 flex items-center justify-center mr-2">
                <FontAwesomeIcon icon={faLink} size="1x" cursor="pointer" />
              </div>
              <div className="bg-yellow text-black rounded-full h-12 w-40 flex items-center justify-center mr-2">
                <TextDisplay>
                  <span className="font-bold text-lg">Read More</span>
                </TextDisplay>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
interface TeamVIPProps {
  vips: ITeamMember[]
}
export const TeamVIP: React.FC<TeamVIPProps> = ({ vips }) => {
  return (
    <div className={styles.container}>
      {/* <div className="pl-2 pr-2">
        <LeftBorderCaption text="V.I.P." />
      </div>
      <div className="flex overflow-x-auto overflow-y-hidden pl-6 pr-6">
        {vips.map((vip, index) => (
          <VIP
            key={index}
            vip={vip}
            name="Shunpei Koike"
            introduction={trim(
              '起業家。2017年にブルームバーグ社の「世界に一番影響力を与えた人物50人」のうちの1人に選ばれ、2018年にはフォーブス誌の「30アンダー30」に選ばれる。',
              50
            )}
          />
        ))}
      </div> */}
    </div>
  )
}

export default TeamVIP
