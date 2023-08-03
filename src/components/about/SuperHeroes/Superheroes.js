import React from 'react'
import SuperGrid from './SuperGrid'
import Image from 'next/image'
import SuperheroesVectors from './SuperheroesVectors'


const superheroes = () => {
    
  return (
    <>
    <div className='py-10 px-[20px] mb-[170px] sm:px-[50px] md:px-[150px] lg:px-[200x] relative mt-24'>
        <div className='flex justify-center items-center pb-[70px]'>
            <h2 className='text-3xl text-center md:text-3xl lg:text-4xl xl:text-5xl font-satoshi font-bold'>
                Meet The Superheroes 
            </h2>
            <Image
                className='pl-5'
                src='/images/aboutImages/superheroCrown.png' 
                alt='crown picture' 
                width={90} 
                height={90}
            />
        </div>
        <SuperGrid/>
        <SuperheroesVectors/>
    </div>
    </>
  )
}

export default superheroes