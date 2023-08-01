import React from 'react'

const Box = (props) => {
  return (
    <div className='w-full max-w-[350px] bg-primaryBg font-satoshi h-[167px] rounded-[20px] border-[1.5px] border-eldBlack xl:max-w-[460px] lg:h-[200px] lg:border-[2.5px] xl:h-[220px]'>
     <div className='text-wwboxHeader bg-wwboxHeaderBg w-[250px] h-[54px] border border-wwboxHeader flex items-center justify-center -rotate-2 mx-auto rounded-[57px] shadow-box -mt-7'>
      <h3 className="text-xl tracking-[2px] font-bold uppercase">{props.header}</h3>
     </div>
      <p className='text-xs font-normal text-center px-10 pt-5 lg:text-sm text-white lg:px-6 xl:text-base'>
        {props.para}
        </p>
    </div>
  )
}

export default Box