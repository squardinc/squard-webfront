import * as React from 'react'
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

import styled from 'styled-components'
import { colorFilters, personIcon } from 'src/styles/utils'

const StyledComponents = styled.div`
  position: relative;
  background-color: #fafafa;
  font-family: 'montserrat', sans-serif;

  .companyImageContainer {
    height: 400px;
  }

  .contactInfo {
    position: relative;
    height: 200px;
    background-image: linear-gradient(#051026, transparent);
    padding-top: 20px;
    font-weight: 100;
  }

  .companyInfo {
    position: relative;
    height: 200px;
    background-image: linear-gradient(transparent, #051026);
  }

  .labelHeaderBox {
    height: 45px;
    width: 90%;
    margin: auto;
    background-image: linear-gradient(to right, #27d8df, #3b4491);
    box-shadow: 5px 7px lightgrey;
  }

  .members {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 370px;
  }
  .memberContainer {
    width: 50%;
  }
  .member {
    ${personIcon({ maxWidth: "164px", height: "152px", radius: "3.5px" })}
  }

  .redFilter {
    ${colorFilters.red}
  }

  .blueFilter {
   ${colorFilters.blue} 
  }

  .greenFilter {
    ${colorFilters.green}
  }

  .yellowFilter {
    ${colorFilters.yellow}
  }

  .memberCaption {
    position: absolute;
    width: 124px;
    height: 32px;
    top: 106px;
    padding: 2px 0px;
    color: white;
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(24px);
    border-radius: 0 10px 10px 0;
  }

  .memberName {
    font-size: small;
    line-height: 2rem;
  }
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
    <div className={`relative mt-1 px-1 memberContainer`}>
      <img
        src={member.imageUrl}
        className={styles.member + ' ' + getImageTheme(member.color)}
      />
      <div className="memberCaption">
        <TextDisplay className="memberName">{member.title}</TextDisplay>
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
    <StyledComponents>
      <div
        style={{
          background: `url(${CompanyImage}) no-repeat center`,
          backgroundSize: 'cover',
        }}
        className="companyImageContainer"
      >
        <div className="contactInfo">
          <p className="pl-10 text-white text-sm text-opacity-75 tracking-widest">
            Web : <a href="https://www.squard.co.jp">www.squard.co.jp</a>
          </p>
          <p className="pt-2 pl-10 text-white text-sm text-opacity-75 tracking-widest">
            Mail :{' '}
            <a href="mailto:contact@squard.co.jp">contact@squard.co.jp</a>
          </p>
        </div>
        <div className="companyInfo">
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
        <div className="flex flex-col justify-center items-center">
          <div>
            <TwoStagedCaption
              style="medium"
              sub="About"
              main="Our Company"
              shadow={true}
            />
          </div>
        </div>
        <div className="pt-8 flex justify-center">
          <div className="members">
            {members.map((member, index) => (
              <Member key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
      <div className="pb-16">
        <div className="labelHeaderBox">
          <TextDisplay className="text-white text-lg font-medium text-center tracking-wider pt-2">
            社名 / Corporate Name
          </TextDisplay>
          <TextDisplay className="text-black text-lg font-thin text-center tracking-wider pt-6">
            スクアード株式会社 / Squard, Inc.
          </TextDisplay>
        </div>
      </div>
      <div className="pb-16">
        <div className="labelHeaderBox">
          <TextDisplay className="text-white text-lg font-medium text-center tracking-wider pt-2">
            代表取締役 / CEO
          </TextDisplay>
          <TextDisplay className="text-black text-lg font-thin text-center tracking-wider pt-6">
            小池駿平 / Shunpei Koike
          </TextDisplay>
        </div>
      </div>
      <div className="pb-16">
        <div className="labelHeaderBox">
          <TextDisplay className="text-white text-lg font-medium text-center tracking-wider pt-2">
            設立 / Founded
          </TextDisplay>
          <TextDisplay className="text-black text-lg font-thin text-center tracking-wider pt-6">
            2020年9月 / September 2020
          </TextDisplay>
        </div>
      </div>
      <div className="pb-16">
        <div className="labelHeaderBox">
          <TextDisplay className="text-white text-lg font-medium text-center tracking-wider pt-2">
            資本金 / Capital
          </TextDisplay>
          <TextDisplay className="text-black text-lg font-thin text-center tracking-wider pt-6">
            10,000,000円 / 10,000,000 yen
          </TextDisplay>
        </div>
      </div>
      <div className="pb-24">
        <div className="labelHeaderBox">
          <TextDisplay className="text-white text-lg font-medium text-center tracking-wider pt-2">
            所在地 / Address
          </TextDisplay>
          <TextDisplay className="text-black text-sm font-thin text-center tracking-wider pt-6">
            <p>〒135-0064 東京都江東区青海2-7-4 the SOHO 1310 </p>
            <p>the SOHO 1310, 2-7-4, Aomi, Koto-ku, Tokyo</p>
          </TextDisplay>
        </div>
      </div>
      <DefaultFooter />
    </StyledComponents>
  )
}

export const CompanyPage = withTheme(Page, 'light-gray')
