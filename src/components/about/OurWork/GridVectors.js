import React from 'react'
import Image from 'next/image'

const GridVectors = () => {
  return (
    <>
        <Image 
            className='hidden absolute right-[50%] top-[28%] lg:block'
            src='/images/aboutImages/ourworkVerticalLine.png' 
            alt='vertical line' 
            width={2} 
            height={500}
        />

        <Image 
            className='hidden absolute left-auto right-auto top-[50%] lg:block'
            src='/images/aboutImages/ourworkHorizontalLine.png' 
            alt='horizontal line' 
            width={350} 
            height={2}
        />
    </>
  )
}

export default GridVectors