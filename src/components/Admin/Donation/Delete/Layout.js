import React from 'react'
import globalStyles from '@/components/Admin/adminGlobalstyles.module.css'
import DeleteBox from '@/components/Utility/DeleteComponent.js/DeleteBox'

const Layout = () => {
  return (
    <section>
     <h3 className={`${globalStyles.header}`}>Delete Donations</h3>
     <div className='mt-6 flex-col self-stretch'>
      <DeleteBox />
      <DeleteBox />
      <DeleteBox />
     </div>
     <div className={`${globalStyles.btn}`}>
      Save Changes
     </div>
    </section>
  )
}

export default Layout