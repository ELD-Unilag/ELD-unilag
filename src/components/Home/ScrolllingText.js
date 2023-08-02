import React from 'react'
import Image from 'next/image'

const ScrolllingText = ({bgImageIndex}) => {
  return (
    <div className='flex items-center'>
        <p>Our WCW for this week !! </p>
        <div className='w-10'>
            <Image width={50} height={50} src={"/images/homeImages/wcwVector"+bgImageIndex+".png"} alt='vector' className='object-fill translate-x-10'/>
        </div>
    </div>
  )
}

export default ScrolllingText