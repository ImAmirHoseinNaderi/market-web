import React from "react";

// Import Swiper React components
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Slider = () => {
  
  
  return (
    <div >
      <Swiper
      style={{direction:'ltr'}}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className=" relative">
            <Link>
              <img
                className="w-full h-[300px] md:h-[100vh] object-cover m-0"
                src="./img/tv.jpg"
                alt=""
              />
              
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" relative">
            <Link>
              <img
                className="w-full h-[300px] md:h-[100vh] object-cover"
                src="./img/tv.jpg"
                alt=""
              />
             
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" relative">
            <Link>
              <img
                className="w-full h-[300px] md:h-[100vh] object-cover"
                src="./img/tv.jpg"
                alt=""
              />
             
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" relative">
            <Link>
              <img
                className="w-full h-[300px] md:h-[100vh] object-cover"
                src="./img/tv.jpg"
                alt=""
              />
              
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
