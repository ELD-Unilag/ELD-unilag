import ResponsiveImage from '@/components/Utility/ResponsiveImage'
import React from 'react'
import model from '../../../../public/images/ladiesboard/card/anna.png'
import star from '../../../../public/images/ladiesboard/card/star.svg'
import logo from '../../../../public/images/ladiesboard/card/logo.svg'

const CardImage = () => {
  return (
    <div className='w-full h-full rounded-[15px] rounded-b-[13px]  flex-col bg-cardOrange absolute inset-0 border-b-4 border-black border-x border-t'>
      <div className='bg-card_noise w-full h-full bg-no-repeat bg-cover bg-center pt-[19px] pr-[9px] pl-2 relative'>
        <div className='w-[148px] h-[205px] bg-cardModelBg flex items-center justify-center relative'>
          <ResponsiveImage 
                style={'cardmodel'}
                src={model}
          />
        </div>
        <div className='w-full bg-primaryBg absolute left-0 bottom-[50px]  py-1.5 font-grotley font-extrabold pl-[15px] border-y-[0.5px] border-black'>
          <h2 className='leading-[16px] text-[9px]'>The</h2>
          <h3 className='leading-[16px] text-lg'>Queen Unfazed</h3>
      </div>
        <ResponsiveImage 
          src={star}
          style={'cardstar2'}
        />
        <div className='flex items-end justify-between -mt-0.5'>
          <ResponsiveImage 
              src={logo}
              style={'cardlogo'}
          />
          <p className='font-satoshi font-normal text-[9px] leading-[9.4px]'>Click to flip</p>
        </div>
      </div>
    </div>
  )
}

export default CardImage