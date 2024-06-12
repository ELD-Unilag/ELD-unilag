import ResponsiveImage from '@/components/Utility/ResponsiveImage'
import halfCircle from '../../../../public/images/homeImages/gallery/halfcircle.png'
import bigStar from '../../../../public/images/homeImages/gallery/bigstar.svg'
import smallStar from '../../../../public/images/homeImages/gallery/smallstar.svg'
import styles from './gallery.module.css'
import React from 'react'
import SlidingImages from './SlidingImages'

const Gallery = () => {

  // spliting images data into 3 array here

  return (
   <section className="mt-20 bg-eldBlack w-full h-[647px] lg:h-[1100px] font-satoshi text-white relative overflow-hidden pt-14 lg:mt-24">
    <div className=' w-fit mx-auto relative'>
     <h3 className='sectionHeader text-white font-satoshi text-center'>Our Gallery</h3>
     <ResponsiveImage 
      src={smallStar}
      style={styles.smallStar}
      alt='smallstar'
     />
    </div>
    <div className='mt-3.5 w-fit mx-auto relative'>
     <p className='max-w-[250px] text-center text-xs mx-auto leading-[17px] lg:text-base lg:max-w-[450px]'>
       Lorem ipsum dolor sit amet consectetur. Est mattis dignissim consectetur nulla platea. Amet faucibus leo aenean ante in nunc laoreet.
     </p>
     <ResponsiveImage 
      src={bigStar}
      style={styles.bigStar}
      alt='big-star'
     />
    </div>
    <ResponsiveImage 
     src={halfCircle}
     style={styles.halfcircle}
     alt='halfCircle'
    />
    <div className='mt-[60px] lg:mt-[100px]'>
      <SlidingImages 
        animateStyle={styles.animate}
      />
      <SlidingImages 
        animateStyle={styles.animateReverse}
      />
      <SlidingImages 
        animateStyle={styles.animate}
      />
    </div>
   </section>
  )
}

export default Gallery

