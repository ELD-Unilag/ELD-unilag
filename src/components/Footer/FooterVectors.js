import React from 'react'
import Image from 'next/image'

const FooterVectors = () => {
  return (
    <>
     <a href='#' className='absolute top-0 left-[50%] translate-x-[-50%] -translate-y-8'>
       <Image width={70} height={70} className=' w-[70px]' src="/images/footerImages/footerBackToTop.png" alt="" />
     </a>
     <div className='absolute right-[45%] top-[55%] md:top-[35%] w-6 h-6 md:w-10 -z-10 md:h-10'>
        <Image fill className='' src="/images/footerImages/footerVector2.png" alt="" />
     </div>
    </>
  )
}

export default FooterVectors