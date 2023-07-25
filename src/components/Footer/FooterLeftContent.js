import React from 'react'
import Logo from '../Utility/Logo'
import { useState } from 'react'
import Image from 'next/image'


const FooterLeftContent = () => {
 const [email, setEmail] = useState("")

  const submitform = (e) =>{
    setEmail("")
  }
  return (
     <>
       <div className='w-full font-satoshi md:flex-1 mb-[60px]'>
          {/* Logo DIV */}
          <Logo />
          {/* Footer Title */}
          <div className='pb-6 mt-10 md:mt-20'>
            <h1 className='text-2xl md:text-3xl pb-2 capitalize font-bold leading-none'>Subscribe to our newsletter</h1>
            <h6 className='text-xs md:text-sm font-normal'>For updates and freebies</h6>
          </div>
          {/* Newsletter input and button */}
          <div className='flex items-center'>
            <form>
              <input 
                type="email" 
                className='bg-white px-4 sm:px-6 py-2 m-auto mr-2 border-[2px] border-black outline-none rounded-3xl text-black w-[200px] md:w-[290px]' 
                placeholder='Email Address' 
                onChange={(e) => setEmail(e.target.value)} 
                value={email} 
                required/>
            </form>
            <button type='submit'>
              <div className='relative w-[65px] h-11'>
                <Image fill={true} alt='social icon' className='object-fill cursor-pointer' src="/images/footerImages/send.png"/>
              </div>
            </button>
          </div>
        </div>
     </>
  
  )
}


export default FooterLeftContent;