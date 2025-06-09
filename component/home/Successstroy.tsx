/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import julian from "@/public/assets/testimonial/julian.png";
import cia from "@/public/assets/testimonial/cia.png";
import marc from "@/public/assets/testimonial/marc.png";
import breanna from "@/public/assets/testimonial/breanna.png";
import { Navigation, Pagination } from "swiper/modules";
import Heading from "./Heading";
import Image from "next/image";

export default function Successstory ()  {
  const testimonialsData = [
    {
      id: 4,
      name: "Breanna Danielle MS",
      role: "Inner Health Coach",
      image: breanna,
      videoUrl: "https://vimeo.com/1015207826?share=copy",
    },
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
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null); // Swiper reference

  return (
    <div className=" container  lg:mt-[100px] mt-[80px] relative">
      <Heading title="Testimonial" subtitle="" />

      <div className="mt-12 md:h-[900px]">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          loop={false}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="swipers"
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="md:w-[386px] mx-auto md:h-[784px] h-[660px] bg-[#0e141e] ps-[26px] pt-[26px] pe-[26px] pb-[44px] rounded-[24px]">
                <div className="md:w-[334px] w-full rounded-[12px] md:h-[594px] h-[491px] overflow-hidden">
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
                    <Image
                      src={testimonial.image}
                      className="w-[100px] h-[80px] rounded-full"
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
        {/* Custom Pagination (Right Side) */}
        <div className="absolute right-16 top-[60%] transform -translate-y-1/2 flex flex-col gap-3">
          {testimonialsData.slice(0, -2).map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                activeIndex === index ? "bg-[#1c2bf8] h-8 " : "bg-gray-400 h-3"
              }`}
              onClick={() => {
                swiperRef.current?.slideTo(index); // Change slide on click
                setActiveIndex(index); // Update active state
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};


