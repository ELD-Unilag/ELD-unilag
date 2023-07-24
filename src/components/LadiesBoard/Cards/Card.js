import React from 'react'
import CardInfo from './CardInfo';
import CardImage from './CardImage';
// import CardInfo from './CardInfo'

const Card = () => {
  const [flipCard, setFlipCard] = React.useState(false)

  function FlipCard(){
    setFlipCard(prev => !prev)
  }
  console.log(flipCard)
  return (
    <div className={` group w-[165px] h-[258px] [perspective:1000px] mx-2.5 my-5`} onClick={FlipCard}>
     <div className={`relative h-full w-full rounded-[15px] rounded-b-[13px] transition-all duration-500 [transform-style:preserve-3d]  ${flipCard ? '[transform:rotateY(180deg)]' : ''} `}>
      <CardImage />
      <CardInfo />
     </div>
    </div>
  )
}

export default Card;