import React from 'react'
import Image from 'next/image'

const FooterSocialMediaIcon = (props) => {
  return (
    <div className='relative w-7 h-7 sm:w-10 sm:h-10 mr-3'>
     <Image fill={true} alt='social icon' className='object-fill cursor-pointer' src={props.src}/>
    </div>
  )
}

export default FooterSocialMediaIcon

