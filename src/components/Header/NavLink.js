import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const NavLink = (props) => {
 const router = useRouter()
 const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

 useEffect(() => {
   function handleResize() {
     setScreenSize({ width: window.innerWidth, height: window.innerHeight });
   }

   // Initial size on component mount
   handleResize();

   // Event listener to update on resize
   window.addEventListener('resize', handleResize);

   // Clean up the event listener on component unmount
   return () => {
     window.removeEventListener('resize', handleResize);
   };
 }, []);
 
 function toggleMenu(){
  if(screenSize.width < 1000){
    props.toggleMenu()
  }
 }
  return (
   <Link href={props.routeName} onClick={toggleMenu} >
    <li className={`menuItems ${router.pathname === props.routeName ? 'menuActive' : 'menuHover'}`}>{props.name}
    </li>
   </Link>
  )
}

export default NavLink