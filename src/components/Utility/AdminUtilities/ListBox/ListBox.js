import React from 'react'
import globalStyles from '../../../Admin/adminGlobalstyles.module.css'
import Link from 'next/link'

const ListBox = (props) => {
  return (
    <Link href={props.href}>
     <div className={globalStyles.ListBox}>
      <h3 className='text-center'>{props.title}</h3>
    </div>
    </Link>
  )
}

export default ListBox