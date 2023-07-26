import React from 'react'
import GoBackBtn from '@/components/Utility/GoBackBtn/GoBackBtn'
import Layout from '@/components/Admin/Activity/Delete/Layout'

const deleteactivity = () => {
  return (
    <main className='adminPagesLayout'>
      <GoBackBtn />
      <Layout />
    </main>
  )
}

export default deleteactivity