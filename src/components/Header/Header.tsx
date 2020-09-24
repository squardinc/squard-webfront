import * as React from 'react'
import { NavMenu } from 'src/components/NavMenu/NavMenu'
import { LoginModal } from 'src/components/Modal/LoginModal'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { SearchBar } from './SearchBar'
import Cross from 'src/assets/cross.svg'
import Search from 'src/assets/search.svg'
import Menu from 'src/assets/menu.svg'
import styles from './Header.module.scss'

export const Header = () => {
  const [showSearchBar, setShowSearchBar] = React.useState(false)
  const [showNavMenu, setShowNavMenu] = React.useState(false)
  const [showLoginModal, setShowLoginModal] = React.useState(false)

  return (
    <React.Fragment>
      <div className={`${styles.container} bg-theme-bg text-theme-text`}>
        <div className={styles.header}>
          <Menu
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
            {showSearchBar
              ? <Cross cursor="pointer" onClick={() => setShowSearchBar(false)} />
              : <Search cursor="pointer" onClick={() => setShowSearchBar(true)} />
            }
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
