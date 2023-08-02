
import React from 'react'
import SlidingText from './SlidingText'
import HomeWCWLeftContent from './HomeWCWLeftContent'
import HomeWCWRightContent from './HomeWCWRightContent'

const HomeWCW = () => {
  return (
    <div className='my-16 font-satoshi'>

        <div className='w-full p-5 bg-black text-white '>
            <SlidingText/>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center h-max'>
           <HomeWCWLeftContent/>
           <HomeWCWRightContent/>
        </div>
    </div>
  )
}

export default HomeWCW