// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { imageSliders } from "../constant";
// import { Pagination, Navigation } from "swiper/modules";

// import required modules
// import { Pagination } from "swiper/modules";

export default function ImageSlider() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl md:text-4xl">Bottoms in Eveyday</h2>
        <p className="text-xl md:text-2xl">@bottomshoes</p>
      </div>
      <Swiper
        className="cursor-pointer text-center my-6"
        centeredSlides={true}
        slidesPerView={4}
        spaceBetween={30}
        loop={true}>
        {imageSliders.map((image, i) => (
          <SwiperSlide className="aspect-square overflow-hidden" key={i}>
            <img
              className="object-cover object-center h-full w-full"
              src={image.source}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
