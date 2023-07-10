import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { useRouter } from "next/router";


// the logo div  should be in its own component since it will be used in the footer section too


export default function Nav() {
  const router = useRouter()
  return (
    <nav className="text-white bg-primaryBg ">
      <div className="container flex items-center justify-between py-6">
        <Logo />
        <ul className="flex gap-10 text-sm font-satoshi font-medium">
          <Link href="/" ><li className={`menuItems ${router.pathname === '/' ? 'menuActive' : 'menuHover'}`}>Home</li></Link>
          <Link href="/about" ><li className={`menuItems ${router.pathname === '/about' ? 'menuActive' : 'menuHover'}`}>About</li></Link>
          <Link href="/donations" ><li className={`menuItems ${router.pathname === '/donations' ? 'menuActive' : 'menuHover'}`}>Donations</li></Link>
          <Link href="/activities" ><li className={`menuItems ${router.pathname === '/activities' ? 'menuActive' : 'menuHover'}`}>Activities</li></Link>
          <Link href="/resources" ><li className={`menuItems ${router.pathname === '/resources' ? 'menuActive' : 'menuHover'}`}>Resources</li></Link>
          <Link href="/ladiesboard" ><li className={`menuItems ${router.pathname === '/ladiesboard' ? 'menuActive' : 'menuHover'}`}>Ladies Board</li></Link>
        </ul> 
      </div>      
    </nav>
  )
}


