import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { navigate } from 'gatsby'
import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import About from 'src/assets/about_icon.svg'
import AddNewTeam from 'src/assets/add_new_team_icon.svg'
import CompanyIcon from 'src/assets/company_icon.svg'
import Faq from 'src/assets/faq_icon.svg'
import LegalInfo from 'src/assets/legal_information_icon.svg'
import MyPage from 'src/assets/my_page_icon_jp.svg'
import PrivacyPolicy from 'src/assets/privacy_policy_icon_jp.svg'
import { LoginUser } from 'src/services/AuthService/interfaces'
import styled from 'styled-components'
import { MenuItem } from './MenuItem'
import styles from './NavMenu.module.scss'

const MenuItemContent = styled.div`
  display: flex;
  flex-direction: column;
`

interface NavMenuProps {
  show: boolean
  user: LoginUser
  hideNavMenu: VoidFunction
  showLoginModal: VoidFunction
  logout: VoidFunction
}
export const NavMenu: React.FC<NavMenuProps> = ({
  show,
  user,
  hideNavMenu,
  showLoginModal,
  logout,
}) => {
  const navigateWithMenuClose = (to: string) => () => {
    hideNavMenu()
    navigate(to)
  }
  const [bottom, setBottom] = useState(0)
  const [props, set] = useSpring(() => ({ y: 0 }))
  const bind = useDrag(({ down, movement: [x, y] }) => {
    if (!down) {
      if (y > 30) {
        hideNavMenu()
        setTimeout(function () {
          set({ y: 0 })
          setBottom(0)
        }, 1000)
      } else {
        set({ y: 0 })
        setBottom(0)
      }
    } else {
      setBottom(y)
      set({ y: y })
    }
  })

  return (
    <>
      {show ? (
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-gray-800 bg-opacity-50 blur-3 z-10`}
          onClick={hideNavMenu}
        />
      ) : (
        ''
      )}

      <animated.div
        {...bind()}
        className={`${styles.navMenu} ${show ? styles.open : styles.close} bg-v-gradient`}
        style={{
          bottom: bottom > 0 ? -bottom : 0,
        }}
      >
        <div style={{ width: '100%', height: '25px' }} onClick={hideNavMenu}>
          <div className={styles.navToggleBtn} />
        </div>
        <MenuItemContent>
          {/* <MenuItem text="設定" SVGIcon={Setting} /> */}
          <MenuItem
            text="マイページ"
            SVGIcon={MyPage}
            onClick={user.loggedIn ? navigateWithMenuClose(`/${user.pageId}`) : showLoginModal}
          />
          <MenuItem text={'チームを作る+'} SVGIcon={AddNewTeam} />
          <MenuItem
            text={'Squardについて'}
            SVGIcon={About}
            onClick={navigateWithMenuClose('/about')}
          />
          <MenuItem text={'よくある質問'} SVGIcon={Faq} onClick={navigateWithMenuClose('/faq')} />
          <MenuItem
            text={'会社概要'}
            SVGIcon={CompanyIcon}
            onClick={navigateWithMenuClose('/company')}
          />
          <MenuItem
            text={'個人情報の取り扱いについて'}
            SVGIcon={PrivacyPolicy}
            onClick={navigateWithMenuClose('/privacypolicy')}
          />
          <MenuItem
            text={'特定商取引法に基づく表記'}
            SVGIcon={LegalInfo}
            onClick={navigateWithMenuClose('/sctl')}
          />
          <MenuItem
            text={'ログアウト'}
            faIcon={faSignOutAlt}
            onClick={user.loggedIn ? logout : undefined}
          />
        </MenuItemContent>
      </animated.div>
    </>
  )
}
