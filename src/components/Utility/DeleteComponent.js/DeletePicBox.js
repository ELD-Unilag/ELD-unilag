import React from 'react'
import ResponsiveImage from '../ResponsiveImage'
import Pic from '../../../../public/images/admin/demo1.png'
import DeleteIcon from '../../../../public/images/admin/deleteicon.svg'
import styles from './deletebox.module.css'

const DeletePicBox = () => {
  return (
    <div className='flex-col  w-fit'>
     <ResponsiveImage 
      src={Pic}
      style={styles.img}
     />
     <div className='w-fit mx-auto mt-3'>
      <ResponsiveImage 
       src={DeleteIcon}
       style={styles.deleteIcon}
      />
     </div>
    </div>
  )
}

export default DeletePicBox