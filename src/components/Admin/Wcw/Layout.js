import React from 'react'
import globalStyles from '../adminGlobalstyles.module.css'
import Form from './Form'

const Layout = () => {
  return (
    <section>
     <h3 className={globalStyles.header}>Edit WCW</h3>
     <Form btnName={"Save Changes"}/>
    </section>
  )
}

export default Layout