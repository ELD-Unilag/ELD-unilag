import React from 'react'
import styles from './deletebox.module.css'
import ResponsiveImage from '../ResponsiveImage'
import DeleteIcon from '../../../../public/images/admin/deleteicon.svg'

const DeleteBox = ({name, idx, handleDelete}) => {
  return (
    <div className='flex items-center mb-5 gap-9'>
     <div className={`${styles.box}`}>
      <h3 className='text-center'>{name}</h3>
     </div>
     <div className='w-fit h-fit' onClick={() => handleDelete(idx)}>
      <ResponsiveImage 
       src={DeleteIcon}
       style={styles.deleteIcon}
       alt='delete_Icon'
      />
     </div>
    </div>
  )
}

export default DeleteBox