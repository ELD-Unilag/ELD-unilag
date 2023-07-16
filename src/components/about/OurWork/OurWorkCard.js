import React from 'react'
import Image from 'next/image'

const OurWorkCard = ({item}) => {


  return (
    <div className={item.bgColor + " w-[80%] lg:w-[95%] h-[500px] rounded-3xl font-satoshi m-auto"}>
        <div className='w-full h-[55%] rounded-t-3xl bg-black relative'>
            <Image fill src={item.imgURL} className='absolute top-0 left-0' alt='event image'/>
        </div>
        <div className='w-full h-[45%] rounded-b-3xl px-[25px] py-[15px] border-x-2 border-b-4 border-t-0 border-black relative'>
            <h3 className='font-grotley text-base md:text-xl lg:text-lg xl:text-xl  tracking-wide capitalize pb-2'>
                {item.title}
            </h3>
            <div className='flex pb-2 items-center'>
                <Image width={25} height={30} alt='calender icon' src='/images/aboutImages/ourworkVec5.png' className='pr-2 -translate-y-[1px]'/>
                <p className='font-extralight text-xs xl:text-sm 2xl:text-base'>{item.date}</p>
            </div>
            <p className='pb-5 xl:pb-3 font-light leading-4 md:leading-5 text-xs md:text-base lg:text-sm xl:text-base'>
                {item.description}  
            </p>
            <button className='eldButton scale-75 -translate-x-4 md:-translate-x-0 md:scale-100 xl:py-3 text-sm pb-3'>
                View Activity
            </button>

            {/* Lower Half Vector */}

            <div className='hidden lg:block'>
            <Image width={25} height={20} alt='arrow up' src='/images/aboutImages/ourworkVec1.png' className='absolute top-3 right-6'/>
            </div>

            
        </div>
    </div>
  )
}

export default OurWorkCard