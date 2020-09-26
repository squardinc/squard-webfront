import * as React from 'react'
import styles from './company.module.scss'
import { TwoStagedCaption } from 'src/components/Caption/Captions'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'

interface MemberProps {
  member: { imageUrl: string; color: string; title: string }
}

const Member: React.FC<MemberProps> = ({ member }) => {
  function getImageTheme(key: string) {
    let style = styles.yellowFilter
    if (key === 'red') {
      style = styles.redFilter
    } else if (key === 'blue') {
      style = styles.blueFilter
    } else if (key === 'green') {
      style = styles.greenFilter
    } else {
      style = styles.yellowFilter
    }
    return style
  }

  return (
    <div className="relative mt-1 pr-1 pl-2">
      <img
        src={member.imageUrl}
        className={styles.member + ' ' + getImageTheme(member.color)}
      />
      <div className={styles.memberCaption}>
        <TextDisplay className={styles.memberName}>{member.title}</TextDisplay>
      </div>
    </div>
  )
}

export const CompanyPage: React.FC = () => {
  const members = [
    { imageUrl: 'images/raw.jpg', color: 'red', title: 'CEO / 小池駿平' },
    { imageUrl: 'images/raw.jpg', color: 'blue', title: 'COO / 松井大樹' },
    { imageUrl: 'images/raw.jpg', color: 'green', title: 'CFO / 木村明寛' },
    { imageUrl: 'images/raw.jpg', color: 'yello', title: 'CTO / 柳澤翔矢' },
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
          <p className="pl-10 text-white text-sm text-opacity-75 tracking-widest">
            Web : www.squard.co.jp
          </p>
          <p className="pt-2 pl-10 text-white text-sm text-opacity-75 tracking-widest">
            Mail : contact@squared.co.jp
          </p>
        </div>
        <div className={styles.companyInfo}>
          <div className="float-right text-right leading-8 pt-24">
            <p className="pt-4 pr-6 text-white text-xl font-light tracking-wider">
              <span className="line-through">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We
              </span>{' '}
              are the
            </p>
            <p className="pr-6 text-white text-4xl font-bold tracking-wider">
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
              <Member key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
      <div className="pb-16">
        <div className={styles.labelHeaderBox}>
          <TextDisplay className="text-white text-lg font-medium text-center tracking-wider pt-2">
            社名 / Corporate Name
          </TextDisplay>
          <TextDisplay className="text-black text-lg font-thin text-center tracking-wider pt-6">
            スクアード株式会社 / Squard, Inc.
          </TextDisplay>
        </div>
      </div>
      <div className="pb-16">
        <div className={styles.labelHeaderBox}>
          <TextDisplay className="text-white text-lg font-medium text-center tracking-wider pt-2">
            代表取締役 / CEO
          </TextDisplay>
          <TextDisplay className="text-black text-lg font-thin text-center tracking-wider pt-6">
            小池駿平 / Shunpei Koike
          </TextDisplay>
        </div>
      </div>
      <div className="pb-16">
        <div className={styles.labelHeaderBox}>
          <TextDisplay className="text-white text-lg font-medium text-center tracking-wider pt-2">
            設立 / Founded
          </TextDisplay>
          <TextDisplay className="text-black text-lg font-thin text-center tracking-wider pt-6">
            2020年8月 / August 2020
          </TextDisplay>
        </div>
      </div>
      <div className="pb-16">
        <div className={styles.labelHeaderBox}>
          <TextDisplay className="text-white text-lg font-medium text-center tracking-wider pt-2">
            資本金 / Capital
          </TextDisplay>
          <TextDisplay className="text-black text-lg font-thin text-center tracking-wider pt-6">
            10,000,000円 / 10,000,000 yen
          </TextDisplay>
        </div>
      </div>
      <div className="pb-24">
        <div className={styles.labelHeaderBox}>
          <TextDisplay className="text-white text-lg font-medium text-center tracking-wider pt-2">
            所在地 / Address
          </TextDisplay>
          <TextDisplay className="text-black text-sm font-thin text-center tracking-wider pt-6">
            <p>〒135-0064 東京都江東区青海2-7-4 the SOHO 1310 </p>
            <p>the SOHO 1310, 2-7-4, Aomi, Koto-ku, Tokyo</p>
          </TextDisplay>
        </div>
      </div>
    </div>
  )
}
