import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'


const MenuItems = ({isOpen}) => {
 const router = useRouter()
  return (
    <div className={`fixed top-[84px] right-[-75%] w-9/12 h-screen bg-primaryBg z-40 ${ isOpen ? 'animate-[comeout_0.3s_ease-in-out_0.1s_both]' : 'animate-[goin_0.5s_ease-in-out_both]'}`}>
     <ul className={` flex text-xl flex-col items-center gap-10 w-full mt-24 lg:text-sm font-satoshi font-medium `}>
      <Link href="/" ><li className={`menuItems ${router.pathname === '/' ? 'menuActive' : 'menuHover'}`}>Home</li></Link>
      <Link href="/about" ><li className={`menuItems ${router.pathname === '/about' ? 'menuActive' : 'menuHover'}`}>About</li></Link>
      <Link href="/donations" ><li className={`menuItems ${router.pathname === '/donations' ? 'menuActive' : 'menuHover'}`}>Donations</li></Link>
      <Link href="/activities" ><li className={`menuItems ${router.pathname === '/activities' ? 'menuActive' : 'menuHover'}`}>Activities</li></Link>
      <Link href="/resources" ><li className={`menuItems ${router.pathname === '/resources' ? 'menuActive' : 'menuHover'}`}>Resources</li></Link>
      <Link href="/ladiesboard" ><li className={`menuItems ${router.pathname === '/ladiesboard' ? 'menuActive' : 'menuHover'}`}>Ladies Board</li></Link>
    </ul>
    </div>
  )
}

export default MenuItems