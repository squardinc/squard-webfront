import * as React from 'react'
import styles from './NavMenu.module.scss'
import { TextDisplay } from '../TextDisplay/TextDisplay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface MenuItemProps {
  text: string
  SVGIcon?: any
  faIcon?: IconDefinition
  onClick?: VoidFunction
}

export const MenuItem: React.FC<MenuItemProps> = ({
  text,
  SVGIcon,
  faIcon,
  onClick,
}) => {
  return (
    <div
      className={`flex cursor-pointer ${
        onClick ? '' : styles.cursorNotAllowed
      }`}
      onClick={onClick || (() => {})}
    >
      {SVGIcon ? (
        <SVGIcon className="h-16 w-16 flex justify-center items-center" />
      ) : (
        <div className="h-16 w-16 flex justify-center items-center">
          <FontAwesomeIcon
            icon={faIcon}
            size="lg"
            color={onClick ? 'white' : '#262626'}
          />
        </div>
      )}
      <TextDisplay
        className={
          'flex items-center w-full tracking-wider border-b border-gray-100 border-opacity-75 ' +
          styles.navText
        }
      >
        {text}
      </TextDisplay>
    </div>
  )
}
