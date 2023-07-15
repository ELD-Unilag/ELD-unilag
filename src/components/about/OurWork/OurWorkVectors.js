import React from 'react'
import Image from 'next/image'

const OurWorkVectors = () => {
  return (
    <>
        {/* connect with us here */}
        <div className='absolute bottom-2 left-[15%] hidden md:flex'>

            <button className='relative'>
                <Image 
                    width={400} 
                    height={100} 
                    src='/images/aboutImages/ourworkVec4.png' 
                    className='pr-32'
                    alt='vector 4'
                /> 
                <p className='font-satoshi absolute top-[37%] left-[15%] text-white'>Connect with us here</p>
            </button>
            <Image 
                width={150} 
                height={100} 
                src='/images/aboutImages/ourworkVec2.png' 
                className='translate-y-5'
                alt='vector 2'
            />
        </div>

        {/* Learn More */}
        <div className='absolute bottom-[180px] right-[100px] md:right-[200px] scale-75 md:scale-100 flex items-center cursor-pointer'>
            <p className='font-grotley text-headerPink text-lg pr-5'>Learn More</p>
            <Image 
                width={50} 
                height={20} 
                src='/images/aboutImages/ourworkVec3.png' 
                className=''
                alt='vector 3'
            />
        </div>
    </>
  )
}

export default OurWorkVectors