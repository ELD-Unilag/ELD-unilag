import React from 'react'
import Image from 'next/image'

const HeroImage = (props) => {
  return (
   <div className={`absolute ${props.style}`}>
   <Image fill={true} alt='social icon' className='object-fill cursor-pointer' src={props.src}/>
  </div>
  )
}

export default HeroImage;