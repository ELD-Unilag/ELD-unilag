import React from 'react'
import Image from 'next/image'

const HomeSocialIcon = ({props}) => {
  return (
    <div>
     <Image width={40} height={40} alt='social icon' className='cursor-pointer' src={props.imageUrl}/>
    </div>
  )
}

export default HomeSocialIcon