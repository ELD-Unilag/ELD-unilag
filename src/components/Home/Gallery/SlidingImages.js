import ResponsiveImage from '@/components/Utility/ResponsiveImage'
import styles from './gallery.module.css'
import image1 from '../../../../public/images/homeImages/gallery/image3.png'
import image2 from '../../../../public/images/homeImages/gallery/image4.png'
import image3 from '../../../../public/images/homeImages/gallery/image5.png'
import image4 from '../../../../public/images/homeImages/gallery/image6.png'
import React from 'react'

const SlidingImages = (props) => {
  return (
    <div className='relative w-full h-[105px] lg:h-[215px] flex whitespace-nowrap transition-all duration-1000 ease-linear mb-5'>
     <div className={`absolute left-0 flex lg:hover:pause  ${props.animateStyle}`}>
      <div className='flex  w-full '>
       <ResponsiveImage 
        src={image1}
        style={styles.galleryImage}
       />
       <ResponsiveImage 
        src={image2}
        style={styles.galleryImage}
       />
       <ResponsiveImage 
        src={image3}
        style={styles.galleryImage}
       />
       <ResponsiveImage 
        src={image4}
        style={styles.galleryImage}
       />
       <ResponsiveImage 
        src={image2}
        style={styles.galleryImage}
       />
       <ResponsiveImage 
        src={image3}
        style={styles.galleryImage}
       />
       <ResponsiveImage 
        src={image4}
        style={styles.galleryImage}
       />
      </div>
      <div className='flex w-full'>
       <ResponsiveImage 
        src={image1}
        style={styles.galleryImage}
       />
       <ResponsiveImage 
        src={image2}
        style={styles.galleryImage}
       />
       <ResponsiveImage 
        src={image3}
        style={styles.galleryImage}
       />
       <ResponsiveImage 
        src={image4}
        style={styles.galleryImage}
       />
       <ResponsiveImage 
        src={image2}
        style={styles.galleryImage}
       />
       <ResponsiveImage 
        src={image3}
        style={styles.galleryImage}
       />
       <ResponsiveImage 
        src={image4}
        style={styles.galleryImage}
       />
      </div>
     </div>
    </div>
  )
}

export default SlidingImages;