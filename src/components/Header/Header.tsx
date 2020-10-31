import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import React, { useEffect } from 'react'
import Menu from 'src/assets/menu.svg'
import { AuthModal, ModalType } from 'src/components/Modal/AuthModal'
import { NavMenu } from 'src/components/NavMenu/NavMenu'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { LoadingContext } from 'src/context/LoadingContextProvider'
import { UserContext } from 'src/context/UserContext'
import styled from 'styled-components'
import * as Const from '../../styles/const'
import styles from './Header.module.scss'
import { UserIcon } from './UserIcon'

const Title = styled.div`
  font-weight: ${Const.fontWeight.bold};
  font-size: ${Const.fontSize.xl};
  margin-top: 2px;
`

function preventDefault(e) {
  e.preventDefault()
}

function disableScroll() {
  document.body.addEventListener('touchmove', preventDefault, { passive: false })
}
function enableScroll() {
  document.body.removeEventListener('touchmove', preventDefault)
}

export const Header = () => {
  const { setLoading } = React.useContext(LoadingContext)
  const { user, setUser } = React.useContext(UserContext)
  const [openModal, setOpenModal] = React.useState<ModalType>('Closed')
  const [showNavMenu, setShowNavMenu] = React.useState(false)
  useEffect(() => {
    if (showNavMenu) {
      disableScroll()
    } else {
      enableScroll()
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
          <div className="w-8 h-8 flex justify-center items-center">
            {user.loggedIn ? (
              <UserIcon user={user} />
            ) : (
              <FontAwesomeIcon
                size="2x"
                icon={faUserCircle}
                onClick={() => setOpenModal('Login')}
              />
            )}
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
        user={user}
        hideNavMenu={() => setShowNavMenu(false)}
        showLoginModal={() => {
          setOpenModal('Login')
          setShowNavMenu(false)
        }}
        logout={async () => {
          setLoading(true)
          setShowNavMenu(false)
          setOpenModal('Logout')
        }}
      />
      <AuthModal openModal={openModal} setOpenModal={setOpenModal} />
    </React.Fragment>
  )
}

export default Header
