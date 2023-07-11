import React from 'react'
import SuperGrid from './SuperGrid'
import Image from 'next/image'
import SuperheroesVectors from './SuperheroesVectors'


const superheroes = () => {

    // var window = Window
    // var screenSize = window.innerWidth()
    
  return (
    <>
    <div className='py-10 px-[200px] mb-[170px] relative'>
        <div className='flex items-center pb-[100px]'>
            <h2 className='text-4xl font-satoshi pr-10 font-bold'>
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
        <SuperheroesVectors/>s
    </div>
    </>
  )
}

export default superheroes