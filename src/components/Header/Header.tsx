import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import styles from './Header.module.scss'
import { NavMenu } from 'src/components/NavMenu/NavMenu'
import { SearchBar } from './SearchBar'

export const Header = () => {
  const [showSearchBar, setShowSearchBar] = React.useState(false)
  const [showNavMenu, setShowNavMenu] = React.useState(false)
  const [showCrossIcon, setshowCrossIcon] = React.useState(false)

  function toggleSearchBar() {
    setshowCrossIcon(!showCrossIcon)
    setShowSearchBar(!showSearchBar)
  }

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
          <span className="text-2xl font-bold">
            Squard
            <span className="text-xl font-bold text-red-600">.</span>
          </span>
          <div className="w-6">
            <FontAwesomeIcon
              icon={!showCrossIcon ? faSearch : faTimes}
              size="2x"
              cursor="pointer"
              onClick={() => toggleSearchBar()}
            />
          </div>
        </div>
        <SearchBar show={showSearchBar} />
      </div>
      <NavMenu show={showNavMenu} hideNavMenu={() => setShowNavMenu(false)} />
    </React.Fragment>
  )
}
