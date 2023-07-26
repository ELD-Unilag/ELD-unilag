import React from 'react'
import GoBackBtn from '@/components/Utility/GoBackBtn/GoBackBtn'
import Layout from '@/components/Admin/News/Delete/Layout'
const deletenews = () => {
  return (
    <main className='adminPagesLayout'>
      <GoBackBtn />
      <Layout />
    </main>
  )
}

export default deletenews