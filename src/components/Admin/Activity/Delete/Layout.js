import React, { useState } from 'react'
import globalStyles from '@/components/Admin/adminGlobalstyles.module.css'
import DeleteBox from '@/components/Utility/DeleteComponent.js/DeleteBox'
import NoItems from '@/components/Utility/AdminUtilities/NoItems'

const Layout = () => {
  // array we will be getting from backend server
  const [items, setItems] = useState(['Awards and Dinner Night', 'ELD Day', 'Publicity Walk'])

  // UI delete i.e changes not pushed to backend server
  function UIDelete(idx){
    const itemsCopy = items
    itemsCopy.splice(idx, 1)
    setItems([...itemsCopy])
  }

  const deleteItems = items.map((each, idx) => {
    return <DeleteBox 
            key={idx}
            name={each}
            idx={idx}
            handleDelete={UIDelete}
          />
  })
  return (
    <section>
     <h3 className={`${globalStyles.header}`}>Delete Activity</h3>
     { items && items.length > 0 ? 
     <>
      <div className='mt-6 flex-col self-stretch'>
        {deleteItems}
      </div>
      <div className={`${globalStyles.btn}`}>
        Save Changes
      </div>
     </>
      : <NoItems text={'There is Currently No Active Activity'} />
     }
    </section>
  )
}

export default Layout