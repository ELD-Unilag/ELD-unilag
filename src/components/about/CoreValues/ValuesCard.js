import React from 'react'
// import Humilty from '../../../../public/images/aboutImages/corevalues/humilty'
import ResponsiveImage from '@/components/Utility/ResponsiveImage'

const ValuesCard = (props) => {
  return (
    <div className={`min-w-[45%] h-[165px] ${props.bg} rounded-2xl relative overflow-hidden font-satoshi sm:min-w-0 sm:w-[165px] sm:max-w-[165px] lg:max-w-[335px] lg:w-[35%] lg:h-[230px]`}>
      <h2 className='text-xl text-center font-bold pt-[15px] text-white font-satoshi lg:text-2xl'>{props.header}</h2>
      <p className='text-center text-white px-[15px] text-[10px] lg:text-base lg:px-6 lg:pt-2'>Strenghtened by the core of the values of the society</p>
      <ResponsiveImage 
        src={props.img}
        style={props.imgstyle}
        alt='values-img'
      />
    </div>
  )
}

export default ValuesCard