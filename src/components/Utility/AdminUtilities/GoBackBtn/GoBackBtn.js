import React from 'react'
import ResponsiveImage from '../../ResponsiveImage'
import Btn from '../../../../../public/images/admin/goback.svg'
import styles from './goback.module.css'
import { useRouter } from 'next/router'

const GoBackBtn = () => {
 const router = useRouter()
  return (
   <div className='w-fit h-fit mb-5 hidden lg:block' onClick={() => router.back()} >
    <ResponsiveImage 
      src={Btn}
      style={styles.img}
      alt='back'
    />
   </div>
  )
}

export default GoBackBtn