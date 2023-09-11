import React from 'react'
import cloud1 from '../../../../public/images/ladiesboard/hero/cloud1.png'
import cloud2 from '../../../../public/images/ladiesboard/hero/cloud2.png'
import star from '../../../../public/images/ladiesboard/hero/star.png'
import ResponsiveImage from '@/components/Utility/ResponsiveImage'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className='bg-primaryBg h-64 w-full border-b-2 border-barBg relative overflow-x-hidden whitespace-nowrap lg:h-[350px]'>
     <div className="flex h-full flex-col items-center justify-center text-white font-satoshi">
      <div className='relative w-fit'>
        <h2 className='font-bold text-[2.5rem] mb-2.5 lg:text-7xl'>Ladies Board</h2>
        <ResponsiveImage  
            src={cloud1}
            style={styles.topcloud}
            alt='cloud'
        />
        <ResponsiveImage 
            src={cloud1}
            style={styles.topcloud2}
            alt='cloud'
        />
        <ResponsiveImage 
          src={star}
          style={styles.herostar}
          alt='star'
        />
      </div>
       <p className='text-center w-full whitespace-normal px-5 text-xs font-normal lg:text-base lg:max-w-[716px] lg:px-0'>Lorem ipsum dolor sit amet consectetur. Est mattis dignissim consectetur nulla platea. Amet faucibus leo aenean ante in nunc laoreet.</p>
     </div>
     <ResponsiveImage 
        src={cloud1}
        style={styles.bottomcloud}
        alt='cloud'
     />
     <ResponsiveImage 
          src={cloud2}
          style={styles.bottomcloud2}
          alt='cloud'
     />
    </section>
 
  )
}

export default Hero