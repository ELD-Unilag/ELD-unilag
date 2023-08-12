import React from 'react'
import Card from './Card'
import Data from './CardsData'

const Cards = () => {
  const cards = Data.map((each, idx) => {
    return <Card 
              model={each.model}
              bg={each.background}
              star={each.star}
              key={idx}
          />
  })
  return (
    <section className="mt-10 flex justify-center">
      <div className='w-full  flex flex-wrap justify-center lg:max-w-[900px] '>
        {cards}
      </div>
    </section>
  )
}

export default Cards