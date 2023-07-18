import React from 'react'
import HeroImage from './HeroImage'
import cloud1 from '../../../../public/images/ladiesboard/hero/cloud1.png'
import cloud2 from '../../../../public/images/ladiesboard/hero/cloud2.png'
import star from '../../../../public/images/ladiesboard/hero/star.png'

const Hero = () => {
  return (
    <section className='bg-primaryBg h-64 w-screen border-b-2 border-barBg relative overflow-hidden lg:h-[350px]'>
     <div className="flex h-full flex-col items-center justify-center text-white font-satoshi">
      <div className='relative w-fit'>
        <h2 className='font-bold text-4xl mb-2.5 lg:text-7xl'>Ladies Board</h2>
        <HeroImage  
            src={cloud1}
            style={'topcloud'}
        />
        <HeroImage 
            src={cloud1}
            style={'topcloud2'}
        />
        <HeroImage 
          src={star}
          style={'herostar'}
        />
      </div>
       <p className='text-center px-5 text-xs font-normal lg:text-base lg:max-w-[716px]'>Lorem ipsum dolor sit amet consectetur. Est mattis dignissim consectetur nulla platea. Amet faucibus leo aenean ante in nunc laoreet.</p>
     </div>
     <HeroImage 
        src={cloud1}
        style={'bottomcloud'}
     />
     <HeroImage 
          src={cloud2}
          style={'bottomcloud2'}
     />
    </section>
  )
}

export default Hero