import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './CustomerReview.css';

// import required modules
import { Pagination } from 'swiper/modules';

import Box from './box'
import { custommersRiviews } from '../../../constants'

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className=""
      >
        {custommersRiviews.map( (data, index) => (
            <SwiperSlide key={index} className='swiper-custom  swiper-slide-custom '><Box  data={data} /></SwiperSlide>
        )
        )}
      </Swiper>
    </>
  );
}