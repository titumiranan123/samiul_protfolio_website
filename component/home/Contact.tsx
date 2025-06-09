import React from "react";

import arrow from "@/public/assets/arrow.png";
import Link from "next/link";
import Image from "next/image";
export default function Contact(){
  return (
    <div className=" container  lg:mt-[100px] mt-[80px]">
      <div className="rounded-[16px] flex justify-center items-center flex-col gap-4 bg-[#191919] shadow-md max-w-[1200px] mx-auto h-[300px] py-[50px] px-5">
        <h1 data-aos="fade-up"
        data-aos-duration="100" className="inter font-bold italic lg:text-[64px] lg:leading-[76.6px] text-[24px] leading-[24px] text-white ">
          Have A project ?
        </h1>
        <p data-aos="fade-up"
        data-aos-duration="200" className="text-white inter lg:text-[20px] lg:leading-[26.5px] text-[16px] leading-[22.5px] font-[400] text-center">
          I am always available to take your projet to the next level.
        </p>
        <Link
        data-aos="fade-up"
        data-aos-duration="300"
          href={"https://calendly.com/imonofficial2/30min?month=2024-07"}
          target="_blank"
          className="text-white inter mt-2 p-5 w-[160px] h-[58px] rounded-[16px] font-[500] text-[15px] leading-[18.15px] lg:flex hidden  items-center  group bg-[#2919DD] justify-between"
        >
          <span className="group-hover:translate-x-1 transition-all duration-200 ease-in-out">
            Hire Me Now
          </span>
          <Image
            src={arrow}
            alt="arrow"
            className="w-[20px] group-hover:translate-x-1 transition-all duration-200 ease-in-out"
            priority
          />
        </Link>
      </div>
    </div>
  );
};


