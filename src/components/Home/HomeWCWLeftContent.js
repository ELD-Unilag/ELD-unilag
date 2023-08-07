import React from 'react'
import { socialLinks } from './homedata'
import HomeSocialIcon from './HomeSocialIcon'
import Image from 'next/image'

const HomeWCWLeftContent = () => {
  return (
    <div className='flex-1 w-full h-full py-20 md:py-0 pl-10 lg:pl-[15%]'>
        <div className='flex items-center mb-16'>
            <h2 className='text-5xl font-bold font-satoshi pr-7'>W.C.W</h2>
            <Image width={50} height={50} src="/images/homeImages/Books.svg" alt='books svg'/>
        </div>
        <div className='mb-10'>
           <h4 className='uppercase tracking-[0.15em] text-xl font-thin pb-3'>This Week's</h4>
            <h2 className='text-4xl font-semibold capitalize pb-8'>Woman In Engineering</h2>
           <p className='text-[#4B4B4B] font-light tracking-wide text-lg w-[80%]'>Lorem ipsum dolor sit amet consectetur. Est mattis dignissim consectetur nulla platea. Amet faucibus leo aenean ante in nunc laoreet. Massa volutpat tellus in scelerisque libero aliquet nunc. Eu consectetur donec ultricies adipiscing.</p>
        </div>
        <div className='w-[250px] flex justify-between items-center'>
            {socialLinks.map((link)=>{
            return <HomeSocialIcon key={link.social} props={link}/>
            })}
        </div>
    </div>
  )
}

export default HomeWCWLeftContent