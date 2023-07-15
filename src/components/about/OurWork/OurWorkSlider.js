import React from 'react'
import { ourProgrammes } from './OurWorkData'
import OurWorkCard from './OurWorkCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurWorkSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // enable autoplay
        autoplaySpeed: 5000, // set autoplay speed to 3 seconds
      };

  return (
    <div className=''>
        <Slider {...settings}>
            {ourProgrammes.map((item) => (
                <OurWorkCard item = {item} />
            ))}
        </Slider>
    </div>
  )
}

export default OurWorkSlider