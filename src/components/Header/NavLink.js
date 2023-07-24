import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NavLink = (props) => {
 const router = useRouter()

  return (
   <Link href={props.routeName} onClick={props.toggleMenu} >
    <li className={`menuItems ${router.pathname === props.routeName ? 'menuActive' : 'menuHover'}`}>{props.name}
    </li>
   </Link>
  )
}

export default NavLink