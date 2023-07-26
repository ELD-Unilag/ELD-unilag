import React from 'react'
import styles from './deletebox.module.css'
import ResponsiveImage from '../ResponsiveImage'
import DeleteIcon from '../../../../public/images/admin/deleteicon.svg'

const DeleteBox = () => {
  return (
    <div className='flex items-center mb-5 gap-9'>
     <div className={`${styles.box}`}>
      <h3 className='text-center'>Awards and Dinner Night</h3>
     </div>
     <div className='w-fit h-fit'>
      <ResponsiveImage 
       src={DeleteIcon}
       style={styles.img}
      />
     </div>
    </div>
  )
}

export default DeleteBox