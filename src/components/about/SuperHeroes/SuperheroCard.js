import React from 'react'
import Image from 'next/image'

const SuperheroCard = ({item}) => {

  return (
    <>
        <div className='w-full sm:w-[80%] md:w-[95%] lg:w-[90%] xl:w-[85%] h-[350px] sm:h-[400px] md:h-[450px] xl:h-[530px]  font-satoshi'>
            <div className={item.bgColor +" h-[65%] rounded-t-2xl md:rounded-t-3xl relative"}>
                <Image alt='superhero' fill src='/images/aboutImages/superheroSample.png' className='absolute z-10 top-0 left-0'/>
                <Image alt='superhero vector' width={70} height={70} src='/images/aboutImages/superheroesVec3.png' className='absolute top-16 left-5'/>

            </div>
            <div className='h-[35%] bg-eldYellow rounded-b-2xl relative border-[2px] border-black border-t-0 px-2'>
                <div className='absolute z-20 top-0 w-[70%] left-[15%] text-center py-2 px-3 lg:px-6 xl:px-6 bg-white text-black -translate-y-5 rounded-3xl border-[2px] border-black -rotate-2'>
                    <p className='font-semibold tracking-tighter text-xs lg:text-sm' >{item.position}</p>
                </div>
                <div className='w-max m-auto text-center pt-8 lg:pt-10'>
                    <h3 className='font-semibold xl:text-base lg:text-sm text-xs'>{item.name}</h3>
                    <p className='font-extralight xl:text-base lg:text-sm text-xs'>{item.department}</p>
                    <p className='font-extralight xl:text-base lg:text-sm text-xs'>{item.level}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default SuperheroCard