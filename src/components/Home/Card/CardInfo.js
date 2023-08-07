import React from 'react'
import Back from '../../../../public/images/homeImages/flipcards/Back.png'
import ResponsiveImage from '@/components/Utility/ResponsiveImage'
import globalStyles from './flipCards.module.css'

const CardInfo = ({bg}) => {
  return (
    <div className={`${bg} w-full h-full rounded-[15px] flex items-center justify-center absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]`}>
     <div className='w-[90%] max-w-[300px] sm:max-w-none sm:w-[300px] lg:w-[360px] lg:h-[160px] h-[133px] bg-white rounded-[15px] border-[0.5px] border-eldBlack shadow-box relative'>
      <div className='w-full h-full bg-homeCardNoise bg-cover bg-center bg-no-repeat rounded-[15px] font-satoshi text-eldBlack flex items-center justify-center'>
       <div className='max-w-[165px] text-[10px]'>
        <h3 className='text-center uppercase  font-bold tracking-[2px] lg:text-sm'>a perfect day</h3>
         <p className='text-center pt-1.5'>Real beauty is to be true to oneself. That's what will make you feel god</p>
       </div>
       <ResponsiveImage 
          src={Back}
          style={globalStyles.back}
        />
      </div>
     </div>
    </div>
  )
}

export default CardInfo