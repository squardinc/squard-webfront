import * as React from 'react'
import backgroundImage from 'src/images/background.png'
import styles from './Footer.module.scss'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'

interface ContentFooterProps {
  titleSub: string
  titleMain: string
  text: string | JSX.Element
  buttonSub?: string
  buttonText: string
  onButtonClick: VoidFunction
}
export const ContentFooter: React.FC<ContentFooterProps> = ({ titleSub, titleMain, text, buttonSub, buttonText, onButtonClick }) => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.content}>
        <div className='py-10'>
          <TextDisplay>
            <div className={styles.titleSub}>{titleSub}</div>
            <div className={styles.titleMain}>{titleMain}</div>
          </TextDisplay>
          <TextDisplay className={styles.description}>
            {text}
          </TextDisplay>
        </div>
        {buttonSub ?
          <TextDisplay className={styles.question + ' pb-4'}>
            「Prospects」や「Angels」についてはこちら↓
        </TextDisplay>
          : ''}
        <div onClick={onButtonClick} className='cursor-pointer'>
          <TextDisplay className="border-2 border-yellow-400 rounded-full h-12 w-full flex items-center justify-center mr-2">
            <span className="text-yellow-400 font-bold text-lg">{buttonText}</span>
          </TextDisplay>
        </div>
      </div>
    </div>
  )
}
