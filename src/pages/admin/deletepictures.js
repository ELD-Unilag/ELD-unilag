import React from 'react'
import GoBackBtn from '@/components/Utility/AdminUtilities/GoBackBtn/GoBackBtn'
import Layout from '@/components/Admin/Gallery/Delete/Layout'

const deletepictures = () => {
  return (
    <main className='adminPagesLayout'>
      <GoBackBtn />
      <Layout />
    </main>
  )
}

export default deletepictures