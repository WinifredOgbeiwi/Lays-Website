import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function PopularCrispy() {
  return (
    <div>
          <Swiper
              pagination={{
                  dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
          >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
    </div>
  )
}

export default PopularCrispy