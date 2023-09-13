import React, { useState } from 'react'
import {smallInput,btn, label, errorBorder} from '@/components/Admin/adminGlobalstyles.module.css'
import UploadBtn from '@/components/Utility/AdminUtilities/UploadBtn'
import { useFormik } from 'formik'
import * as yup from "yup"
import ErrorMessage from '@/components/Utility/AdminUtilities/ErrorMessage'
const Newsform = ({btnName}) => {
    const [loading, setLoading]=useState(false)
    const MAX_FILE_SIZE = 1048576;
    const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp' ] }

    // checking file type 
    function isValidFileType(fileName, fileType){
        console.log({fileName, fileType})
        return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
    }
    
    const validateSchema = yup.object().shape({
        header: yup.string().required("This field is required"),
        body: yup.string().required("This field  is required"),
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
            header: '',
            body: '',
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
        <div className=' w-full grid grid-cols-1 md:grid-cols-3 justify-items-start gap-4 mt-7 mb-10'>
            <div className='w-full md:w-[90%]'>
                <label className={label}>
                    Headline
                    <input name='header' value={formik.values.header} onChange={formik.handleChange} className={`${formik.errors.header ? `${errorBorder}` : '' } ${smallInput}`} type="text"  />
                    { formik.errors.header && <ErrorMessage message={formik.errors.header} /> }
                </label>
            </div>
        </div>

        <div className='w-full md:w-[94%] mb-8'>
            <UploadBtn btnText={'Upload Image of News'} onChange={handleImageChange} error={formik.errors.image}/>
            { formik.errors.image && <ErrorMessage message={formik.errors.image} /> }
        </div>
        <label className={label}>
            <p>Body Text</p>
            <textarea name='body' onChange={formik.handleChange} value={formik.values.body} className={`${formik.errors.body ? `${errorBorder}` : '' }  w-full md:w-[94%] border border-black p-5 rounded-lg mt-1  `}  cols="30" rows="10"></textarea>
            { formik.errors.body && <ErrorMessage message={formik.errors.body} /> }
        </label>
        <button disabled={loading} type='submit' className={btn + ' mb-16'}>
            {btnName}
        </button>
    </form>
  )
}

export default Newsform