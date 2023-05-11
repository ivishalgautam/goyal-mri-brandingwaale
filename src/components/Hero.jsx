import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Hero = () => {
  return (
    <div className="md:grid md:grid-cols-6 h-full lg:h-[378px] m-10 gap-4">
      <div className="md:col-span-4 h-full">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={false}
          className="w-full h-full rounded-md overflow-hidden mb-4"
        >
          <SwiperSlide className="w-full h-full">
            <img
              src="../../src/assets/Banner.png"
              alt="banner"
              className="w-full h-full object-cover object-center"
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <img
              src="../../src/assets/Banner.png"
              alt="banner"
              className="w-full h-full object-cover object-center "
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="md:col-span-2 w-full h-full flex flex-col items-center justify-between bg-white rounded-xl p-2">
        <h2 className="relative py-2 text-2xl md:text-lg lg:text-xl font-bold mb-2 after:absolute after:w-[60px]  after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:border-b-4 after:border-primary after:rounded-full">
          Request Callback
        </h2>
        <form className="w-full">
          <input
            type="text"
            placeholder="Name"
            className="border w-full my-[15px] px-2 py-1 rounded-md"
          />
          <input
            type="text"
            placeholder="Contact Number"
            className="border w-full my-[15px] py-1 px-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Test/Service"
            className="border w-full my-[15px] py-1 px-2 rounded-md"
          />
        </form>
        <button className="bg-accent px-4 py-2 mt-2 text-white rounded-md">
          Call me back
        </button>
      </div>
    </div>
  );
};

export default Hero;
