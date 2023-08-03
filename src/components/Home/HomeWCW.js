import React from 'react'
import SlidingText from './SlidingText'
import HomeWCWLeftContent from './HomeWCWLeftContent'
import HomeWCWRightContent from './HomeWCWRightContent'
import Image from 'next/image'
const HomeWCW = () => {
  return (
    <div className='my-16 font-satoshi'>
        <div className='w-full p-4 bg-black text-white '>
            <SlidingText bgImageIndex={'3'}/>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center h-max'>
           <HomeWCWLeftContent/>
           <HomeWCWRightContent/>
        </div>
        <div className='flex justify-between relative'>

            <div className='bg-[#FCF7F0] p-4 flex-1 w-[50%]'>
              <SlidingText  bgImageIndex={'5'}/>
            </div>
            <div className='bg-eldLightBrown p-4 flex-1 w-[50%]'>
              <SlidingText  bgImageIndex={'1'}/>
            </div>

            <div className='absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]'>
              <Image width={100} height={100} src="/images/homeImages/Illustration.png"/>
            </div>
        </div>
    </div>
  )
}

export default HomeWCW