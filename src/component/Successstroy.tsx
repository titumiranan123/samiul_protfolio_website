import React from "react";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import julian from "./../assets/testimonial/julian.png";
import cia from "./../assets/testimonial/cia.png";
import marc from "./../assets/testimonial/marc.png";
import breanna from "./../assets/testimonial/breanna.png";
import { Navigation, Pagination } from "swiper/modules";
import Heading from "./Heading";

const Successstory: React.FC = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Julian De Graaf",
      role: "CEO, Elite Rentals",
      image: julian,
      videoUrl: "https://vimeo.com/1007475654?share=copy",
    },
    {
      id: 2,
      name: "Cia E",
      role: "Trauma Recovery & Relationship Coach",
      image: cia,
      videoUrl: "https://vimeo.com/1007476080?share=copy",
    },
    {
      id: 3,
      name: "Marc Palombo",
      role: "Actor, The Talent Group",
      image: marc,
      videoUrl: "https://vimeo.com/1007476337?share=copy",
    },
    {
      id: 4,
      name: "Breanna Danielle MS",
      role: "Inner Health Coach",
      image: breanna,
      videoUrl: "https://vimeo.com/1015207826?share=copy",
    },
  ];

  return (
    <div className="max-w-[1440px] lg:px-[110px] px-4 mx-auto lg:mt-[100px] mt-[80px] relative">
      <Heading title="Testimonial" subtitle="" />

      <div className="mt-12 md:h-[900px]">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20, // Adjust space for mobile
            },

            1024: {
              slidesPerView: 3,
              spaceBetween: 40, // Adjust space for larger screens
            },
          }}
          className="swipers"
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="md:w-[386px] mx-auto md:h-[784px] h-[660px] bg-[#0e141e] ps-[26px] pt-[26px] pe-[26px] pb-[44px] rounded-[24px]">
                <div className="md:w-[334px] w-full  rounded-[12px] md:h-[594px] h-[491px] overflow-hidden">
                  <ReactPlayer
                    url={testimonial.videoUrl}
                    controls
                    width="100%"
                    height="100%"
                    className="rounded-[12px]"
                  />
                </div>
                <div className="flex gap-5 items-center mt-10">
                  <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      className=" w-[100px] h-[80px] rounded-full "
                      alt={testimonial.name}
                    />
                  </div>
                  <div>
                    <h1 className="semibold md:text-[24px] text-[20px] text-[#D9D9D9]">
                      {testimonial.name}
                    </h1>
                    <p className="regular font-[500] md:text-[20px] text-[14px] text-[#D9D9D9] md:leading-[25.6px] leading-[16px]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Successstory;
