import React from 'react'
import Image from 'next/image'

const SuperheroCard = ({item}) => {

    const upperCardStyles = 'h-[65%] rounded-t-3xl relative'
    const cardBackground = `bg-${item.bgColor}`
    const completeStyles = cardBackground +" "+ upperCardStyles

  return (
    <>
        <div className='w-[85%] xl:w-[90%] lg:w-[80%] h-[530px] xl:h-[450px] lg:h-[400px] font-satoshi'>
            <div className={completeStyles}>
                <Image fill src='/images/aboutImages/superheroSample.png' className='absolute z-10 top-0 left-0'/>
                <Image width={70} height={70} src='/images/aboutImages/superheroesVec3.png' className='absolute top-16 left-5'/>

            </div>
            <div className='h-[35%] bg-eldYellow rounded-b-2xl relative border-[2px] border-black border-t-0 px-2'>
                <div className='absolute z-20 top-0 w-[70%] left-[15%] text-center py-2 px-6 xl:px-4 lg:px-3 bg-white text-black -translate-y-5 rounded-3xl border-[2px] border-black -rotate-2'>
                    <p className='font-semibold tracking-tighter xl:text-sm lg:text-xs' >{item.position}</p>
                </div>
                <div className='w-max m-auto text-center pt-10'>
                    <h3 className='font-semibold xl:text-sm lg:text-xs'>{item.name}</h3>
                    <p className='font-extralight xl:text-sm lg:text-xs'>{item.department}</p>
                    <p className='font-extralight xl:text-sm lg:text-xs'>{item.level}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default SuperheroCard