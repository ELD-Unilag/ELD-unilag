import React from 'react'
import { superheroes } from './superheroesData'
import SuperheroCard from './SuperheroCard'

const SuperGrid = () => {
  return (
    <>
    <div className='grid grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 gap-x-2 '>
        {superheroes.map((item) => {
           return <SuperheroCard item={item} key={item.id}/> 
        })}

    </div>
    </>
  )
}

export default SuperGrid