import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ProductCard from './ProductCard';
const SliderSimilier = () => {
    return (
        <>
          <Swiper
             breakpoints={{
                0:{
                    slidesPerView: 1,
                    spaceBetween:10
                },
                480:{
                    slidesPerView: 2,
                    spaceBetween:20
                },
                800:{
                    slidesPerView: 3,
                    spaceBetween:30                
                }
             }}
            
            pagination={{
              clickable: true,
            }}
            
            className=" "
          >
            <SwiperSlide><ProductCard /></SwiperSlide>
            <SwiperSlide><ProductCard/></SwiperSlide>
            <SwiperSlide><ProductCard/></SwiperSlide>
            <SwiperSlide><ProductCard/></SwiperSlide>
            <SwiperSlide><ProductCard/></SwiperSlide>
            <SwiperSlide><ProductCard/></SwiperSlide>
            <SwiperSlide><ProductCard/></SwiperSlide>
            <SwiperSlide><ProductCard/></SwiperSlide>
          </Swiper>
        </>
      );
}

export default SliderSimilier
