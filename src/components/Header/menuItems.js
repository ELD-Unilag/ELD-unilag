import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'


const MenuItems = () => {
 const router = useRouter()
  return (
    <div>
     <ul className="flex gap-10 text-sm font-satoshi font-medium">
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