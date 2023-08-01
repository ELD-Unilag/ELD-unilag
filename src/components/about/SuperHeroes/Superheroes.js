import React from 'react'
import SuperGrid from './SuperGrid'
import Image from 'next/image'
import SuperheroesVectors from './SuperheroesVectors'


const superheroes = () => {
    
  return (
    <>
    <div className='py-10 px-[20px] mb-[170px] sm:px-[50px] md:px-[150px] lg:px-[200x] relative'>
        <div className='flex items-center pb-[100px]'>
            <h2 className='text-lg md:text-2xl lg:text-3xl xl:text-4xl font-satoshi pr-10 font-bold'>
                Meet The Superheroes 
            </h2>
            <Image
                className=''
                src='/images/aboutImages/superheroCrown.png' 
                alt='crown picture' 
                width={70} 
                height={70}
            />
        </div>
        <SuperGrid/>
        <SuperheroesVectors/>
    </div>
    </>
  )
}

export default superheroes