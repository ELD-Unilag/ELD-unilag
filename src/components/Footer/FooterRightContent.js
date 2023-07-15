import React from 'react'
import FooterSocialMediaIcon from './FooterSocialMediaIcon'
import {  socialLinks } from './footerData'
import Image from 'next/image'

const FooterRightContent = () => {

 
 const eldPhone = "+234 908 917 2746"
 const eldEmail = "contact@eld.gmail.com"
 
  return (
    <>
     <div className='flex-1 '>
        <div className='pb-10'>
          {/* ELD email */}
          <div className='flex items-center justify-end mb-2 '>
            <p className=' text-base font-extralight pr-2 tracking-wide'>
              {eldEmail}  
            </p>
            <div className='relative w-8 h-8 flex justify-center items-center'>
              <Image fill={true} alt='social icon' className='object-fill cursor-pointer' src="/images/footerImages/Mail.png"/>
            </div>
          </div>
       
          {/* ELD phone */}
          <div className='flex items-center justify-end'>
            <p className='text-base  font-extralight pr-2 tracking-wide'>
              {eldPhone} 
            </p>
            <div className='relative w-8 h-8 flex justify-center items-center'>
              <Image fill={true} alt='social icon' className='object-fill cursor-pointer' src="/images/footerImages/Phone.png"/>
            </div>
          </div>
        </div>
          
        {/* Social section */}

        <div className='flex justify-end'>
          <div>
            <button 
              className='relative w-[150px] ml-12 h-[40px] bg-eldYellow mb-6 text-eldBlack rounded-3xl border-[2px] border-black -rotate-2 font-semibold'> 
              Follow Us! 
              <img className='absolute right-1 top-0 w-6 -translate-y-3' src="/images/footerImages/footerVector1.png" alt="" />
            </button>
            <div className='flex w-max justify-between items-center pl-12 pb-16'>

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

