import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from './Header.module.scss'

interface SearchBarProps {
  show: boolean
}
export const SearchBar: React.FC<SearchBarProps> = ({ show }) => {
  return (
    <div className={styles.searchBar}>
      <div
        id="search"
        className="pt-2 pl-1 relative mx-auto text-gray-600 w-full"
      >
        <div
          className={`${styles.searchTransition} ${
            show ? styles.open : styles.close
          }`}
        >
          <input
            className="border-2 border-gray-300 bg-white h-12 w-full px-5 pr-16 rounded-full text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="キーワードかハッシュタグを入力"
          />
          <div className="absolute right-0 top-0 mt-2 ml-4">
            <div className={styles.searchBtn}>
            <FontAwesomeIcon
              icon={faSearch}
              size="lg"
              color="black"
              cursor="pointer"
              style={{ marginTop: '15px' }}
              className="ml-4"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
