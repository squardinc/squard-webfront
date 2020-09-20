import * as React from 'react'
import styles from './Navbar.module.scss'
import Setting from 'src/assets/settings_icon_jp.svg'
import MyPage from 'src/assets/my_page_icon_jp.svg'
import AddNewTeam from 'src/assets/add_new_team_icon.svg'
import Faq from 'src/assets/faq_icon.svg'
import CompanyIcon from 'src/assets/company_icon.svg'
import LegalInfo from 'src/assets/legal_information_icon.svg'
import PrivacyPolicy from 'src/assets/privacy_policy_icon_jp.svg'
import About from 'src/assets/about_icon.svg'

interface NavBarProps {
  show: boolean
  hideNavBar: VoidFunction
}
export const Navbar: React.FC<NavBarProps> = ({ show, hideNavBar }) => {
  function fadeOutNavBar() {
    const el = document.getElementById('nav-menu')
    var pos = 600
    var id = setInterval(frame, 5)
    function frame() {
      if (pos == 0) {
        clearInterval(id)
        const navbarEl = document.getElementById('nav-modal')
        if (navbarEl) {
          navbarEl.style.display = 'none'
        }
      } else {
        pos -= 10
        if (el) {
          el.style.height = pos + 'px'
        }
      }
    }
  }
  function fadeInNavBar() {
    const el = document.getElementById('nav-menu');
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 600) {
        clearInterval(id);
      } else {
        pos += 10
        if (el) {
          el.style.height = pos + 'px';
        }
      }
    }
    const navbarEl = document.getElementById('nav-modal')
    if (navbarEl && navbarEl.style.display === 'none') {
      navbarEl.style.display = 'block'
    }
  }
  React.useEffect(() => {
    if (show) {
      fadeInNavBar()
      return
    }
    fadeOutNavBar()
  }, [show])

  return (
    <div id="nav-modal" style={{ display: 'none' }} className={styles.navModal}>
      <div id="nav-menu" className={styles.navBar}>
        <div className={styles.navToggleBtn} onClick={hideNavBar}></div>
        <ul className={styles.navMenu}>
          <li>
            <div className={styles.navItem}>
              <Setting style={{ height: '70px', width: 'auto' }} />
              <div className={styles.navText}>Settings</div>
            </div>
          </li>
          <li>
            <div className={styles.navItem}>
              <MyPage style={{ height: '65px', width: 'auto' }} />
              <div className={styles.navText}>My Page</div>
            </div>
          </li>
          <li>
            <div className={styles.navItem + ' ' + styles.disabled}>
              <AddNewTeam style={{ height: '65px', width: 'auto' }} />
              <div className={styles.navText}>Add new team</div>
            </div>
          </li>
          <li>
            <div className={styles.navItem}>
              <About style={{ height: '65px', width: 'auto' }} />
              <div className={styles.navText}>About us</div>
            </div>
          </li>
          <li>
            <div className={styles.navItem}>
              <Faq style={{ height: '65px', width: 'auto' }} />
              <div className={styles.navText}>FAQ</div>
            </div>
          </li>
          <li>
            <div className={styles.navItem}>
              <CompanyIcon style={{ height: '65px', width: 'auto' }} />
              <div className={styles.navText}>Company</div>
            </div>
          </li>
          <li>
            <div className={styles.navItem}>
              <PrivacyPolicy style={{ height: '65px', width: 'auto' }} />
              <div className={styles.navText}>Privacy Policy</div>
            </div>
          </li>
          <li>
            <div className={styles.navItem}>
              <LegalInfo style={{ height: '65px', width: 'auto' }} />
              <div className={styles.navText}>Legal Information</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
