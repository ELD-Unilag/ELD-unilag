import React from 'react'
import Image from 'next/image'

const HomeWCWRightContent = () => {
  return (
    <div className='flex-1 relative bg-headerPink h-full w-full border-t-4 md:border-t-0 md:border-l-4 py-20 p-0 sm:pr-10 lg:pr-[15%] border-black text-white flex justify-center lg:justify-end overflow-hidden'>
        <div>
            <div className='py-10'>
                <Image width={300} height={300} src="/images/homeImages/homeWCWImage.png"/>
            </div>
            <div className='text-center'>
                <h4 className='text-2xl font-semibold'>Eniola Salau</h4>
                <h6 className='tracking-wider font-thin'>Civil Engineering, 300 LEVEL</h6>
            </div>
        </div>
        <div className='absolute top-10 -right-10'>
            <Image width={100} height={100} src="/images/homeImages/wcwVector2.png"/>
        </div>
    </div>
  )
}

export default HomeWCWRightContent