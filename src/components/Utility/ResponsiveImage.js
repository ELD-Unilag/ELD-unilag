import React from 'react'
import Image from 'next/image'

const ResponsiveImage = (props) => {
  return (
   <div className={`${props.style}`}>
   <Image fill={true} alt='social icon' className='object-fill cursor-pointer' src={props.src}/>
  </div>
  )
}

export default ResponsiveImage