import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Data from './navData'
import NavLink from './NavLink'


const MenuItems = ({isOpen, toggleMenu}) => {
 const router = useRouter()
 const navList = Data.map((each, idx) => {
  return <NavLink 
            name={each.name}
            routeName={each.routeName}
            key={idx}
            toggleMenu = {toggleMenu}
        />
 })


  return (
    <div className={`fixed top-[84px] right-[-75%] w-9/12 h-screen bg-primaryBg z-40 ${ isOpen ? 'animate-[comeout_0.3s_ease-in-out_0.1s_both]' : 'animate-[goin_0.5s_ease-in-out_both]'} lg:static lg:h-fit lg:w-fit`}>
     <ul className={` flex text-xl flex-col  items-center gap-10 w-full mt-24 lg:text-sm font-satoshi font-medium lg:mt-0 lg:flex-row lg:font-bold`}>
      {navList}
    </ul>
    </div>
  )
}

export default MenuItems