import React from 'react'
import OurWorkGrid from './OurWorkGrid'
import OurWorkVectors from './OurWorkVectors'
import OurWorkSlider from './OurWorkSlider'
import { useEffect, useState } from 'react'



const OurWorkSection = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Set the threshold size here
    };

    // Add event listener to listen for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='py-10 px-[20px] h-max pb-[250px] md:px-[50px] lg:px-[100px] xl:px-[150px] relative'>
        <div className='w-[90%] lg:w-[80%] m-auto items-center text-center pb-[50px] md:pb-[80] lg:pb-[120px]'>
            <h2 className='sectionHeader font-satoshi pb-4 md:pb-8'>
                Our Work
            </h2>
            <p className='ourWorkText text-xs lg:text-base'>Lörem ipsum nade dening lenir yrat, att tiplant, att gigavönat rugon: hexaning kakåra plall des, dyslogi jide ifall esiren. Fav ev i spelabelt äs, sitskate</p>
            <p className='ourWorkText hidden md:block md:text-xs lg:text-base'>i osm tirade tehänas, såväl som don tose i prektiga egor. Trarade preskap ålolingar och otrohetsdejting miska ov för att nyngar. Egonäsen exoling, primatos, laddstolpe. Multinira diling dyck personalisering i oligt: tynynde</p>
            <p className='ourWorkText hidden lg:block lg:text-base'>primatos, laddstolpe. Multinira diling dyck personalisering i oligt: tynynde anajiren krost ovösk näsade, jing prio flexidaritet. Teramodern förstärkt verklighet, infrasamma söligt til i sogon, koncentrism nyckelord nen retailtainment det vill säga mikrona besiligen. Prevönire orostelefon multiska.</p>
        </div>

        {/* Render Grid or Slider  */}

        {isSmallScreen ?  <OurWorkSlider/> :<OurWorkGrid/> }

        {/* <OurWorkSlider/> */}

        <OurWorkVectors/>

    </div>
  )
}

export default OurWorkSection