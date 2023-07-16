import React from "react";
import Logo from "./Logo";
import { useState } from "react";
import MenuItems from "./menuItems";
import MenuBar from "./MenuBar";


// the logo div  should be in its own component since it will be used in the footer section too


export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleMenu(){
    setIsOpen(state => !state)
  }
  return (
    <nav className="text-white bg-primaryBg ">
      <div className="container flex items-center justify-between py-6">
        <Logo />
        <MenuItems 
            isOpen = {isOpen}
        />
        <MenuBar 
            toggleMenu = {toggleMenu}
            isOpen={isOpen}
        />
      </div>      
    </nav>
  )
}


