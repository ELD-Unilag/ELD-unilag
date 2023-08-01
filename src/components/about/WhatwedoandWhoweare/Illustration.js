import React from 'react'

const Illustration = () => {
  return (
    <div className='w-[85px] h-[85px] bg-illustrateBg1 bg-cover bg-no-repeat absolute p-[5px] left-[50%] -translate-x-[50%] -bottom-[110px] lg:w-[110px] lg:h-[110px] lg:p-[6px] lg:bottom-0 lg:left-[106%] lg:z-10'>
     <div className='w-full h-full bg-illustrateBg2 bg-cover flex items-center justify-center text-[8px] uppercase lg:text-xs'>
       Illustration
     </div>
    </div>
  )
}

export default Illustration