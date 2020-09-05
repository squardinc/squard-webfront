import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'

import styles from './Header.module.scss'

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <FontAwesomeIcon icon={faBars} />
        Squard
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  )
}

