import * as React from 'react'
import styles from './NavMenu.module.scss'

interface MenuItemProps {
  text: string
  SVGIcon: any
  onClick?: VoidFunction
}

export const MenuItem: React.FC<MenuItemProps> = ({ text, SVGIcon, onClick }) => {
  return (
    <div
      className={`flex w-full cursor-pointer ${onClick ? '' : 'opacity-50 cursor-not-allowed'}`}
      onClick={onClick || (() => { })}
    >
      <SVGIcon className="h-16 w-auto" />
      <div className={"mt-4 flex-grow w-auto font-thin text-lg border-b border-gray-100 border-opacity-75 " + styles.navText}>{text}</div>
    </div >
  )
}
