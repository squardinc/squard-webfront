import { Link } from 'gatsby'
import React, { useEffect } from 'react'
import Menu from 'src/assets/menu.svg'
import { AuthModal, ModalType } from 'src/components/Modal/AuthModal'
import { NavMenu } from 'src/components/NavMenu/NavMenu'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { UserContext } from 'src/context/UserContext'
import { AuthService } from 'src/services/AuthService'
import { LoginUserModel } from 'src/services/AuthService/LoginUserModel'
import styled from 'styled-components'
import * as Const from '../../styles/const'
import styles from './Header.module.scss'

const Title = styled.div`
  font-weight: ${Const.fontWeight.bold};
  font-size: ${Const.fontSize.xl};
  margin-top: 2px;
`

export const Header = () => {
  const { user, setUser } = React.useContext(UserContext)
  const [openModal, setOpenModal] = React.useState<ModalType>('Closed')
  const [showNavMenu, setShowNavMenu] = React.useState(false)

  useEffect(() => {
    if (showNavMenu) {
      const bodyContent = document.getElementById('app-base-body')
      if (bodyContent) {
        bodyContent.style.overflow = 'hidden'
        bodyContent.style.height = "100vh"
      }
    } else {
      const bodyContent = document.getElementById('app-base-body')
      if (bodyContent) {
        bodyContent.style.overflow = 'auto'
        bodyContent.style.height = "auto"
      }
    }
  }, [showNavMenu])

  return (
    <React.Fragment>
      <div
        className={`${styles.container} bg-theme-bg-header text-theme-text-header box-shadow-theme-header`}
      >
        <div className={styles.header}>
          <Menu cursor="pointer" onClick={() => setShowNavMenu(!showNavMenu)} />
          <TextDisplay>
            <Link
              to="/"
              style={{
                display: 'flex',
                flexWrap: 'nowrap',
                justifyContent: 'center',
              }}
            >
              <Title>Squard</Title>
              <span className="text-xl font-bold text-red-600">.</span>
            </Link>
          </TextDisplay>
          <div className="w-6">
            {/* {showSearchBar ? (
              <Cross cursor="pointer" onClick={() => setShowSearchBar(false)} />
            ) : (
                <Search cursor="pointer" onClick={() => setShowSearchBar(true)} />
              )} */}
          </div>
        </div>
        {/* <SearchBar show={false} /> */}
      </div>
      <NavMenu
        show={showNavMenu}
        loggedIn={user.loggedIn}
        hideNavMenu={() => setShowNavMenu(false)}
        showLoginModal={() => setOpenModal('Login')}
        logout={async () => {
          await AuthService.logout()
          setUser(LoginUserModel.guest())
          setOpenModal('Logout')
        }}
      />
      <AuthModal openModal={openModal} setOpenModal={setOpenModal} />
    </React.Fragment>
  )
}

export default Header
