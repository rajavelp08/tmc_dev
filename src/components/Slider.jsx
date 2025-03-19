import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/Slider.css";

import img1 from "../assets/cafe.jpg";
import img2 from "../assets/pot3.jpg";
import img3 from "../assets/image3.jpg";

const Slider = () => {
  return (
    <div id ="Slider-Section">
            <Swiper
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Navigation, Pagination]}
      className="slider"
    >
      <SwiperSlide>
        <img src={img1} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="Slide 3" />
      </SwiperSlide>
    </Swiper>
    </div>
    
  );
};

export default Slider;