import ResponsiveImage from '@/components/Utility/ResponsiveImage'
import React from 'react'
import star from '../../../../public/images/ladiesboard/card/star.svg'


const CardInfo = () => {
  return (
    <div className="w-[100%] h-full rounded-[15px] rounded-b-[13px] bg-cardOrange text-cardTextColour absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] border-b-4 border-black border-x border-t">
      <div className='w-full bg-primaryBg pl-[15px] py-1.5 font-grotley font-extrabold rounded-t-2xl text-eldBlack'>
        <h2 className='leading-none text-[9px]'>The</h2>
        <h3 className='leading-none text-base'>Queen Unfazed</h3>
      </div>
      <div className='mt-[11px] mx-auto w-[145px] h-[195px] border border-black bg-white bg-opacity-70 rounded-b-[15px] relative font-satoshi'>
        <ResponsiveImage 
          src={star}
          style={'cardstar'}
        />
        <div className='cardcontentbox py-2.5'>
          <h3 className=' font-extrabold text-[10px] leading-[10px]'>Name</h3>
          <p className='text-[9px] leading-[10px] pt-0.5'>Eniola Salau</p>
        </div>
        <div className="cardcontentbox pt-1 pb-2.5" >
          <h3 className='cardheader'>Lorem ipsum</h3>
          <p className='cardpara'>Lorem ipsum dolor sit amet consectetur. Est mattis dignissim consectetur nulla platea</p>
        </div>
        <div className='cardcontentbox border-none pt-1 pb-2.5'>
          <h3 className='cardheader'>Lorem ipsum</h3>
          <p className='cardpara'>Lorem ipsum dolor sit amet consectetur. Est mattis dignissim consectetur nulla platea. Amet faucibus leo aenean ante in nunc laoreet.</p>
        </div>
      </div>

    </div>
  )
}

export default CardInfo