import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from './Header.module.scss'
import { Navbar } from '../Navbar/Navbar'
import { SearchBar } from './SearchBar'

export const Header = () => {
  function toggleNavbar() {
    const el = document.getElementById('nav-menu');
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 600) {
        clearInterval(id);
      } else {
        pos += 10
        if (el) {
          el.style.height = pos + 'px';
        }
      }
    }
    const navbarEl = document.getElementById('nav-bar')
    if (navbarEl) {
      if (navbarEl.style.display === 'none') {
        navbarEl.style.display = 'block'
      } else {
        navbarEl.style.display = 'none'
      }
    }
  }
  const [showSearchBar, setShowSearchBar] = React.useState(false)

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.header}>
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            cursor="pointer"
            onClick={toggleNavbar}
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
      </div>
      <SearchBar show={showSearchBar} />
      <div id="nav-bar" style={{ display: 'none' }} className={styles.navModal}>
        <Navbar />
      </div>
    </React.Fragment>
  )
}
