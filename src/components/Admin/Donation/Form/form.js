import React, { useState } from 'react'
import {smallInput,btn, label, errorBorder} from '@/components/Admin/adminGlobalstyles.module.css'
import UploadImageBtn from '@/components/Utility/AdminUtilities/UploadBtn'
import { useFormik } from 'formik'
import * as yup from "yup"
import ErrorMessage from '@/components/Utility/AdminUtilities/ErrorMessage'
const form = ({btnName}) => {
    const [loading, setLoading] = useState(false)
    const MAX_FILE_SIZE = 1048576;
    const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp' ] }

    // checking file type 
    function isValidFileType(fileName, fileType){
        console.log({fileName, fileType})
        return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
    }

    const validateSchema = yup.object().shape({
        name: yup.string().required("This field is required"),
        about: yup.string().required("This field  is required"),
        amount: yup.number()
                .typeError('amount must be a number')
                .min(1, 'amount be greater than 1')
                .required("This field is required"),
        image:yup
              .mixed()
              .required('Please add an Image')
              .test("is-valid-type", "Not a valid image type",
                value => isValidFileType(value && value.name.toLowerCase(), "image")
              )
              .test("is-valid-size", "Max allowed size is 1MB", value => value && value.size <= MAX_FILE_SIZE)
    })
    const formik = useFormik({
        initialValues: {
            name: '',
            about: '',
            amount: 1000,
            image: null
        },
        validationSchema: validateSchema,
        onSubmit: (values, { resetForm }) => {
            setLoading(true)
            console.log(values)
        },
        validateOnChange: false
    })
    function handleImageChange (event){
        formik.setFieldValue("image", event.target.files[0])
    }

  return (
    <form className='w-[100%] m-auto md:m-0 font-inter' onSubmit={formik.handleSubmit}>
        <div className=' w-full grid grid-cols-1 md:grid-cols-2 justify-items-start gap-4 mt-7 mb-10'>
            <div className='w-full md:w-[90%]'>
                <label className={`${label}`}>
                    Name of Donation
                    <input name='name' value={formik.values.name} onChange={formik.handleChange} className={`${formik.errors.name ? `${errorBorder}` : '' } ${smallInput}`}  type="text"  />
                    { formik.errors.name && <ErrorMessage message={formik.errors.name} /> }
                </label>
            </div>

            <div className='w-full md:w-[90%]'>
                <label className={`${label}`}>
                    Amount Needed (₦)
                    <input name='amount' onChange={formik.handleChange} value={formik.values.amount}  className={`${formik.errors.amount ? `${errorBorder}` : '' } ${smallInput}`} type="number"  step={1000} required />
                    { formik.errors.amount && <ErrorMessage message={formik.errors.amount} /> }
                </label>
            </div>
        </div>
        <div className='mb-8 w-full'>
         <label className={`${label}`}>
            About Donation
            <textarea name='about' onChange={formik.handleChange} value={formik.values.about} className={`${formik.errors.about ? `${errorBorder}` : '' }  w-full md:w-[94%] border border-black p-5 rounded-lg mt-1  `} cols="30" rows="5" ></textarea>
            { formik.errors.about && <ErrorMessage message={formik.errors.about} /> }
         </label>   
        </div>
        
        <div className='w-full md:w-[94%]'>
            <UploadImageBtn btnText={'Upload Image'} onChange={handleImageChange} error={formik.errors.image}/>
            { formik.errors.image && <ErrorMessage message={formik.errors.image} /> }
        </div>
        <button disabled={loading} type='submit' className={btn + ' mb-16'}>
            { btnName }
        </button>
    </form>
  )
}

export default form