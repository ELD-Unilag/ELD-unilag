import Image from 'next/image'
import React from 'react'
import ScrolllingText from './ScrolllingText'

const SlidingText = () => {
  return (
    <div className='overflow-hidden flex whitespace-nowrap w-full'>
        <div className='scrolling-text text flex'>
            <ScrolllingText/>
            <ScrolllingText/>
            <ScrolllingText/>
            <ScrolllingText/>
            <ScrolllingText/>
        </div>
        <div className='scrolling-text text flex'>
            <ScrolllingText/>
            <ScrolllingText/>
            <ScrolllingText/>
            <ScrolllingText/>
            <ScrolllingText/>
        </div>
    </div>
  )
}

export default SlidingText