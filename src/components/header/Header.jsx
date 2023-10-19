import React from 'react'
import styles from '@/components/Header/Header.module.css'

const Header = ({ title }) => {
  return (
    <div className={styles.container}>
      {title && console.log(title)}
      Header
    </div>
  )
}

export default Header