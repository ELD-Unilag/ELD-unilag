import React from 'react'
import globalStyles from '@/components/Admin/adminGlobalstyles.module.css'
import ActivityForm from '@/components/Admin/Activity/Form/form'

const Layout = () => {
  return (
    <section>
     <h3 className={`${globalStyles.header}`}>Add Activity</h3>
     <ActivityForm/>
    </section>
  )
}

export default Layout