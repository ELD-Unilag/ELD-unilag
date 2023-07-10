import React from "react";
import Logo from "../Utility/Logo";

import MenuItems from "./menuItems";



export default function Nav() {
  return (
    <nav className="text-white bg-primaryBg ">
      <div className="container flex items-center justify-between py-2">
        <Logo />
        <MenuItems /> 
      </div>      
    </nav>
  )
}


