import Layout from '@/components/Admin/Activity/Add/Layout'
import GoBackBtn from '@/components/Utility/GoBackBtn/GoBackBtn'
import React from 'react'

const addactivity = () => {
  return (
    <main className='adminPagesLayout'>
      <GoBackBtn />
      <Layout />
    </main>
  )
}

export default addactivity