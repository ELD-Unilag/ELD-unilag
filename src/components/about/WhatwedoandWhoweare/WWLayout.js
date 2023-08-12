import React from 'react'
import Box from './Box'
import cloud from '../../../../public/images/aboutImages/wwsection/cloud.svg';
import arc from '../../../../public/images/aboutImages/wwsection/arc.svg'
import arcLarge from '../../../../public/images/aboutImages/wwsection/arcLarge.svg'
import fan from '../../../../public/images/aboutImages/wwsection/fanlike.png'
import styles from './ww.module.css';
import ResponsiveImage from '@/components/Utility/ResponsiveImage';
import { useState, useEffect } from 'react';
import Illustration from './Illustration';
import data from './Data';
const WWLayout = () => {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    }

    // Initial size on component mount
    handleResize();

    // Event listener to update on resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const arcImg = screenSize.width >= 1024 ? arcLarge : arc 

  return (
    <section className='mt-[116px] px-5 pb-20 lg:flex lg:justify-center lg:mt-[200px]'>
     <div className='mb-[164px] relative h-fit w-fit mx-auto lg:mx-0 lg:mb-0 lg:mr-10'>
      <Box 
        header={data[0].header}
        para={data[0].para}
      />
      <Illustration />
      <ResponsiveImage 
       src={cloud}
       style={styles.cloud}
       alt='cloud'
      />
      <ResponsiveImage 
       src={arcImg}
       style={styles.arc}
       alt='arc'
      />
     </div>
     <div className='relative w-fit mx-auto lg:mx-0 lg:mt-28'>
      <Box 
        header={data[1].header}
        para={data[1].para}
      />
      <ResponsiveImage 
        src={fan}
        style={styles.fan}
        alt='fan'
      />
     </div>
    </section>
  )
}

export default WWLayout