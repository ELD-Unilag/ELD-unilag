import ResponsiveImage from '@/components/Utility/ResponsiveImage'
import React from 'react'
import styles from './Cards.module.css'

const CardInfo = (props) => {
  return (
    <div className={`w-[100%] h-full rounded-[15px] lg:rounded-[17px] rounded-b-[13px] lg:rounded-b-[15px] ${props.bg} text-cardTextColour absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] border-b-4 border-black border-x border-t lg:border-x-[1.2px] lg:border-t-[1.2px]`}>
      <div className='bg-card_noise w-full h-full bg-no-repeat bg-cover bg-center'>
        <div className='w-full bg-primaryBg font-grotley font-extrabold rounded-t-2xl text-eldBlack'>
          <div className='bg-card_noise w-full h-full bg-no-repeat bg-cover bg-center pl-[15px] py-1.5 lg:py-[7px] lg:pl-[17.3px] '>
            <h2 className='leading-none text-[9px] lg:text-[11px]'>The</h2>
            <h3 className='leading-none text-base lg:text-lg lg:leading-none'>Queen Unfazed</h3>
          </div>
          
        </div>
        <div className='mt-[11px] mx-auto w-[145px] h-[195px] border border-black bg-white bg-opacity-70 rounded-b-[15px] relative font-satoshi lg:mt-[13px] lg:w-[167px] lg:h-[224px] lg:rounded-b-[17px]'>
          <ResponsiveImage 
            src={props.star}
            style={styles.cardstar}
          />
          <div className={`${styles.cardcontentbox} py-2.5 `}>
            <h3 className=' font-extrabold text-[10px] leading-[10px] lg:text-[12px] lg:leading-[12px]'>Name</h3>
            <p className='text-[9px] leading-[10px] pt-0.5 lg:text-[10px] lg:leading-[12px]'>Eniola Salau</p>
          </div>
          <div className={`${styles.cardcontentbox} pt-1 pb-2.5 lg:pt-2`} >
            <h3 className={`${styles.cardheader}`}>Lorem ipsum</h3>
            <p className={`${styles.cardpara}`}>Lorem ipsum dolor sit amet consectetur. Est mattis dignissim consectetur nulla platea</p>
          </div>
          <div className={`${styles.cardcontentbox} border-none pt-1 pb-2.5 lg:pt-2`}>
            <h3 className={`${styles.cardheader}`}>Lorem ipsum</h3>
            <p className={`${styles.cardpara}`}>Lorem ipsum dolor sit amet consectetur. Est mattis dignissim consectetur nulla platea. Amet faucibus leo aenean ante in nunc laoreet.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardInfo