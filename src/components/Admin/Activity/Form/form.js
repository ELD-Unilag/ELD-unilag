import React, { useState } from 'react'
import {smallInput,btn} from '@/components/Admin/adminGlobalstyles.module.css'
import UploadBtn from '@/components/Utility/AdminUtilities/UploadBtn'

const form = () => {


  return (
    <form className='w-[90%] m-auto md:m-0'>
        <div className=' w-full grid grid-cols-1 md:grid-cols-3 justify-items-start gap-4 mt-8 mb-10'>
            <div className='w-full md:w-[90%]'>
                <label>
                    Name of the Activity
                    <input className={smallInput} type="text" />
                </label>
            </div>

            <div className='w-full md:w-[90%]'>
                <label>
                    Date of the Activity
                    <input className={smallInput} type="date" />
                </label>
            </div>

            <div className='w-full md:w-[90%]'>
                <label>
                    Time of the activity
                    <input className={smallInput} type="time" />
                </label>
            </div>
        </div>

        <label>
            Summary/Report of the activity
            <textarea className='w-full md:w-[94%] border border-black rounded-lg mb-8 p-5' cols="30" rows="10"></textarea>
        </label>
        <div className='w-full md:w-[94%]'>
            <UploadBtn btnText={'Upload Images of Activity'}/>
        </div>
        <button type='submit' className={btn + ' mb-16'}>
            Add Activity
        </button>
    </form>
  )
}

export default form