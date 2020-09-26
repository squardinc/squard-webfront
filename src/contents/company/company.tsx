import * as React from 'react'
import styles from './company.module.scss'
import { TwoStagedCaption } from 'src/components/Caption/Captions'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { withTheme } from 'src/context/ThemeContext'

interface MemberProps {
  member: string
  name: string
}

const Member: React.FC<MemberProps> = ({ member, name }) => {
  return (
    <div className="relative mt-1 pr-1 pl-2">
      <img src={member} className={styles.member} />
      <div className={styles.memberCaption}>
        <TextDisplay className={styles.memberName}>{name}</TextDisplay>
      </div>
    </div>
  )
}

const Page: React.FC = () => {
  const members = [
    'images/raw.jpg',
    'images/raw.jpg',
    'images/raw.jpg',
    'images/raw.jpg',
  ]
  return (
    <div className={styles.container}>
      <div
        style={{
          background: `url("images/company.png") no-repeat center center `,
          backgroundSize: 'cover',
        }}
        className={styles.companyImageContainer}
      >
        <div className={styles.contactInfo}>
          <p className="pl-8 text-white text-opacity-75 font-hairline antialiased tracking-wider">
            Web : www.squard.co.jp
          </p>
          <p className="pl-8 text-white text-opacity-75 font-hairline antialiased tracking-wider">
            Mail : contact@squared.co.jp
          </p>
        </div>
        <div className={styles.companyInfo}>
          <div className="float-right text-right leading-8 pt-16">
            <p className="pr-6 text-white text-xl font-thin tracking-wider">
              <span className="line-through">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We
              </span>{' '}
              are the
            </p>
            <p className="pr-6 text-white text-4xl font-black tracking-wider">
              Squard, Inc<span className="text-red-600">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="pt-2 pb-8">
        <div className="pl-4 pr-4">
          <TwoStagedCaption
            style="medium"
            sub="About"
            main="Our Company"
            shadow={true}
          />
        </div>
        <div className="pl-3 pt-8">
          <div className={styles.members}>
            {members.map((member, index) => (
              <Member member={member} name={`舎弟${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
      <div className="pl-6 pr-6 pb-16">
        <div className={styles.labelHeaderBox}>
          <div className="text-white text-lg font-medium text-center tracking-wider pt-2">
            社名 / Corporate Name
          </div>
          <div className="text-black text-lg font-thin text-center tracking-wider pt-6">
            スクアード株式会社 / Squard, Inc.
          </div>
        </div>
      </div>
      <div className="pl-6 pr-6 pb-16">
        <div className={styles.labelHeaderBox}>
          <div className="text-white text-lg font-medium text-center tracking-wider pt-2">
            代表取締役 / CEO
          </div>
          <div className="text-black text-lg font-thin text-center tracking-wider pt-6">
            小池駿平 / Shunpei Koike
          </div>
        </div>
      </div>
      <div className="pl-6 pr-6 pb-16">
        <div className={styles.labelHeaderBox}>
          <div className="text-white text-lg font-medium text-center tracking-wider pt-2">
            設立 / Founded
          </div>
          <div className="text-black text-lg font-thin text-center tracking-wider pt-6">
            2020年8月 / August 2020
          </div>
        </div>
      </div>
      <div className="pl-6 pr-6 pb-16">
        <div className={styles.labelHeaderBox}>
          <div className="text-white text-lg font-medium text-center tracking-wider pt-2">
            資本金 / Capital
          </div>
          <div className="text-black text-lg font-thin text-center tracking-wider pt-6">
            10,000,000円 / 10,000,000 yen
          </div>
        </div>
      </div>
      <div className="pl-6 pr-6 pb-24">
        <div className={styles.labelHeaderBox}>
          <div className="text-white text-lg font-medium text-center tracking-wider pt-2">
            所在地 / Address
          </div>
          <div className="text-black text-sm font-thin text-center tracking-wider pt-6">
            <p>〒135-0064 東京都江東区青海2-7-4 the SOHO 1310 </p>
            <p>the SOHO 1310, 2-7-4, Aomi, Koto-ku, Tokyo</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const CompanyPage = withTheme(Page, 'light')
