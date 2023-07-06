import React, { useState } from 'react'

const footer = () => {
  const [email, setEmail] = useState("")

  const submitform = (e) =>{
    setEmail("")
  }

  const eldPhone = "+234 908 917 2746"
  const eldEmail = "contact@eld.gmail.com"

  const socialLinks =[
    {
      social:"Instagram",
      imageUrl:"/images/footerImages/instagramIcon.png",
      socialUrl:""
    },
    {
      social:"Facebook",
      imageUrl:"/images/footerImages/facebookIcon.png",
      socialUrl:""
    },
    {
      social:"Twitter",
      imageUrl:"/images/footerImages/twitterIcon.png",
      socialUrl:""
    },
    {
      social:"LinkedIn",
      imageUrl:"/images/footerImages/linkedinIcon.png",
      socialUrl:""
    },

  ]


  return (
   <>
    <footer  className='relative bg-[url("/images/footerImages/footerBgImage.png")] bg-center bg-cover pb-10 pt-28 px-10 text-white font-grotley '>
      <div className='flex w-full justify-between items-start px-14'>

        {/* Left Side */}

        <div className='flex-1 w-full'>
          {/* Logo DIV */}
          <div className='w-max flex pb-10 items-center'>
            <img className='w-20 pr-1' src="/images/footerImages/eldLogo.png" alt="" />
            <div>
              <p className='text-xl leading-none font-satoshi font-medium'>Engineering</p>
              <p className='text-xl leading-none font-satoshi font-medium'>Ladies</p>
              <p className='text-xl leading-none font-satoshi font-medium'>Day</p>
            </div>
          </div>

          {/* Footer Title */}
          <div className='pb-6'>
            <h1 className='capitalize text-2xl font-extrabold tracking-wider pb-1'>Subscribe To our Newsletter</h1>
            <h6 className='text-sm font-normal'>For updates and freebies</h6>
          </div>

          {/* Newsletter input and button */}
          <div className='flex items-center'>
            <form>
              <input type="text" 
                className='bg-white px-6  py-2 m-auto mr-2 border-[2px] border-black outline-none rounded-3xl text-black w-[240px]' 
                placeholder='Email Address' 
                onChange={(e) => setEmail(e.target.value)} 
                value={email} 
                required/>
            </form>
            <button type='submit' onClick={submitform}>
              <img className='w-[70px]' src="/images/footerImages/send.png" alt="" />
            </button>
          </div>
        </div>

        {/* Right Side */}

        <div className='flex-1 '>
          <div className='pb-10'>
            {/* ELD email */}
            <div className='flex items-center justify-end '>
              <p className='text-base font-extralight pb-2 pr-2 tracking-wide'>
                {eldEmail}  
              </p>
              <span>
                <img className='w-8 pb-2' src="/images/footerImages/Mail.png" alt="" />
              </span>
            </div>
         
            {/* ELD phone */}
            <div className='flex items-center justify-end'>
              <p className='text-base font-extralight pb-2 pr-2 tracking-wide'>
                {eldPhone} 
              </p>
              <span>
                <img className='w-8 pb-2' src="/images/footerImages/Phone.png" alt="" />
              </span>
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
                  <img className='w-[65px] pl-4' src={item.imageUrl} alt="" />
                </a>
               ))}

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copywright */}

      <div className='w-full border-1px border-t-white border-t box-border pt-4 flex justify-between font-extralight text-xs'>
        <p>ELD Web Team</p>
        <p>&copy; ELD Frontend Team </p>
      </div>

      {/* Vectors */}

      <a href='#' className='absolute top-0 right-[46%] -translate-y-8'>
        <img className=' w-[70px]' src="/images/footerImages/footerBackToTop.png" alt="" />
      </a>
      <img className='absolute right-[45%] top-[35%] w-10 ' src="/images/footerImages/footerVector2.png" alt="" />

    </footer>
   </>
  )
}
export default footer