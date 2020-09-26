import * as React from 'react'
import { navigateTo } from 'gatsby'
import { MenuItem } from './MenuItem'
import styles from './NavMenu.module.scss'
import Setting from 'src/assets/settings_icon_jp.svg'
import MyPage from 'src/assets/my_page_icon_jp.svg'
import AddNewTeam from 'src/assets/add_new_team_icon.svg'
import Faq from 'src/assets/faq_icon.svg'
import CompanyIcon from 'src/assets/company_icon.svg'
import LegalInfo from 'src/assets/legal_information_icon.svg'
import PrivacyPolicy from 'src/assets/privacy_policy_icon_jp.svg'
import About from 'src/assets/about_icon.svg'

interface NavMenuProps {
  show: boolean
  hideNavMenu: VoidFunction
  showLoginModal: VoidFunction
}
export const NavMenu: React.FC<NavMenuProps> = ({ show, hideNavMenu, showLoginModal }) => {
  const navigateWithMenuClose = (to: string) => () => {
    hideNavMenu()
    navigateTo(to)
  }
  return (
    <>
      {show ? <div className={`fixed top-0 left-0 w-full h-screen bg-gray-800 bg-opacity-50 blur-3 z-10`} onClick={hideNavMenu}/> : ''}
      <div className={`${styles.navMenu} ${show ? styles.open : styles.close} bg-v-gradient`}>
        <div className={styles.navToggleBtn} onClick={hideNavMenu}></div>
        <div className='flex flex-col mt-6 mr-4'>
          <MenuItem text='設定' SVGIcon={Setting} />
          <MenuItem text='マイページ' SVGIcon={MyPage} onClick={showLoginModal} />
          <MenuItem text={'チームを作る+'} SVGIcon={AddNewTeam} />
          <MenuItem text={'Squardについて'} SVGIcon={About} onClick={navigateWithMenuClose('/about')} />
          <MenuItem text={'よくある質問'} SVGIcon={Faq} onClick={navigateWithMenuClose('/faq')} />
          <MenuItem text={'会社概要'} SVGIcon={CompanyIcon} onClick={navigateWithMenuClose('/company')} />
          <MenuItem text={'個人情報の取り扱いについて'} SVGIcon={PrivacyPolicy} onClick={navigateWithMenuClose('/privacypolicy')} />
          <MenuItem text={'特定商取引法に基づく表記'} SVGIcon={LegalInfo} />
        </div>
      </div>
    </>
  )
}
