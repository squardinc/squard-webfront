import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import styles from './Header.module.scss'
import { NavMenu } from 'src/components/NavMenu/NavMenu'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { SearchBar } from './SearchBar'
import { LoginModal } from '../Modal/LoginModal'

export const Header = () => {
  const [showSearchBar, setShowSearchBar] = React.useState(false)
  const [showNavMenu, setShowNavMenu] = React.useState(false)
  const [showLoginModal, setShowLoginModal] = React.useState(false)

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.header}>
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            cursor="pointer"
            onClick={() => setShowNavMenu(!showNavMenu)}
          />
          <TextDisplay>
            <span className="text-2xl font-bold">
              Squard
            <span className="text-xl font-bold text-red-600">.</span>
            </span>
          </TextDisplay>
          <div className="w-6">
            <FontAwesomeIcon
              icon={!showSearchBar ? faSearch : faTimes}
              size="2x"
              cursor="pointer"
              onClick={() => setShowSearchBar(!showSearchBar)}
            />
          </div>
        </div>
        <SearchBar show={showSearchBar} />
      </div>
      <NavMenu
        show={showNavMenu}
        hideNavMenu={() => setShowNavMenu(false)}
        showLoginModal={() => setShowLoginModal(true)}
      />
      <div>{showLoginModal ? <LoginModal closeModal={() => setShowLoginModal(false)} /> : <></>}</div>
    </React.Fragment>
  )
}
