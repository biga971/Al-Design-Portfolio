import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Projects.css';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

import { projectsPictures } from '../../../constants'

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        className="mySwiper"
        
      >
        {projectsPictures.map((data,index) => (
            <SwiperSlide className='' key={index} onClick={() => console.log('test')}>
                <img  src={data.url} alt=''/>
            </SwiperSlide>  
        ))}
      </Swiper>
    </>
  );
}