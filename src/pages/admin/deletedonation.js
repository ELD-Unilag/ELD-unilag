import React from 'react'
import GoBackBtn from '@/components/Utility/AdminUtilities/GoBackBtn/GoBackBtn'
import Layout from '@/components/Admin/Donation/Delete/Layout'

const deletedonation = () => {
  return (
    <main className='adminPagesLayout'>
      <GoBackBtn />
      <Layout />
    </main>
  )
}

export default deletedonation