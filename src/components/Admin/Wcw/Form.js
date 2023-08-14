import React, { useState } from 'react'
import {smallInput,btn, label} from '@/components/Admin/adminGlobalstyles.module.css'
import UploadBtn from '@/components/Utility/AdminUtilities/UploadBtn'

const form = ({btnName}) => {


  return (
    <form className='w-[100%] m-auto md:m-0 font-inter'>
        <div className=' w-full grid grid-cols-1 md:grid-cols-3 justify-items-start gap-6 mt-7 mb-10'>
            <div className='w-full md:w-[90%]'>
                <label className={`${label}`}>
                    Name of the WCW
                    <input className={smallInput} type="text" required />
                </label>
            </div>

            <div className='w-full md:w-[90%]'>
                <label className={`${label}`}>
                    Department
                    <select className={smallInput}>
                        <option value="Mechanical" key="">Mechanical Engineering</option>
                        <option value="Electrical" key="">Electrical Engineering</option>
                        <option value="Civil" key="">Civil Engineering</option>
                        <option value="Chemical" key="">Chemical Engineering</option>
                        <option value="Pet and Gas" key="">Pet and Gas Engineering</option>
                        <option value="Biomedical" key="">Biomedical Engineering</option>
                        <option value="Systems" key="">Systems Engineering</option>
                        <option value="Computer" key="">Computer Engineering</option>
                        <option value="Met and Mat" key="">Met and Mat Engineering</option>
                    </select>
                </label>
            </div>

            <div className='w-full md:w-[90%]'>
                <label className={`${label}`}>
                    Level
                    <select className={smallInput}>
                        <option value="100" key="">100 Level</option>
                        <option value="200" key="">200 Level</option>
                        <option value="300" key="">300 Level</option>
                        <option value="400" key="">400 Level</option>
                        <option value="500" key="">500 Level</option>
                    </select>
                </label>
            </div>
        </div>

        <label className={`${label}`}>
            Short Intro of WCW
            <textarea className='w-full md:w-[94%] border border-black rounded-lg mt-1 mb-8 p-5' cols="30" rows="10" required></textarea>
        </label>
        <div className='w-full md:w-[94%]'>
            <UploadBtn btnText={'Upload Image of WCW'}/>
        </div>


        <div className=' w-full grid grid-cols-1 md:grid-cols-3 justify-items-start gap-6 mt-7 mb-10'>
            <div className='w-full md:w-[90%]'>
                <label className={`${label}`}>
                    Instagram Link
                    <input className={smallInput} type="text" required />
                </label>
            </div>

            <div className='w-full md:w-[90%]'>
                <label className={`${label}`}>
                    Twitter Link
                    <input className={smallInput} type="text"  required/>
                </label>
            </div>

            <div className='w-full md:w-[90%]'>
                <label className={`${label}`}>
                    Instagram Link
                    <input className={smallInput} type="text" required/>
                </label>
            </div>

            <div className='w-full md:w-[90%]'>
                <label className={`${label}`}>
                    Facebook Link
                    <input className={smallInput} type="text" required/>
                </label>
            </div>
        </div>
        

        <button type='submit' className={btn + ' mb-16'}>
            {btnName}
        </button>
    </form>
  )
}

export default form