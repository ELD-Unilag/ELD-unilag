import React from 'react'
import logo from '../../../public/images/logo.png'
import Image from 'next/image'

export default function Logo() {
  return (
    <div className='flex items-center'>
      <div className='relative w-9 h-9'>
        <Image src={logo} alt='logo' fill={true} className='object-fill' />
      </div>
      <span className='max-w-[45px] text-xs leading-none tracking-tighter font-satoshi ml-[1px]'>Engineering Ladies Day</span>
    </div>
  )
}
