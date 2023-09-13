import React, { useState } from 'react'
import globalStyles from '@/components/Admin/adminGlobalstyles.module.css'
import DeletePicBox from '@/components/Utility/DeleteComponent.js/DeletePicBox'
import styles from '@/components/Utility/DeleteComponent.js/deletebox.module.css'
import demo1 from '../../../../../public/images/admin/demo1.png'
import demo2 from '../../../../../public/images/admin/demo2.jpg'
import demo3 from '../../../../../public/images/admin/demo3.jpg'
import demo4 from '../../../../../public/images/admin/demo4.jpg'
import demo5 from '../../../../../public/images/admin/demo5.jpg'
import demo6 from '../../../../../public/images/admin/demo5.jpg'

const Layout = () => {
  const [images,  setImages] = useState([demo1, demo2, demo3, demo4, demo5, demo6])

  function deleteImage(idx){
    console.log(idx)
   const imagesCopy = images
   imagesCopy.splice(idx, 1)
   setImages([...imagesCopy])
  }
 
  const displayImages = images.map((imgurl, idx) => {
    return <DeletePicBox 
              key={idx}
              img={imgurl}
              idx={idx}
              handleDelete={deleteImage}
          />
  })

  return (
    <section className=''>
     <h3 className={`${globalStyles.header}`}>Delete Pictures</h3>
     <div className='mt-5 w-fit lg:max-w-[738px] mb-10'>
      <div className='flex  flex-wrap gap-x-5 gap-y-9'>
        {displayImages}
      </div>
      <button className={`${styles.deletebtn}`}>Save Changes</button>
     </div>
    </section>
  )
}

export default Layout