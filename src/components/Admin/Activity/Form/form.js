import React, { useState } from 'react'
import {smallInput,btn, label} from '@/components/Admin/adminGlobalstyles.module.css'
import UploadBtn from '@/components/Utility/AdminUtilities/UploadBtn'

const form = ({btnName}) => {


  return (
    <form className='w-[100%] m-auto md:m-0 font-inter'>
        <div className=' w-full grid grid-cols-1 md:grid-cols-3 justify-items-start gap-6 mt-7 mb-10'>
            <div className='w-full md:w-[90%]'>
                <label className={`${label}`}>
                    Name of the Activity
                    <input className={smallInput} type="text" required />
                </label>
            </div>

            <div className='w-full md:w-[90%]'>
                <label className={`${label}`}>
                    Date of the Activity
                    <input className={smallInput} type="date"  required/>
                </label>
            </div>

            <div className='w-full md:w-[90%]'>
                <label className={`${label}`}>
                    Time of the activity
                    <input className={smallInput} type="time" required/>
                </label>
            </div>
        </div>

        <label className={`${label}`}>
            Summary/Report of the activity
            <textarea className='w-full md:w-[94%] border border-black rounded-lg mt-1 mb-8 p-5' cols="30" rows="10" required></textarea>
        </label>
        <div className='w-full md:w-[94%]'>
            <UploadBtn btnText={'Upload Images of Activity'}/>
        </div>
        <button type='submit' className={btn + ' mb-16'}>
            {btnName}
        </button>
    </form>
  )
}

export default form