import React from 'react'
import styles from './header.module.css'

const MenuBar = ({toggleMenu, isOpen}) => {
  return (
    <div className={`lg:hidden flex flex-col items-center justify-center  cursor-pointer polygon ${ isOpen ? ' fixed right-[3.5%] z-50 ' : ''}`} onClick={toggleMenu}>
      <div className= {`${styles.bar} ${isOpen ? 'translate-y-[6px] rotate-45' : ''}`}  ></div>
      <div className={`${styles.bar} ${isOpen ? 'opacity-0' : ''}`}></div>
      <div className={`!mb-0 ${styles.bar}  ${isOpen ? 'transform -translate-y-[6px] -rotate-45 ' : '' }`}></div>
    </div>
  )
}

export default MenuBar