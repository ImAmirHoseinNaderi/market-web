import React, {  useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
const ProductGallery = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div>
          <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="w-full h-[200px] md:h-[400px]"
          >
            <SwiperSlide>
              <img className='h-full w-full  object-cover md:object-fill' src='/img/product.webp' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='h-full w-full object-cover md:object-fill' src='/img/product1.webp' />
            </SwiperSlide>
           
          </Swiper>
          <Swiper
            
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className='mySwiper'
          >
            <SwiperSlide>
              <img src='/img/product.webp' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/img/product1.webp' />
            </SwiperSlide>
            
          </Swiper>
        </div>
      );
    
}

export default ProductGallery
