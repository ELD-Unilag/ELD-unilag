import React from 'react'
import globalStyles from '@/components/Admin/adminGlobalstyles.module.css'
import NewsForm from '@/components/Admin/News/Form/form'

const Layout = () => {
  return (
    <section>
     <h3 className={`${globalStyles.header}`}>Add News</h3>
     <NewsForm
      btnName={'Add News'}
     />
    </section>
  )
}

export default Layout