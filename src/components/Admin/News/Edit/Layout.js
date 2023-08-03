import React from 'react'
import globalStyles from '@/components/Admin/adminGlobalstyles.module.css'
import Newsform from '../Form/form'

const Layout = () => {
 return(
  <section>
    <h3 className={`${globalStyles.header}`}>Edit News</h3>
    <Newsform 
     btnName={'Save Changes'}
    />
  </section>
 )
}

export default Layout;