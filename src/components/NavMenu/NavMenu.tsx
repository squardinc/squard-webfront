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
import { MenuItem } from './MenuItem'

interface NavMenuProps {
  show: boolean
  hideNavMenu: VoidFunction
  showLoginModal: VoidFunction
}
export const NavMenu: React.FC<NavMenuProps> = ({ show, hideNavMenu, showLoginModal }) => {
  return (
    <>
      <div className={`${styles.navMenu} ${show ? styles.open : styles.close}`}>
        <div className={styles.navToggleBtn} onClick={hideNavMenu}></div>
        <div className='flex flex-col mt-6 mr-4'>
          <MenuItem text='設定' SVGIcon={Setting} />
          <MenuItem text='マイページ' SVGIcon={MyPage} onClick={showLoginModal} />
          <MenuItem text={'チームを作る+'} SVGIcon={AddNewTeam} className={'opacity-50 cursor-not-allowed'} />
          <MenuItem text={'Squardについて'} SVGIcon={About} />
          <MenuItem text={'よくある質問'} SVGIcon={Faq} />
          <MenuItem text={'会社概要'} SVGIcon={CompanyIcon} />
          <MenuItem text={'個人情報の取り扱いについて'} SVGIcon={PrivacyPolicy} />
          <MenuItem text={'特定商取引法に基づく表記'} SVGIcon={LegalInfo} />
        </div>
      </div>
    </>
  )
}
