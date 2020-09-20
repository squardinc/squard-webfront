import * as React from 'react'
import styles from './Navbar.module.scss'
import Setting from '../../assets/settings_icon_jp.svg'
import MyPage from '../../assets/my_page_icon_jp.svg'
import AddNewTeam from '../../assets/add_new_team_icon.svg'
import Faq from '../../assets/faq_icon.svg'
import CompanyIcon from '../../assets/company_icon.svg'
import LegalInfo from '../../assets/legal_information_icon.svg'
import PrivacyPolicy from '../../assets/privacy_policy_icon_jp.svg'
import About from '../../assets/about_icon.svg'

export const Navbar = () => {
  function toggleNavbar() {
    const el = document.getElementById('nav-menu')
    var pos = 600
    var id = setInterval(frame, 5)
    function frame() {
      if (pos == 0) {
        clearInterval(id)
        const navbarEl = document.getElementById('nav-bar')
        if (navbarEl) {
          if (navbarEl.style.display === 'none') {
            navbarEl.style.display = 'block'
          } else {
            navbarEl.style.display = 'none'
          }
        }
      } else {
        pos -= 10
        if (el) {
          el.style.height = pos + 'px'
        }
      }
    }
  }

  return (
    <React.Fragment>
      <div id="nav-menu" className={styles.navBar}>
        <div className={styles.navToggleBtn} onClick={toggleNavbar}></div>
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
    </React.Fragment>
  )
}
