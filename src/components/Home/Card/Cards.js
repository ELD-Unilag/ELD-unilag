import ResponsiveImage from '@/components/Utility/ResponsiveImage';
import Logo from '../../../../public/images/homeImages/flipcards/EldLogo.svg'
import styles from './flipCards.module.css'
import React from 'react'
import Card from './Card';
import data from './Data';



const FlipCards = () => {

  const cards = data.map((each, idx) => {
    return <Card 
            key={idx}
            image={each.image}
            imageTitle={each.title}
            bg={each.bg}
            imageTitleColor={each.imageText}
            imageStyle={each.imageStyle}
          />
  })
  return (
    <section className='mt-10 flex-col items-center mx-5 text-eldBlack font-satoshi  md:w-[90%] md:mx-auto lg:w-fit'>
     <div className='flex justify-between items-center'>
      <div className='flex items-center gap-2.5'>
       <h3 className='text-4xl lg:text-5xl font-bold'>Flip</h3>
       <div className=' w-[135px] h-9  lg:w-[162px] lg:h-[43px] flex items-center justify-center text-white text-xs lg:text-sm font-medium tracking-[2.4px] uppercase bg-primaryBg border border-eldBlack rounded-[100px] -rotate-2'>The cards</div>
      </div>
      <ResponsiveImage 
       src={Logo}
       style={styles.logo}
      />
     </div>
     <div>
      <div className='mt-12 w-full max-w-[350px] mx-auto md:max-w-none md:grid-cols-2 md:grid md:w-fit md:gap-x-[7%]'>
        {cards}
      </div>
     </div>
    </section>
  )
}

export default FlipCards;