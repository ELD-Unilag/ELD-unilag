import React from 'react'
import ResponsiveImage from '../ResponsiveImage'
import Pic from '../../../../public/images/admin/demo1.png'
import DeleteIcon from '../../../../public/images/admin/deleteicon.svg'
import styles from './deletebox.module.css'

const DeletePicBox = ({img, idx, handleDelete}) => {
  return (
    <div className='flex-col  w-fit'>
     <ResponsiveImage 
      src={img}
      style={styles.img}
      alt='previewImage'
      addon={styles.imgExtra}
     />
     <div className='w-fit mx-auto mt-3' onClick={() => handleDelete(idx)}>
      <ResponsiveImage 
       src={DeleteIcon}
       style={styles.deleteIcon}
       alt='delete_Icon'
      />
     </div>
    </div>
  )
}

export default DeletePicBox