import React from 'react'

const MenuBar = ({toggleMenu, isOpen}) => {
  return (
    <div className={`md:hidden flex flex-col items-center justify-center  cursor-pointer polygon ${ isOpen ? ' fixed right-[3.5%] z-50 ' : ''}`} onClick={toggleMenu}>
      <div className= {`bar ${isOpen ? 'translate-y-[6px] rotate-45' : ''}`}  ></div>
      <div className={`bar ${isOpen ? 'opacity-0' : ''}`}></div>
      <div className={`bar mb-0 ${isOpen ? 'transform -translate-y-[6px] -rotate-45 ' : '' }`}></div>
    </div>
  )
}

export default MenuBar