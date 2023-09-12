import React, { useState } from 'react'
import {smallInput,btn, label, errorMessage, errorBorder } from '@/components/Admin/adminGlobalstyles.module.css'
import UploadBtn from '@/components/Utility/AdminUtilities/UploadBtn'
import { useFormik } from 'formik'
import * as yup from "yup"
import ErrorMessage from '@/components/Utility/AdminUtilities/ErrorMessage'

const form = ({btnName}) => {
    const [loading, setLoading] = useState(false)
    const MAX_FILE_SIZE = 1048576;
    const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp' ] }

    function isValidFileType(fileName, fileType){
        console.log({fileName, fileType})
        return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
    }
    

    const validateSchema = yup.object().shape({
        name: yup.string().required("This field is required"),
        summary:yup.string().required("This field  is required"),
        date:yup.date().required('This field is required'),
        time:yup.string().required('This field is required'),
        image:yup
              .mixed()
              .required('This field is required')
              .test("is-valid-type", "Not a valid image type",
                value => isValidFileType(value && value.name.toLowerCase(), "image")
              )
              .test("is-valid-size", "Max allowed size is 1MB", value => value && value.size <= MAX_FILE_SIZE)
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            summary: '',
            date:'',
            time: '',
            image: null
        },
        validationSchema: validateSchema,
        onSubmit: (values, { resetForm }) => {
            setLoading(true)
            console.log(values)
        }
    })

    function handleImageChange (event){
        console.log(event)
        formik.setFieldValue("image", event.target.files[0])
    }

  return (
     <form className='w-[100%] m-auto md:m-0 font-inter' onSubmit={formik.handleSubmit}>
        <div className=' w-full grid grid-cols-1 md:grid-cols-3 justify-items-start gap-6 mt-7 mb-10'>
            <div className='w-full md:w-[90%]'>
                <label className={`${label}`}>
                    Name of the Activity
                    <input name='name' value={formik.values.name} onChange={formik.handleChange} className={`${formik.errors.name ? `${errorBorder}` : '' } ${smallInput}`} type="text"  />
                    { formik.errors.name && <ErrorMessage message={formik.errors.name} /> }
                </label>
            </div>

            <div className='w-full md:w-[90%]'>
                <label className={`${label}`}>
                    Date of the Activity
                    <input name='date' onChange={formik.handleChange} value={formik.values.date}  className={`${formik.errors.date ? `${errorBorder}` : '' } ${smallInput}`} type="date"  />
                    { formik.errors.date && <ErrorMessage message={formik.errors.date} /> }
                </label>
            </div>

            <div className='w-full md:w-[90%]'>
                <label className={`${label}`}>
                    Time of the activity
                    <input name='time' onChange={formik.handleChange} value={formik.values.time}  className={`${formik.errors.time ? `${errorBorder}` : '' } ${smallInput}`} type="time" />
                    { formik.errors.time && <ErrorMessage message={formik.errors.time} /> }
                </label>
            </div>
        </div>
        <div className='mb-8 w-full'>
          <label className={`${label}`}>
            Summary/Report of the activity
            <textarea name='summary' onChange={formik.handleChange} value={formik.values.summary} className={`${formik.errors.summary ? `${errorBorder}` : '' }  w-full md:w-[94%] border border-black rounded-lg mt-1  `} cols="30" rows="10" ></textarea>
            { formik.errors.summary && <ErrorMessage message={formik.errors.summary} /> }
          </label>  
        </div>
        
        <div className='w-full md:w-[94%]'>
            <UploadBtn btnText={'Upload Images of Activity'} onChange={handleImageChange} error={formik.errors.image}/>
            { formik.errors.image && <ErrorMessage message={formik.errors.image} /> }
        </div>
        <button disabled={loading} type='submit' className={btn + ' mb-16'}>
            {btnName}
        </button>
    </form>
  )
}

export default form