import * as React from 'react'
import styles from './NavMenu.module.scss'
import { TextDisplay } from '../TextDisplay/TextDisplay'

interface MenuItemProps {
  text: string
  SVGIcon: any
  onClick?: VoidFunction
}

export const MenuItem: React.FC<MenuItemProps> = ({
  text,
  SVGIcon,
  onClick,
}) => {
  return (
    <div
      className={`flex cursor-pointer ${
        onClick ? '' : 'opacity-50 cursor-not-allowed'
      }`}
      onClick={onClick || (() => {})}
    >
      <SVGIcon className="h-16 w-auto" />
      <TextDisplay
        className={
          'mt-4 flex-grow w-auto font-thin text-lg border-b border-gray-100 border-opacity-75 ' +
          styles.navText
        }
      >
        {text}
      </TextDisplay>
    </div>
  )
}
