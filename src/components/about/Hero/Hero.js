import ResponsiveImage from '@/components/Utility/ResponsiveImage'
import React from 'react'
import Bush from '../../../../public/images/aboutImages/hero/bush.png'
import styles from './aboutHero.module.css'
import Logo from '../../../../public/images/aboutImages/hero/eldLogo.svg'
import Qoute from '../../../../public/images/aboutImages/hero/highlight.svg'
import Qmark from '../../../../public/images/aboutImages/hero/questionmark.svg'
import spiral from '../../../../public/images/aboutImages/hero/spiral.svg'
import BushDesktop from '../../../../public/images/aboutImages/hero/bushDesktop.png'

const Hero = () => {
   return (
    <section className='text-white font-satoshi'>
      <div className='overflow-hidden relative w-full h-[268px] bg-aboutBg   bg-center px-5 md:px-24 lg:h-[378px] lg:bg-aboutDesktopBg lg:px-0'>
       <div className='flex lg:max-w-[80%] lg:mx-auto'>
        <div className='flex-grow mt-11 lg:mt-[70px] max-w-[50%] lg:max-w-[60%]'>
          <div className='w-fit  relative'>
          <h2 className='text-4xl lg:text-[65px] font-bold'>About Us</h2>
          <ResponsiveImage 
            src={Qoute}
            style={styles.qoute}
            alt='qoute'
          />
          </div>
          <p className='text-xs leading-4 mt-3 lg:mt-4 lg:text-lg'>
          Lorem ipsum dolor sit amet consectetur. Est mattis dignissim consectetur nulla platea. Amet faucibus leo aenean ante in nunc laoreet.
          </p>
        </div>
        <div className='flex-grow flex justify-end relative'>
          <div className='w-fit h-fit mr-9 mt-[51px] relative lg:mt-[57px]'>
          <ResponsiveImage 
            src={Logo}
            style={styles.logo}
            alt='logo'
          />
          <ResponsiveImage 
            src={Qmark}
            style={styles.qmark}
            alt='questionmark'
          />
          </div>
          <ResponsiveImage 
          src={spiral}
          style={styles.spiral}
          alt='spiral'
          />
        </div>        
       </div> 
       
       <ResponsiveImage 
        src={Bush}
        style={styles.bushImg}
        alt='bush'
       />
       <ResponsiveImage 
        src={BushDesktop}
        style={styles.bushImgDesktop}
        alt='bushImgDesktop'
       />
      </div>
    </section>
  )
}

export default Hero