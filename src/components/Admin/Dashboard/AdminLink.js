import React from 'react'
import Link from 'next/link'
import styles from './dashboard.module.css'

const AdminLink = ({name, routeName}) => {
  return (
   <Link href={routeName} >
    <div className={styles.linkBox}>
     <h3>{name}</h3>
    </div>
   </Link>
  )
}

export default AdminLink