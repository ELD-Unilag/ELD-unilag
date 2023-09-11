import React from 'react'
import SuperGrid from './SuperGrid'
import crown from '../../../../public/images/aboutImages/superheroCrown.png'
import Image from 'next/image'
import SuperheroesVectors from './SuperheroesVectors'
import ResponsiveImage from '@/components/Utility/ResponsiveImage'
import styles from './Superheroes.module.css'


const superheroes = () => {
    
  return (
    <>
    <div className='py-10 px-[20px] mb-[170px] sm:px-[50px] md:px-[150px] lg:px-[200x] relative mt-24'>
        <div className='relative w-fit h-fit mb-[3.12rem]'>
          <h3 className='text-[2.1875rem] font-satoshi font-bold flex flex-col leading-none'>Meet 
          <span>The Superheroes</span></h3>
          <ResponsiveImage 
            src={crown}
            alt={'crown'}
            style={styles.crown}
          />
        </div>
        <SuperGrid/>
        <SuperheroesVectors/>
    </div>
    </>
  )
}

export default superheroes