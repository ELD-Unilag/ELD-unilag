import React from 'react'
import { ourProgrammes } from './OurWorkData'
import OurWorkCard from './OurWorkCard'
import GridVectors from './GridVectors'

const OurWorkGrid = () => {
  return (
    <>
    <div className='relative grid grid-cols-1 lg:grid-cols-2  justify-items-center gap-16 '>
        {ourProgrammes.map((item, id) => {
           return <OurWorkCard item={item} key={id}/>
        })}

        <GridVectors/>

    </div>
    </>
  )
}

export default OurWorkGrid