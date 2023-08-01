import React, { useState } from 'react'
import {smallInput,btn, label} from '@/components/Admin/adminGlobalstyles.module.css'
import UploadBtn from '@/components/Utility/AdminUtilities/UploadBtn'

const form = () => {


  return (
    <form className='w-[100%] m-auto md:m-0 font-inter'>
        <div className=' w-full grid grid-cols-1 md:grid-cols-3 justify-items-start gap-4 mt-7 mb-10'>
            <div className='w-full md:w-[90%]'>
                <label className={label}>
                    Headline
                    <input className={smallInput} type="text" />
                </label>
            </div>
        </div>

        <div className='w-full md:w-[94%] mb-8'>
            <UploadBtn btnText={'Upload Image of News'}/>
        </div>
        <label className={label}>
            <p>Body Text</p>
            <textarea className='w-full md:w-[94%] border border-black rounded-lg p-5 mt-1' cols="30" rows="10"></textarea>
        </label>
        <button type='submit' className={btn + ' mb-16'}>
            Add Activity
        </button>
    </form>
  )
}

export default form