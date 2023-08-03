import React from 'react'
import globalStyles from '@/components/Admin/adminGlobalstyles.module.css'
import DonationsForm from '@/components/Admin/Donation/Form/form'

const Layout = () => {
  return (
    <section>
     <h3 className={`${globalStyles.header}`}>Edit Donations</h3>
     <DonationsForm
      btnName={'Save Changes'}
     />
    </section>
  )
}

export default Layout