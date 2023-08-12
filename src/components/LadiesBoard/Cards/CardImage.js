import ResponsiveImage from '@/components/Utility/ResponsiveImage'
import React from 'react'
import logo from '../../../../public/images/ladiesboard/card/logo.svg'
import styles from './Cards.module.css'

const CardImage = (props) => {
  return (
    <div className={`w-full h-full rounded-[15px] rounded-b-[13px]  flex-col ${props.bg} absolute inset-0 border-b-4 border-black border-x border-t lg:border-x-[1.2px] lg:border-t-[1.2px] lg:rounded-[17px] lg:rounded-b-[15px]`}>
      <div className='bg-card_noise w-full h-full bg-no-repeat bg-cover bg-center pt-[19px] pr-[9px] pl-2 relative lg:pt-[22px] lg:pr-[11px]'>
        <div className='w-[148px] h-[205px] bg-cardModelBg bg-no-repeat bg-cover bg-center flex items-center justify-center relative lg:w-[170px] lg:h-[236px]'>
          <ResponsiveImage 
                style={styles.cardmodel}
                src={props.model}
                alt='card-model'
                addon={styles.modelImg}
          />
        </div>
        <div className='w-full bg-primaryBg absolute left-0 bottom-[50px]  py-1.5 font-grotley font-extrabold pl-[15px] border-y-[0.5px] border-black lg:border-y-[0.7px] lg:pl-[17px] lg:py-[7px] lg:bottom-[58px]'>
          <h2 className='leading-[16px] text-[9px] lg:text-[11px]'>The</h2>
          <h3 className='leading-[16px] text-lg lg:text-[21px]'>Queen Unfazed</h3>
      </div>
        <ResponsiveImage 
          src={props.star}
          style={styles.cardstar2}
          alt='star'
        />
        <div className='flex items-end justify-between -mt-0.5 lg:mt-0.5'>
          <ResponsiveImage 
              src={logo}
              style={styles.cardlogo}
              alt='logo'
          />
          <p className='font-satoshi font-normal text-[9px] leading-[9.4px] lg:text-[11px]'>Click to flip</p>
        </div>
      </div>
    </div>
  )
}

export default CardImage