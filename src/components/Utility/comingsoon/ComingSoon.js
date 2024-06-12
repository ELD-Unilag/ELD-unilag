import React from 'react'
import styles from './comingsoon.module.css'
import icon1 from '../../../../public/images/utility/icon1.svg'
import icon2 from '../../../../public/images/utility/icon2.svg'
import ResponsiveImage from '../ResponsiveImage'
import cloud1 from '../../../../public/images/ladiesboard/hero/cloud1.png'
import cloud2 from '../../../../public/images/ladiesboard/hero/cloud2.png'


const ComingSoon = () => {
  return (
    <section className='w-full min-h-96 h-[60vh] lg:h-[80vh] flex items-center justify-center font-satoshi text-eldPink overflow-hidden'>
      <div className='relative  w-full flex items-center justify-center'> 
        <div className='w-fit text-[40px] font-bold relative leading-none md:text-[65px] lg:text-[80px]'> 
          <h2>Coming Soon...</h2>
          <ResponsiveImage 
            src={icon1}
            style={styles.icon1}
            alt='qoute'
          />
          <ResponsiveImage 
            src={icon2}
            style={styles.icon2}
            alt='spiral'
          />
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
      </div>
    </section>
  )
}

export default ComingSoon