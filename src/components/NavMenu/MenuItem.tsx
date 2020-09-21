import * as React from 'react'
import styles from './NavMenu.module.scss'

export interface MenuItemProps {
  text: string
  SVGIcon: any
  className?: string
}
export const MenuItem: React.FC<MenuItemProps> = ({ text, SVGIcon, className='' }) => {
  return (
    <div className={`inline-flex ${className}`}>
      <SVGIcon className="h-16 w-auto" />
      <div className={"mt-4 font-thin text-lg border-b border-gray-100 border-opacity-75 " + styles.navText}>{text}</div>
    </div>
  )
}
