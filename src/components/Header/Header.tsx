import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from './Header.module.scss'
import { NavMenu } from 'src/components/NavMenu/NavMenu'
import { SearchBar } from './SearchBar'

export const Header = () => {
  const [showSearchBar, setShowSearchBar] = React.useState(false)
  const [showNavMenu, setShowNavMenu] = React.useState(false)

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
          <span style={{ fontSize: '1.6rem', fontWeight: 'bold' }}>
            Squard
            <span
              style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'red' }}
            >
              .
            </span>
          </span>
          <FontAwesomeIcon
            icon={faSearch}
            size="2x"
            cursor="pointer"
            onClick={() => setShowSearchBar(!showSearchBar)}
          />
        </div>
        <SearchBar show={showSearchBar} />
      </div>
      <NavMenu show={showNavMenu} hideNavMenu={() => setShowNavMenu(false)} />
    </React.Fragment>
  )
}
