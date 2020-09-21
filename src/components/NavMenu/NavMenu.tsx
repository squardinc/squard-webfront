import * as React from 'react'
import styles from './NavMenu.module.scss'
import Setting from 'src/assets/settings_icon_jp.svg'
import MyPage from 'src/assets/my_page_icon_jp.svg'
import AddNewTeam from 'src/assets/add_new_team_icon.svg'
import Faq from 'src/assets/faq_icon.svg'
import CompanyIcon from 'src/assets/company_icon.svg'
import LegalInfo from 'src/assets/legal_information_icon.svg'
import PrivacyPolicy from 'src/assets/privacy_policy_icon_jp.svg'
import About from 'src/assets/about_icon.svg'
import { MenuItem, MenuItemProps } from './MenuItem'

const MENU_ITEMS: MenuItemProps[] = [
  { text: '設定', SVGIcon: Setting },
  { text: 'マイページ', SVGIcon: MyPage },
  { text: 'チームを作る+', SVGIcon: AddNewTeam, className: 'opacity-50 cursor-not-allowed' },
  { text: 'Squardについて', SVGIcon: About },
  { text: 'よくある質問', SVGIcon: Faq },
  { text: '会社概要', SVGIcon: CompanyIcon },
  { text: '個人情報の取り扱いについて', SVGIcon: PrivacyPolicy },
  { text: '特定商取引法に基づく表記', SVGIcon: LegalInfo },
]

interface NavMenuProps {
  show: boolean
  hideNavMenu: VoidFunction
}
export const NavMenu: React.FC<NavMenuProps> = ({ show, hideNavMenu }) => {
  return (
    <div className={`${styles.navMenu} ${show ? styles.open : styles.close}`}>
      <div className={styles.navToggleBtn} onClick={hideNavMenu}></div>
      <div className={styles.menuItems}>
        {MENU_ITEMS.map(item => <MenuItem key={item.text} {...item} />)}
      </div>
    </div>
  )
}
