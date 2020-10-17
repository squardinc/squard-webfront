import React, { lazy, Suspense } from 'react'
import { TwoStagedCaption } from 'src/components/Caption/Captions'
import { DefaultFooter } from 'src/components/Footer/ContentFooter'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { withTheme } from 'src/context/ThemeContext'
import CEO from 'src/images/temp/company/ceo.jpg'
import CFO from 'src/images/temp/company/cfo.jpg'
import CompanyImage from 'src/images/temp/company/company.jpg'
import COO from 'src/images/temp/company/coo.jpg'
import CTO from 'src/images/temp/company/cto.jpg'
import styled from 'styled-components'
import * as Const from '../../styles/const'
import styles from './company.module.scss'
import LazyLoad from 'react-lazyload'

const CompanyName = styled.div`
  font-weight: ${Const.fontWeight.bold};
  font-size: 38px;
  display: flex;
  flex-wrap: nowrap;
`
const CompanyInfor = styled.div`
  margin-top: 25px;
  margin-left: 20px;
  margin-right: 20px;
`
const PersonalPosition = styled.div`
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
  font-weight: ${Const.fontWeight.regular};
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
      <LazyLoad>
        <img
          src={member.imageUrl}
          className={styles.member + ' ' + getImageTheme(member.color)}
        />
      </LazyLoad>
      <div className={styles.memberCaption}>
        <PersonalPosition>{member.title}</PersonalPosition>
      </div>
    </div>
  )
}

const renderLoader = () => <p>Loading</p>

const Page: React.FC = () => {
  const members = [
    { imageUrl: CEO, color: 'red', title: 'CEO / 小池駿平' },
    { imageUrl: COO, color: 'blue', title: 'COO / 松井大樹' },
    { imageUrl: CFO, color: 'green', title: 'CFO / 木村明寛' },
    { imageUrl: CTO, color: 'yello', title: 'CTO / 柳澤翔矢' },
  ]

  return (
    <Suspense fallback={renderLoader()}>
      <div className={styles.container}>
        <LazyLoad>
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
                <div className="pr-6 text-white text-4xl font-bold tracking-wider">
                  <CompanyName>
                    <TextDisplay>
                      Squard, Inc<span className="text-red-600">.</span>
                    </TextDisplay>
                  </CompanyName>
                </div>
              </div>
            </div>
          </div>
        </LazyLoad>

        <CompanyInfor>
          <div style={{ maxWidth: '370px', margin: 'auto' }}>
            <TwoStagedCaption
              style="mediumItalic"
              sub="About"
              main="Our Company"
              shadow={true}
            />
          </div>
          <div className="pt-2 pb-8 flex flex-col align-center">
            <div className="pt-8 flex justify-center">
              <div className={styles.members}>
                {members.map((member, index) => (
                  <Member key={index} member={member} />
                ))}
              </div>
            </div>
          </div>

          <BlockWrapper
            style={{
              marginTop: '12px',
            }}
          >
            <LabelWrapper>
              <TextDisplay> 社名 / Corporate Name</TextDisplay>
            </LabelWrapper>
            <ValueWrapper>
              {' '}
              <TextDisplay> スクアード株式会社 / Squard, Inc.</TextDisplay>
            </ValueWrapper>
          </BlockWrapper>

          <BlockWrapper>
            <LabelWrapper>
              {' '}
              <TextDisplay> 代表取締役 / CEO</TextDisplay>
            </LabelWrapper>
            <ValueWrapper>
              <TextDisplay>小池駿平 / Shunpei Koike</TextDisplay>
            </ValueWrapper>
          </BlockWrapper>

          <BlockWrapper>
            <LabelWrapper>
              <TextDisplay>設立 / Founded</TextDisplay>
            </LabelWrapper>
            <ValueWrapper>
              <TextDisplay>2020年9月 / September 2020</TextDisplay>
            </ValueWrapper>
          </BlockWrapper>

          <BlockWrapper>
            <LabelWrapper>
              <TextDisplay>資本金 / Capital</TextDisplay>
            </LabelWrapper>
            <ValueWrapper>
              <TextDisplay>10,000,000円 / 10,000,000 yen</TextDisplay>
            </ValueWrapper>
          </BlockWrapper>

          <BlockWrapper>
            <LabelWrapper>
              <TextDisplay>所在地 / Address</TextDisplay>
            </LabelWrapper>
            <ValueWrapper
              style={{
                fontSize: '14px',
                marginBottom: '0px',
                marginTop: '20px',
              }}
            >
              <TextDisplay>
                〒135-0064 東京都江東区青海2-7-4 the SOHO 1310
              </TextDisplay>
            </ValueWrapper>
            <ValueWrapper
              style={{
                fontSize: '14px',
                marginTop: '5px',
                marginBottom: '20px',
              }}
            >
              <TextDisplay>
                the SOHO 1310, 2-7-4, Aomi, Koto-ku, Tokyo
              </TextDisplay>
            </ValueWrapper>
          </BlockWrapper>
        </CompanyInfor>

        <DefaultFooter />
      </div>
    </Suspense>
  )
}

export const CompanyPage = withTheme(Page, 'light-gray')
export default  withTheme(Page, 'light-gray')