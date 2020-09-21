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

interface NavMenuProps {
  show: boolean
  hideNavMenu: VoidFunction
}
export const NavMenu: React.FC<NavMenuProps> = ({ show, hideNavMenu }) => {
  function fadeOutNavMenu() {
    const el = document.getElementById('nav-menu')
    el?.classList.remove('open')
    el?.classList.add('close')
  }

  function fadeInNavMenu() {
    const el = document.getElementById('nav-menu')
    el?.classList.remove('close')
    el?.classList.add('open')
  }
  React.useEffect(() => {
    if (show) {
      fadeInNavMenu()
      return
    }
    fadeOutNavMenu()
  }, [show])
  return (
    <div
      id="nav-modal"
      style={{ display: 'block' }}
      className="z-auto bg-gray-700 static top-0 left-0 h-full w-full"
    >
      <div id="nav-menu" className={`${styles.navMenu} transition close`}>
        <div className={styles.navToggleBtn} onClick={hideNavMenu}></div>
        <ul className={styles.menuItems}>
          <li>
            <div className="inline-flex">
              <Setting className="h-16 w-auto" />
              <div className={"mt-4 font-thin text-lg border-b border-gray-100 border-opacity-75 " + styles.navText}>Settings</div>
            </div>
          </li>
          <li>
            <div className="inline-flex">
              <MyPage  className="h-16 w-auto" />
              <div className={"mt-4 font-thin text-lg border-b border-gray-100 border-opacity-75 " + styles.navText}>My Page</div>
            </div>
          </li>
          <li>
            <div className='inline-flex opacity-50 cursor-not-allowed'>
              <AddNewTeam  className="h-16 w-auto" />
              <div className={"mt-4 font-thin text-lg border-b border-gray-100 border-opacity-75 " + styles.navText}>Add new team</div>
            </div>
          </li>
          <li>
            <div className="inline-flex">
              <About  className="h-16 w-auto" />
              <div className={"mt-4 font-thin text-lg border-b border-gray-100 border-opacity-75 " + styles.navText}>About us</div>
            </div>
          </li>
          <li>
            <div className="inline-flex">
              <Faq  className="h-16 w-auto" />
              <div className={"mt-4 font-thin text-lg border-b border-gray-100 border-opacity-75 " + styles.navText}>FAQ</div>
            </div>
          </li>
          <li>
            <div className="inline-flex">
              <CompanyIcon  className="h-16 w-auto" />
              <div className={"mt-4 font-thin text-lg border-b border-gray-100 border-opacity-75 " + styles.navText}>Company</div>
            </div>
          </li>
          <li>
            <div className="inline-flex">
              <PrivacyPolicy  className="h-16 w-auto" />
              <div className={"mt-4 font-thin text-lg border-b border-gray-100 border-opacity-75 " + styles.navText}>Privacy Policy</div>
            </div>
          </li>
          <li>
            <div className="inline-flex">
              <LegalInfo className="h-16 w-auto" />
              <div className={"mt-4 font-thin text-lg border-b border-gray-100 border-opacity-75 " + styles.navText}>Legal Information</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
