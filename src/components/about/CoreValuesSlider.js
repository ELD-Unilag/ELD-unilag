import React from 'react'
import { coreValues } from './CoreValuesData'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CoreValuesCard from './CoreValuesCard';

export default function CoreValuesSlider() {

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
    <div className='lg:hidden'>
        <Slider {...settings}>
            {coreValues.map((item) => (
                <CoreValuesCard item={item} />
            ))}
        </Slider>
    </div>
  )
}