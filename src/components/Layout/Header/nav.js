import React from "react";
import Logo from "./Logo";
import { useState } from "react";
import MenuItems from "./menuItems";
import MenuBar from "./MenuBar";
import { useEffect } from "react";

// the logo div  should be in its own component since it will be used in the footer section too


export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

// toggle menubar
  function toggleMenu(){
    setIsOpen(state => !state)
  }
//  remove scroll from page body when menu is open    
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [isOpen])

  return (
    <nav className={`text-white bg-primaryBg ${isOpen ? 'sticky top-0 left-0 z-20  ': ''} border-b-[2px] border-navboderbottom`}>
      <div className="layout flex items-center justify-between py-6">
        <Logo />
        <MenuItems 
            isOpen = {isOpen}
            toggleMenu={toggleMenu}
        />
        <MenuBar 
            toggleMenu = {toggleMenu}
            isOpen={isOpen}
        />
      </div>      
    </nav>
  )
}


