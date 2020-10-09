import * as React from 'react'
import styles from './Footer.module.scss'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { FooterWrapper } from './FooterWrapper'
import { ThemeContext } from 'src/context/ThemeContext'
import { SiteMap } from './SiteMap'

interface ContentFooterProps {
  titleSub: string
  titleMain: string
  text: string | JSX.Element
  buttonSub?: string
  buttonText: string
  onButtonClick: VoidFunction
}
export const ContentFooter: React.FC<ContentFooterProps> = ({
  titleSub,
  titleMain,
  text,
  buttonSub,
  buttonText,
  onButtonClick,
}) => {
  const { theme } = React.useContext(ThemeContext)
  return (
    <>
      <FooterWrapper>
        <div className={styles.content}>
          <div className="py-10">
            <TextDisplay>
              <div
                className={`${styles.titleSub} ${
                  theme === 'dark' ? 'text-theme-text-sub' : ''
                }`}
              >
                {titleSub}
              </div>
              <div className={styles.titleMain}>{titleMain}</div>
            </TextDisplay>
            <TextDisplay className={styles.description}>{text}</TextDisplay>
          </div>
          {buttonSub ? (
            <TextDisplay
              className={`${styles.question} pb-4 text-theme-text-sub`}
            >
              「Prospects」や「Angels」についてはこちら↓
            </TextDisplay>
          ) : (
            ''
          )}
          
          <div onClick={onButtonClick} className="cursor-pointer">
            <TextDisplay
              className={`${
                theme === 'dark'
                  ? 'border-2 border-yellow bg-black'
                  : 'background-theme-button'
              } rounded-full h-12 w-full flex items-center justify-center mr-2`}
            >
              
              <span className={styles.buttonText}>
                {buttonText}
              </span>
            </TextDisplay>
          </div>
        </div>
      </FooterWrapper>
      <SiteMap />
    </>
  )
}

export const DefaultFooter: React.FC = () => (
  <a href="https://www.squard.co.jp/coming-soon/">
    <ContentFooter
      titleSub="What's  the"
      titleMain="Squard?"
      text="Webサービス「Squard（スクアード）」は、個人でもなく法人でもない新しい働き方の実現を目標に、新時代のチームメイキングソリューションを提供するコラボレーションプラットフォームです。"
      buttonText="チームを作ってみる？"
      onButtonClick={() => {}}
    />
  </a>
)
