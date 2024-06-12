import React from 'react'
import Image from 'next/image'

const ResponsiveImage = (props) => {
  return (
   <div className={`${props.style}`}>
   <Image fill={true} alt={props.alt} className={`'object-fill  ${props.addon ? props.addon : ''}`} src={props.src} sizes='100%' />
  </div>
  )
}

export default ResponsiveImage