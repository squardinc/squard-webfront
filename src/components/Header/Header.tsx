import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'

import styles from './Header.module.scss'

export const Header = () => {

  function toggleSearch() {
    const serchEl = document.getElementById('search');
    if (serchEl) {
      if (serchEl.style.display === "none") {
        serchEl.style.display = "block";
      } else {
        serchEl.style.display = "none";
      }
    }
  }

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.header}>
          <FontAwesomeIcon icon={faBars} size="2x" cursor="pointer" />
          <span style={{ fontSize: "1.6rem", fontWeight: "bold" }}>Squard<span style={{ fontSize: "1.4rem", fontWeight: "bold", color: "red" }}>.</span></span>
          <FontAwesomeIcon icon={faSearch} size="2x" cursor="pointer" onClick={toggleSearch} />
        </div>
      </div>
      <div id="search" className="pt-2 relative mx-auto text-gray-600" style={{ display: "none" }}>
        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search" />
        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
          <FontAwesomeIcon icon={faSearch} size="2x" />
        </button>
      </div>
    </React.Fragment>
  )
}

