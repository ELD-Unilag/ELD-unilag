import React from 'react'
import GoBackBtn from '@/components/Utility/AdminUtilities/GoBackBtn/GoBackBtn'
import Layout from '@/components/Admin/Donation/Add/Layout'

const adddonation = () => {
  return (
    <main className='adminPagesLayout'>
      <GoBackBtn />
      <Layout />
    </main>
  )
}

export default adddonation