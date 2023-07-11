import React from 'react'
import Image from 'next/image'

const SuperheroesVectors = () => {
  return (
    <>
        <Image 
        className='absolute -z-10 right-[33%] top-[8%]'
        src='/images/aboutImages/superheroesVec1.png' 
        alt='flower' 
        width={140} 
        height={140}/>

        <Image 
        className='absolute -z-10 left-0 top-[70%]'
        src='/images/aboutImages/superheroesVec2.png' 
        alt='vector2' 
        width={150} 
        height={150}/>

        <Image 
        className='absolute -z-10 right-[15%] top-8'
        src='/images/aboutImages/superheroesVec4.png' 
        alt='vector4' 
        width={40} 
        height={40}/>
    </>
  )
}

export default SuperheroesVectors