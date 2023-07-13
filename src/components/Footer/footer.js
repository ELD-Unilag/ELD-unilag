import React, { useState } from 'react'
import Logo from '../Utility/Logo'
import FooterLeftContent from './FooterLeftContent'
import FooterRightContent from './FooterRightContent'
import FooterCopywright from './FooterCopywright'
import FooterVectors from './FooterVectors'


const Footer = () => {
  const [email, setEmail] = useState("")

  const submitform = (e) =>{
    setEmail("")
  }



  return (
   <>
    <footer  className='relative bg-[url("/images/footerImages/footerBgImage.png")] bg-top bg-cover pb-10 mt-16 pt-28 text-white font-grotley '>
      <div className='container'>
        <div className='flex w-full justify-between items-start px-14'>
          <FooterLeftContent />
          {/* Right Side */}
          <FooterRightContent />
        </div>
        {/* Bottom Copywright */}
        <FooterCopywright />
        {/* Vectors */}
        <FooterVectors />            
      </div> 
    </footer>
   </>
  )
}
export default Footer;