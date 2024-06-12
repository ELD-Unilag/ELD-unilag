import React from 'react'
import FooterSocialMediaIcon from './FooterSocialMediaIcon'
import {  socialLinks } from './footerData'
import Image from 'next/image'

const FooterRightContent = () => {

 
 const eldPhone = "+234 908 917 2746"
 const eldEmail = "contact@eld.gmail.com"
 
  return (
    <>
     <div className='w-full flex flex-row-reverse justify-between md:block md:flex-1'>
        <div className='pb-10 flex-1 sm:scale-110 md:scale-100'>
          {/* ELD email */}
          <div className='flex items-center justify-end mb-2 '>
            <p className='text-xs sm:text-sm md:text-base font-extralight pr-2 tracking-wide'>
              {eldEmail}  
            </p>
            <div className='relative w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center'>
              <Image fill={true} alt='social icon' className='object-fill cursor-pointer' src="/images/footerImages/Mail.png"/>
            </div>
          </div>
       
          {/* ELD phone */}
          <div className='flex items-center justify-end'>
            <p className='text-xs sm:text-sm md:text-base font-extralight pr-2 tracking-wide'>
              {eldPhone} 
            </p>
            <div className='relative w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center'>
              <Image fill={true} alt='social icon' className='object-fill cursor-pointer' src="/images/footerImages/Phone.png"/>
            </div>
          </div>
        </div>
          
        {/* Social section */}

        <div className='flex flex-1 md:justify-end sm:scale-110 md:scale-100'>
          <div>
            <button 
              className='relative w-[150px] h-[40px] scale-75 sm:scale-100 -translate-x-4 sm:-translate-x-0 bg-eldYellow mb-3 sm:mb-6 text-eldBlack rounded-3xl border-[2px] border-black -rotate-2 font-semibold md:ml-12'> 
              Follow Us! 
              <Image width={24} height={24} className='absolute right-1 top-0 -translate-y-3' src="/images/footerImages/footerVector1.png" alt="" />
            </button>
            <div className='flex w-max justify-around md:justify-between items-center md:pl-12 pb-16'>

              {/* Generate social icons */}

              {socialLinks.map((item) => (
              <a key={item.social} href={item.socialUrl}>
                <FooterSocialMediaIcon src={item.imageUrl} />
              </a>
             ))}
            </div>
          </div>
        </div>
     </div>
    </>
  )
}

export default FooterRightContent

