import React from 'react'
import globalStyles from '@/components/Admin/adminGlobalstyles.module.css'
import DeletePicBox from '@/components/Utility/DeleteComponent.js/DeletePicBox'
import styles from '@/components/Utility/DeleteComponent.js/deletebox.module.css'

const Layout = () => {
  return (
    <section className=''>
     <h3 className={`${globalStyles.header}`}>Delete Pictures</h3>
     <div className='mt-5 w-fit lg:max-w-[738px] mb-10'>
      <div className='flex  flex-wrap gap-x-5 gap-y-9'>
        <DeletePicBox />
        <DeletePicBox />
        <DeletePicBox />
        <DeletePicBox />
        <DeletePicBox />
        <DeletePicBox />
      </div>
      <button className={`${styles.deletebtn}`}>Save Changes</button>
     </div>
    </section>
  )
}

export default Layout