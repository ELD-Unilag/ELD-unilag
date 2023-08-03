import React from 'react'
import globalStyles from '@/components/Admin/adminGlobalstyles.module.css'
import ActivityForm from '@/components/Admin/Activity/Form/form'

const Layout = ({name}) => {
  return (
    <section>
     <h3 className={`${globalStyles.header}`}>Add Activity</h3>
     <ActivityForm
       btnName={`Save Changes`}
       name = {name}
     />
    </section>
  )
}

export default Layout