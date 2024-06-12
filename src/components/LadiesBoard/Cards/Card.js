import React from 'react'
import CardInfo from './CardInfo';
import CardImage from './CardImage';
// import CardInfo from './CardInfo'

const Card = (props) => {
  const [flipCard, setFlipCard] = React.useState(false)

  function FlipCard(){
    setFlipCard(prev => !prev)
  }
  return (
    <div className={` group w-[165px] h-[258px] [perspective:1000px] mx-2.5 my-5 lg:w-[190px] lg:h-[297px] lg:mx-5`} onClick={FlipCard}>
     <div className={`relative h-full w-full rounded-[15px] rounded-b-[13px] transition-all duration-500 [transform-style:preserve-3d]  ${flipCard ? '[transform:rotateY(180deg)]' : ''} `}>
      <CardImage 
          bg={props.bg}
          star={props.star}
          model={props.model}
      />
      <CardInfo 
          bg={props.bg}
          star={props.star}
      />
     </div>
    </div>
  )
}

export default Card;