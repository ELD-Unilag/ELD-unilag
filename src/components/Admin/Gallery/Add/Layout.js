import React from 'react'
import globalStyles from '@/components/Admin/adminGlobalstyles.module.css'
import ResponsiveImage from '@/components/Utility/ResponsiveImage'
import Upload from '../../../../../public/images/admin/upload.svg'
import styles from '@/components/Utility/DeleteComponent.js/deletebox.module.css'

const Layout = () => {
  const ref = React.useRef(null)
  const [selectedImages, setSelectedImages]=React.useState([])

  const handleClick = () => {
    ref.current.click()
  }
  const handleChange = (e) => {
    if (e.target.files.length !== 0) {
      const images = []
      for (let i = 0; i < e.target.files.length; i++) {
        images.push(URL.createObjectURL(e.target.files[i]));
      }
      setSelectedImages(imgfile => [...imgfile, ...images])
      console.log(selectedImages)
    }
  }
  const displayImages = selectedImages.map((imgUrl, idx) => {
    return <ResponsiveImage 
            src={imgUrl}
            key={idx}
            style={styles.img}
            alt='image'
            addon={styles.imgExtra}
          />
  })
  return (
    <section className='pb-20'>
     <h3 className={`${globalStyles.header}`}>Add Pictures</h3>
     <div className='mt-5'>
      <div className='flex items-center justify-center h-12 w-full border border-eldBlack rounded-md lg:w-[517px] cursor-pointer' onClick={handleClick}>
        <ResponsiveImage 
          src={Upload}
          style={globalStyles.uploadIcon}
          alt='uploadIcon'
        />
        <p className='ml-2 font-inter font-normal'>Upload Pictures of WCW</p>
      </div>
      <input ref={ref} type='file' multiple className='hidden' onChange={handleChange} />
      <div className='flex  flex-wrap gap-x-5 gap-y-4 mt-10 lg:max-w-[738px]'>
        {displayImages}
      </div>
      <button className={`${globalStyles.btn}`}>Add Pictures</button>
     </div>
    </section>
  )
}

export default Layout;