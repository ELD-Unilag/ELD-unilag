import React from 'react'
import GoBackBtn from '@/components/Utility/AdminUtilities/GoBackBtn/GoBackBtn'
import Layout from '@/components/Admin/News/Add/Layout'

const addnews = () => {
  return (
    <main className='adminPagesLayout'>
      <GoBackBtn />
      <Layout />
    </main>
  )
}

export default addnews