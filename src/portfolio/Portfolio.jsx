import React from "react";
import "./portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import sidebar from "../../src/images/cacrousalimage.png";
import ecommerce from "../../src/images/cacrousalimage.png";
import HOC from "../../src/images/cacrousalimage.png";
import musicapp from "../../src/images/cacrousalimage.png";
import 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.min.js'
import 'swiper/swiper-bundle.css';
import 'swiper/swiper-bundle.min.css';

const Portfolio = () => {
  return (
    <div className="Portfolio">
      <span>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
     spaceBetween={10}
     slidesPerView={3}
     grabCursor={true}
     className="portfolio-slider"
    >
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={musicapp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sidebar} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
