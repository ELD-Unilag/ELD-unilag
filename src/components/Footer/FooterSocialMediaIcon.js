import React from 'react'
import Image from 'next/image'

const FooterSocialMediaIcon = (props) => {
 console.log(props.src)
  return (
    <div className='relative w-10 h-10 mr-3'>
     <Image fill={true} alt='social icon' className='object-fill cursor-pointer' src={props.src}/>
    </div>
  )
}

export default FooterSocialMediaIcon

