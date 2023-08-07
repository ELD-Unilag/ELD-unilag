import ResponsiveImage from '@/components/Utility/ResponsiveImage'
import hand from '../../../../public/images/homeImages/flipcards/Hand.png'
import styles from './flipCards.module.css'
import React from 'react'

const CardImage = ({bg, src, titleColor, title, imageStyle}) => {
  return (
    <div className={`w-full h-full ${bg} rounded-[15px] flex items-center justify-center absolute inset-0`}> 
     <div className='w-fit flex-col items-center justify-center'>
      <ResponsiveImage 
       src={src}
       style={imageStyle}
      />
      <h3 className={`tracking-[2px] text-[10px] font-semibold font-satoshi ${titleColor} uppercase cursor-pointer lg:text-sm lg:font-medium`}>{title}</h3>
     </div>
    </div>
  )
}

export default CardImage