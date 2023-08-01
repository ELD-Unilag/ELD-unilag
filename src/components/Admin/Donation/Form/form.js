import React, { useState } from 'react'
import {smallInput,btn, label} from '@/components/Admin/adminGlobalstyles.module.css'
import UploadImageBtn from '@/components/Utility/AdminUtilities/UploadBtn'

const form = () => {


  return (
    <form className='w-[100%] m-auto md:m-0 font-inter'>
        <div className=' w-full grid grid-cols-1 md:grid-cols-3 justify-items-start gap-4 mt-7 mb-10'>
            <div className='w-full md:w-[90%]'>
                <label className={`${label}`}>
                    Name of Donation
                    <input className={smallInput} type="text" />
                </label>
            </div>

            <div className='w-full md:w-[90%]'>
                <label className={`${label}`}>
                    Amount Needed (₦)
                    <input className={smallInput} type="number" defaultValue={1000} step={1000} />
                </label>
            </div>

            <div className='w-full md:w-[90%]'>
                <label className={`${label}`}>
                    Amount Recieved (₦)
                    <input className={smallInput} type="number" defaultValue={1000} step={1000} />
                </label>
            </div>
        </div>

        <label className={`${label}`}>
            About Donation
            <textarea className='w-full md:w-[94%] border border-black rounded-lg mb-8 p-5 mt-1' cols="30" rows="5"></textarea>
        </label>
        <div className='w-full md:w-[94%]'>
            <UploadImageBtn btnText={'Upload Image'}/>
        </div>
        <button type='submit' className={btn + ' mb-16'}>
            Add Donation
        </button>
    </form>
  )
}

export default form