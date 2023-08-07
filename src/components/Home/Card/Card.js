import React from 'react'
import CardImage from './CardImage'
import CardInfo from './CardInfo'

const Card = (props) => {
 const [flipCard, setFlipCard] = React.useState(false)

  function FlipCard({}){
    setFlipCard(prev => !prev)
  }
  return (
    <div className='group w-full md:w-[350px] max-w-[350px] lg:max-w-[420px] lg:w-[420px] lg:h-[220px] h-[183px] [perspective:1000px] mb-5 lg:mb-7'  onClick={FlipCard}>
     <div className={`relative h-full w-full rounded-[15px] border border-eldBlack shadow-box transition-all duration-500 [transform-style:preserve-3d] ${flipCard ? '[transform:rotateY(180deg)]' : ''}`}>
      <CardImage 
        bg={props.bg}
        src={props.image}
        titleColor={props.imageTitleColor}
        title={props.imageTitle}
        imageStyle={props.imageStyle}
      />
      <CardInfo 
        bg={props.bg}
      />
     </div>
    </div>
  )
}

export default Card