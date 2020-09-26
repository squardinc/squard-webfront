import * as React from 'react'
import { NavMenu } from 'src/components/NavMenu/NavMenu'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { SearchBar } from './SearchBar'
import Cross from 'src/assets/cross.svg'
import Search from 'src/assets/search.svg'
import Menu from 'src/assets/menu.svg'
import styles from './Header.module.scss'
import { SignUpLoginLayout } from '../Modal/SignUpLoginModal'
import { UserContext } from 'src/context/UserContext'
import { Link } from 'gatsby'

export const Header = () => {
  const { user } = React.useContext(UserContext)
  const [showSearchBar, setShowSearchBar] = React.useState(false)
  const [showNavMenu, setShowNavMenu] = React.useState(false)
  const [showLoginModal, setShowLoginModal] = React.useState(false)
  const [showSignUpModal, setShowSignUpModal] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      const element = document.getElementsByClassName('modal-transition')[0]
      if (element) {
        element.classList.remove('close')
        element.classList.add('open')
      }
    }, 100)
  }, [showLoginModal])

  return (
    <React.Fragment>
      <div
        className={`${styles.container} bg-theme-bg-main text-theme-text-main`}
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
        hideNavMenu={() => setShowNavMenu(false)}
        showLoginModal={() => setShowLoginModal(true)}
      />
      <SignUpLoginLayout
        showSignUpModal={showSignUpModal}
        showLoginModal={showLoginModal}
        setShowSignUpModal={setShowSignUpModal}
        setShowLoginModal={setShowLoginModal}
      />
    </React.Fragment>
  )
}
