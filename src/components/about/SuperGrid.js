import React from 'react'
import { superheroes } from './superArray'
import SuperheroCard from './SuperheroCard'

const SuperGrid = () => {
  return (
    <>
    <div className='grid grid-cols-3 lg:grid-cols-2  justify-items-center gap-8 '>
        {superheroes.map((item) => {
           return <SuperheroCard item={item} key={item}/> 
        })}

    </div>
    </>
  )
}

export default SuperGrid