import React, { useState } from 'react'

const footer = () => {
  const [email, setEmail] = useState("")

  const submitform = (e) =>{
    setEmail("")
  }


  return (
   <>
    <footer className='bg-headerPink pt-10 pb-0 w-full text-white font-satoshi rounded-t-2xl'>
      <div>
          {/* Title and Eld Logo */}
        <div className='flex justify-between items-center px-10 pb-10 relative'>
          <div>
            <h1 className='capitalize text-4xl font-bold'>Subscribe To our Newsletter</h1>
            <h6 className='text-sm font-normal'>For updates and freebies</h6>
          </div>
          <div>
            <img src="/images/footerImages/eldLogoFooter.png" alt="eldLogo" className='w-full h-full'/>
          </div>

          {/* Vector */}

          <img className='absolute left-[60%] top-4 w-7' src="/images/footerImages/footerVector3.svg" alt="" />
        </div>

          {/* Email Input and Submit */}

        <div className='flex w-full px-0 py-5 justify-between'>
          <div className='flex-[2] border border-[#00000036] border-x-0 h-20 flex items-center'>
            <form>
              <input type="text" 
                className='bg-headerPink p-3 text-2xl m-auto border-none outline-none ml-16 font-bold text-[#D2C2C5]' 
                placeholder='yourname@email.com' 
                onChange={(e) => setEmail(e.target.value)} 
                value={email} 
                required/>
            </form>
          </div>
          <div className='flex-1 border border-[#00000036] border-r-0 flex items-center justify-center '>
            <button 
              className='w-[150px] h-[40px] bg-white text-headerPink rounded-3xl border-b-[3px] border-black' 
              onClick={submitform}>Submit</button>
          </div>
        </div>


          {/* Social Section */}

        <div className='w-full py-4 pl-6 relative'>
          <button 
            className='relative w-[150px] h-[40px] bg-white mb-6 text-headerPink rounded-3xl border-[2px] border-black -rotate-3 font-semibold' 
          > Follow Us! 
            <img className='absolute right-2 top-0 w-5 -translate-y-2' src="/images/footerImages/footerVector3.svg" alt="" />
          </button>
          <div className='flex w-max justify-between items-center pl-12 pb-16'>
            {/*  */}

            <a href="">
              <img className='w-[90px] pr-8' src="/images/footerImages/instagramIcon.png" alt="" />
            </a>

            {/*  */}

            <a href="">
              <img className='w-[90px] pr-8' src="/images/footerImages/facebookIcon.png" alt="" />
            </a>

            {/*  */}

            <a href="">
              <img className='w-[90px] pr-8' src="/images/footerImages/twitterIcon.png" alt="" />
            </a>
          </div>

          {/* social vectors */}
          <img className='absolute right-0 top-8 w-[280px]' src="/images/footerImages/footerVector1.png" alt="" />
          <img className='absolute left-[35%] top-4 w-8' src="/images/footerImages/footerVector2.png" alt="" />
        </div>  


          {/* Bottom 3 Nav and Links */}

        <div className='flex justify-between items-start border border-[#00000036] border-x-0 border-b-0 w-full h-[220px] text-white'>

          {/* Navigation Item */}

          <div className='flex-1 pt-5 px-4 text-center pb-3'>
            <div className='flex items-center mx-auto w-max'>
              <h3 className='text-xl font-semibold pb-2 pr-2 inline '>
                Navigation  
              </h3>
              <span><img className='w-4 pb-2' src="/images/footerImages/yellowHeart.png" alt="" /></span>
            </div>
            
            <ul className='font-light'>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Donations</a></li>
              <li><a href="">Activities</a></li>
              <li><a href="">Resources</a></li>
              <li><a href="">Ladies Board</a></li>
            </ul>
          </div>

          {/*  */}

          <div id='vertical-rule' className='h-full w-[1px] bg-[#00000036]'></div>

          {/* Links Item */}

          <div className='flex-1 pt-5 px-4 text-center pb-3'>
            <div className='flex items-center mx-auto w-max'>
              <h3 className='text-xl font-semibold pb-2 pr-2 inline '>
                Links 
              </h3>
              <span><img className='w-4 pb-1' src="/images/footerImages/blueCircle.png" alt="" /></span>
            </div>
            <ul className='font-light'>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Donations</a></li>
              <li><a href="">Activities</a></li>
              <li><a href="">Resources</a></li>
            </ul>
          </div>

          {/*  */}

          <div id='vertical-rule' className='h-full w-[1px] bg-[#00000036]'></div>

          {/* Enquiries Item */}

          <div className='flex-1 pt-5 px-4 text-center pb-3'>
            <div className='flex items-center mx-auto w-max'>
              <h3 className='text-xl font-semibold pb-2 pr-2 inline '>
                Enquiries  
              </h3>
              <span><img className='w-4 pb-2' src="/images/footerImages/halfMoon.png" alt="" /></span>
            </div>
            <ul className='font-light'>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Donations</a></li>
              <li><a href="">Activities</a></li>
            </ul>
          </div>

          {/*  */}

        </div>
      </div>
    </footer> 
   </>
  )
}

export default footer