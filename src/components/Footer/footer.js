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
    <footer  className='relative -z-20 bg-[url("/images/footerImages/footerBgImageSmall.png")] md:bg-[url("/images/footerImages/footerBgImage.png")] bg-top bg-cover pb-10 mt-10 pt-28 text-white font-grotley'>
      <div className='container'>
        <div className='flex flex-col md:flex-row w-full justify-between items-end px-4 md:px-8 lg:px-10 xl:px-24' >
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