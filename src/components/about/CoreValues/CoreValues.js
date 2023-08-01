import React, { useState, useEffect } from 'react'
import BlackStar from '../../../../public/images/aboutImages/corevalues/blackstar.svg'
import spiral from '../../../../public/images/aboutImages/corevalues/spiral.svg'
import styles from './corevalues.module.css'
import ResponsiveImage from '@/components/Utility/ResponsiveImage'
import ValuesCard from './ValuesCard'
import data from './Data'

const CoreValues = () => {
  const [slide, setSlide] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const move = slide ? '-translate-x-[50%]' : '-translate-x-0'

  useEffect(() => {
    function handleResize() {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    }

    // Initial size on component mount
    handleResize();

    // Event listener to update on resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
// CORE VALUES DATA LOGIC
  const row1Values = data.row1data.map((each, idx) => {
    return <ValuesCard 
              img={each.imgURL}
              header={each.title}
              bg={each.bgColor}
              imgstyle={each.imgstyle}
              key={idx}
          />
  })
  const row2Values = data.row2data.map((each, idx) => {
    return <ValuesCard 
              img={each.imgURL}
              header={each.title}
              bg={each.bgColor}
              imgstyle={each.imgstyle}
              key={idx}
          />
  })


//SLIDING lOGIC
  function setSlderTrue(){
    if(screenSize.width < 640){
      setSlide(true)
    }
  }
  function setSliderFalse(){
    if(screenSize.width < 640){
      setSlide(false)
    }
  }

//SWIPING FEATURE
// the required distance between touchStart and touchEnd to be detected as a swipe
const minSwipeDistance = 50 

const onTouchStart = (e) => {
  setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
  setTouchStart(e.targetTouches[0].clientX)
}

const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

const onTouchEnd = () => {
  if (!touchStart || !touchEnd) return
  const distance = touchStart - touchEnd
  const isLeftSwipe = distance > minSwipeDistance
  const isRightSwipe = distance < -minSwipeDistance
  if (isLeftSwipe || isRightSwipe)  isLeftSwipe ? setSlderTrue() : setSliderFalse()
}
  return (
    <section className='px-5 mt-14 font-satoshi relative lg:px-0 lg:max-w-[80%] lg:mx-auto'>
     <div className='relative w-fit mx-auto lg:w-full'>
      <h3 className='text-4xl font-bold text-eldBlack lg:text-center lg:text-5xl'>Our Core Values</h3>
      <ResponsiveImage 
       src={BlackStar}
       style={styles.blackstar}
      />
      <ResponsiveImage 
       src={BlackStar}
       style={styles.blackstar2}
      />
     </div>
     <div className='mt-12 w-full  overflow-hidden'>
      <div className={`sm:flex-col  sm:items-center w-full transition-all ease-linear duration-200 ${move} `} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <div className={`${styles.cardrow} mb-5`}>
          {row1Values}
        </div>
        <div className={`${styles.cardrow}`}>
          {row2Values}
        </div>
      </div>

      <ResponsiveImage 
          src={spiral}
          style={styles.spiral}
        />
     </div>
     <div className="mt-8 flex items-center justify-center gap-2 sm:hidden">
      <div className={`${styles.sliderControlsDefault} ${  !slide ? styles.sliderControlsActive : '' }`} onClick={setSliderFalse}></div>
      <div className='bg-eldBlack w-3 h-0.5'></div>
      <div className={` ${styles.sliderControlsDefault} ${ slide ? styles.sliderControlsActive : '' }`} onClick={setSlderTrue}></div>
     </div>
    </section>
  )
}

export default CoreValues

