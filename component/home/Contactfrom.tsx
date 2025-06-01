import React from "react";
import Heading from "./Heading";
import arrow from "@/public/assets/arrow.png";
import Link from "next/link";
import Image from "next/image";
const Contactfrom: React.FC = () => {
  return (
    <div
      id="contact"
      className="max-w-[1440px] lg:px-[110px] px-4 mx-auto lg:mt-[100px] mt-[80px]"
    >
      <Heading title="Contact" subtitle="" />
      <div className="flex justify-between lg:flex-row flex-col items-center gap-10 mt-20">
        <div className="flex lg:flex-col lg:flex-nowrap flex-wrap  gap-10 text-white">
          <div>
            <h1 className="text-[24px] leading-[32px] font-bold dmsans">
              Email
            </h1>
            <a
              target="_black"
              href="mailto:hello.samiularafat@gmail.com"
              className="text-[18px] font-[400] leading-[24.3px]"
            >
              hello.samiularafat@gmail.com
            </a>
          </div>
          <div>
            <h1 className="text-[24px] leading-[32px] font-bold dmsans">
              Instagram
            </h1>
            <Link
              target="_blank"
              href={"/https://www.instagram.com/_samiul_arafat/"}
              className="text-[18px] font-[400] leading-[24.3px]"
            >
              _samiul_arafat
            </Link>
          </div>
          <div>
            <h1 className="text-[24px] leading-[32px] font-bold dmsans">
              LinkedIn
            </h1>
            <Link
              target="_blank"
              href={
                "https://www.linkedin.com/in/samiul-arafat/?originalSubdomain=bd"
              }
              className="text-[18px] font-[400] leading-[24.3px]"
            >
              samiul-arafat
            </Link>
          </div>
        </div>
        <div className="bg-[#191919] md:p-10 p-4 lg:w-[563px] w-full h-[594px]  flex-col flex gap-20 items-center rounded-[20px]">
          <h1 className="text-white font-bold text-3xl">Contact</h1>
          <form className="flex flex-col gap-5 w-full" action="">
            <div className="flex flex-col gap-2 ">
              <label className="text-white">Your Name</label>
              <input
                type="text"
                className="border-b bg-[#191919] outline-none focus:outline-none text-white"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-white">Email</label>
              <input
                type="email"
                className="border-b bg-[#191919] outline-none focus:outline-none text-white"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-white">Message</label>
              <textarea className="border-b bg-[#191919] outline-none focus:outline-none text-white" />
            </div>
            <Link
              href={"https://calendly.com/imonofficial2/30min?month=2024-07"}
              target="_blank"
              className="text-white inter mt-20 flex   p-5  rounded-[16px] font-[500] text-[15px] leading-[18.15px] lg:flex  gap-2 items-center justify-center group bg-[#2919DD]"
            >
              <span className="group-hover:translate-x-1 transition-all duration-200 ease-in-out">
                Send Message
              </span>
              <Image
                src={arrow}
                alt="arrow"
                className="w-[20px] group-hover:translate-x-1 transition-all duration-200 ease-in-out"
                priority
              />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactfrom;
