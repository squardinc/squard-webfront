import * as React from 'react'
import { NavMenu } from 'src/components/NavMenu/NavMenu'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { SearchBar } from './SearchBar'
import Cross from 'src/assets/cross.svg'
import Search from 'src/assets/search.svg'
import Menu from 'src/assets/menu.svg'
import styles from './Header.module.scss'
import { SignUpLoginLayout, ModalType } from '../Modal/SignUpLoginModal'
import { UserContext } from 'src/context/UserContext'
import { Link } from 'gatsby'
import { fadeIn } from '../../utils/Modal'
import { AuthService } from 'src/services/AuthService'

export const Header = () => {
  const { user } = React.useContext(UserContext)
  const [openModal, setOpenModal] = React.useState<ModalType>('Closed')
  const [showNavMenu, setShowNavMenu] = React.useState(false)

  React.useEffect(() => {
    fadeIn()
  }, [openModal])

  return (
    <React.Fragment>
      <div
        className={`${styles.container} bg-theme-bg-header text-theme-text-header box-shadow-theme-header`}
      >
        <div className={styles.header}>
          <Menu cursor="pointer" onClick={() => setShowNavMenu(!showNavMenu)} />
          <TextDisplay>
            <Link to="/" className="text-2xl font-bold">
              Squard
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
        {/* <SearchBar show={showSearchBar} /> */}
      </div>
      <NavMenu
        show={showNavMenu}
        loggedIn={user.loggedIn}
        hideNavMenu={() => setShowNavMenu(false)}
        showLoginModal={() => setOpenModal('Login')}
        logout={async () => {
          await AuthService.logout()
          setOpenModal('Logout')
        }}
      />
      <SignUpLoginLayout
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  )
}
