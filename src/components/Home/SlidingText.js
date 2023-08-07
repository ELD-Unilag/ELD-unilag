
import React from 'react'
import ScrolllingText from './ScrolllingText'

const SlidingText = ({bgImageIndex}) => {
  return (
    <div className='overflow-hidden flex whitespace-nowrap w-full'>
        <div className='scrolling-text text flex'>
            <ScrolllingText bgImageIndex={bgImageIndex}/>
            <ScrolllingText bgImageIndex={bgImageIndex}/>
            <ScrolllingText bgImageIndex={bgImageIndex}/>
            <ScrolllingText bgImageIndex={bgImageIndex}/>
            <ScrolllingText bgImageIndex={bgImageIndex}/>
        </div>
        <div className='scrolling-text text flex'>
            <ScrolllingText bgImageIndex={bgImageIndex}/>
            <ScrolllingText bgImageIndex={bgImageIndex}/>
            <ScrolllingText bgImageIndex={bgImageIndex}/>
            <ScrolllingText bgImageIndex={bgImageIndex}/>
            <ScrolllingText bgImageIndex={bgImageIndex}/>
        </div>
    </div>
  )
}

export default SlidingText