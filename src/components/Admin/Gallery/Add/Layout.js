import React, { useState } from 'react'
import globalStyles from '@/components/Admin/adminGlobalstyles.module.css'
import ResponsiveImage from '@/components/Utility/ResponsiveImage'
import Upload from '../../../../../public/images/admin/upload.svg'
import styles from '@/components/Utility/DeleteComponent.js/deletebox.module.css'
import ErrorMessage from '@/components/Utility/AdminUtilities/ErrorMessage'
import DeletePicBox from '@/components/Utility/DeleteComponent.js/DeletePicBox'

const Layout = () => {
  const ref = React.useRef(null)
  const [selectedImages, setSelectedImages]=React.useState([])
  const [error, setError] = useState({
    iseror: false,
    message: ''
  })
  const allowedTypes = ["image/jpeg", 'image/gif', 'image/png', 'image/jpeg']
  const handleClick = () => {
    ref.current.click()
  }
  function validateImages(images){
    for(let i=0; i < images.length; i++ ){
      const image = images[i]
      if(!allowedTypes.includes(image.type)){
        setError(prev => {
          return {
            ...prev,
            iseror: true,
            message: 'Only jpeg, jpg, png and gif images are allowed'
          }
        })
        return false;
      }
    }
    return true
  }
  const handleChange = (e) => {
    if (e.target.files.length !== 0) {
      // reset error
      setError(prev => {
        return {
          ...prev,
          iseror: false,
          message: ''
        }
      })
      const images = []
      const pickedImages = e.target.files
      console.log(pickedImages)
      const validation = validateImages(pickedImages)
      if(validation){
        setSelectedImages(imgfile => [...imgfile, ...pickedImages])
      }
    }
  }
  
  function deleteImage(idx){
    const ImagesCopy = selectedImages
    ImagesCopy.splice(idx, 1)
    setSelectedImages([...ImagesCopy])
  }

  //image preview elements
  const displayImages = selectedImages.map((imgFile, idx) => {
    const imgUrl = URL.createObjectURL(imgFile)
    return <DeletePicBox 
            key={idx}
            img={imgUrl}
            handleDelete={deleteImage}
            idx={idx}
            />
  })

  

  function AddToBackend(){
    if( selectedImages && selectedImages.length > 0){
      console.log(selectedImages)
    }else{
      setError(prev => {
        return{
          ...prev,
          iseror: true,
          message: 'select an Image'
        }
      })
    }
  }
  return (
    <section className='pb-20'>
     <h3 className={`${globalStyles.header}`}>Add Pictures</h3>
     <div className='mt-5'>
      <div className={` ${ error.iseror ? globalStyles.errorBorder : '' } flex items-center justify-center h-12 w-full border border-eldBlack rounded-md lg:w-[517px] cursor-pointer`} onClick={handleClick}>
        <ResponsiveImage 
          src={Upload}
          style={globalStyles.uploadIcon}
          alt='uploadIcon'
        />
        <p className='ml-2 font-inter font-normal'>Upload Pictures of WCW</p>
      </div>
      { error.iseror && <ErrorMessage message={error.message} /> }
      <input ref={ref} type='file' multiple className='hidden' onChange={handleChange} />
      <div className='flex  flex-wrap gap-x-5 gap-y-4 mt-10 lg:max-w-[738px]'>
        {displayImages}
      </div>
      <button className={`${globalStyles.btn}`} onClick={AddToBackend} >Add Pictures</button>
     </div>
    </section>
  )
}

export default Layout;