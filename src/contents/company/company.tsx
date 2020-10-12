import * as React from 'react'
import styled from 'styled-components'
import styles from './company.module.scss'
import { TwoStagedCaption } from 'src/components/Caption/Captions'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { withTheme } from 'src/context/ThemeContext'
import { DefaultFooter } from 'src/components/Footer/ContentFooter'
import CompanyImage from 'src/images/temp/company/company.jpg'
import CEO from 'src/images/temp/company/ceo.jpg'
import COO from 'src/images/temp/company/coo.jpg'
import CFO from 'src/images/temp/company/cfo.jpg'
import CTO from 'src/images/temp/company/cto.jpg'
import * as Const from '../../styles/const'

const CompanyName = styled.div`
  font-family: ${Const.fontFamily.monster};
  font-weight: ${Const.fontWeight.bold};
  font-size: 38px;
  display: flex;
  flex-wrap: nowrap;
`
const CompanyInfor = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`
const PersonalPosition = styled.div`
  font-family: ${Const.fontFamily.sans};
  font-weight: ${Const.fontWeight.medium};
  font-size: ${Const.fontSize.sm};
  letter-spacing: 0;
`

const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`
const LabelWrapper = styled.div`
  font-family: ${Const.fontFamily.sans};
  font-weight: ${Const.fontWeight.medium};
  font-size: ${Const.fontSize.base};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0;
  height: 41px;
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  background-image: linear-gradient(to right, #27d8df, #3b4491);
  box-shadow: 5px 7px lightgrey;
`
const ValueWrapper = styled.div`
  color: #051026;
  font-family: ${Const.fontFamily.sans};
  font-weight: ${Const.fontWeight.light};
  font-size: ${Const.fontSize.lg};
  letter-spacing: 0;
  margin-top: 15px;
  text-align: center;
`

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
    <div className={`relative mt-1 px-1 ${styles.memberContainer}`}>
      <img
        src={member.imageUrl}
        className={styles.member + ' ' + getImageTheme(member.color)}
      />
      <div className={styles.memberCaption}>
        <PersonalPosition>{member.title}</PersonalPosition>
      </div>
    </div>
  )
}

const Page: React.FC = () => {
  const members = [
    { imageUrl: CEO, color: 'red', title: 'CEO / 小池駿平' },
    { imageUrl: COO, color: 'blue', title: 'COO / 松井大樹' },
    { imageUrl: CFO, color: 'green', title: 'CFO / 木村明寛' },
    { imageUrl: CTO, color: 'yello', title: 'CTO / 柳澤翔矢' },
  ]

  return (
    <div className={styles.container}>
      <div
        style={{
          background: `url(${CompanyImage}) no-repeat center`,
          backgroundSize: 'cover',
        }}
        className={styles.companyImageContainer}
      >
        <div className={styles.contactInfo}>
          <p className="pl-10 text-white text-sm text-opacity-75 tracking-widest">
            Web : <a href="https://www.squard.co.jp">www.squard.co.jp</a>
          </p>
          <p className="pt-2 pl-10 text-white text-sm text-opacity-75 tracking-widest">
            Mail :{' '}
            <a href="mailto:contact@squard.co.jp">contact@squard.co.jp</a>
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
              <CompanyName>
                Squard, Inc<span className="text-red-600">.</span>
              </CompanyName>
            </p>
          </div>
        </div>
      </div>
      <CompanyInfor>
        <div className="pt-2 pb-8">
          <TwoStagedCaption
            style="mediumItalic"
            sub="About"
            main="Our Company"
            shadow={true}
          />
          <div className="pt-8 flex justify-center">
            <div className={styles.members}>
              {members.map((member, index) => (
                <Member key={index} member={member} />
              ))}
            </div>
          </div>
        </div>

        <BlockWrapper style={{
          marginTop:'12px'
        }}>
          <LabelWrapper>社名 / Corporate Name</LabelWrapper>
          <ValueWrapper>スクアード株式会社 / Squard, Inc.</ValueWrapper>
        </BlockWrapper>

        <BlockWrapper>
          <LabelWrapper>代表取締役 / CEO</LabelWrapper>
          <ValueWrapper>小池駿平 / Shunpei Koike</ValueWrapper>
        </BlockWrapper>

        <BlockWrapper>
          <LabelWrapper>設立 / Founded</LabelWrapper>
          <ValueWrapper>2020年9月 / September 2020</ValueWrapper>
        </BlockWrapper>

        <BlockWrapper>
          <LabelWrapper>資本金 / Capital</LabelWrapper>
          <ValueWrapper>10,000,000円 / 10,000,000 yen</ValueWrapper>
        </BlockWrapper>

        <BlockWrapper>
          <LabelWrapper>所在地 / Address</LabelWrapper>
          <ValueWrapper
            style={{ fontSize: '14px', marginBottom: '0px', marginTop: '20px' }}
          >
            〒135-0064 東京都江東区青海2-7-4 the SOHO 1310
          </ValueWrapper>
          <ValueWrapper style={{ fontSize: '14px', marginTop: '5px', marginBottom: '20px',}}>
            the SOHO 1310, 2-7-4, Aomi, Koto-ku, Tokyo
          </ValueWrapper>
        </BlockWrapper>
      </CompanyInfor>

      <DefaultFooter />
    </div>
  )
}

export const CompanyPage = withTheme(Page, 'light-gray')
