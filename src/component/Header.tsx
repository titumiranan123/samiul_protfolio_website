import React, { useState } from "react";
import user from "./../assets/samiul.png";
import { Link } from "react-router-dom";
import arrow from "./../assets/arrow.png";
import user1 from "./../assets/user1.png";
import user2 from "./../assets/user2.png";
import user3 from "./../assets/user3.png";
import playbutton from "./../assets/play.png";
import ReactPlayer from "react-player";
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-[1440px] lg:px-[110px] px-4 mx-auto   mt-[40px] flex md:flex-row justify-between flex-col ">
      <div className="content lg:w-[615px] w-full">
        <h1 className="inter  lg:text-[160px] lg:leading-[160px] text-[64px] leading-[72px] lg:mb-0 mb-3 font-bold uppercase text-white">
          Video Editor
        </h1>
        <span className="text-white lg:w-[615px] font-[400px] dmsans text-[20px] leading-[27px] mt-[16px] tracking-tighter">
          Hi, I am Samiul, helping Podcasters & Coaches with Video Editing and
          Thumbnail Design
        </span>
        <div className="flex gap-5 mt-[70px]">
          <Link
            target="_blank"
            to={"https://calendly.com/imonofficial2/30min?month=2024-07"}
            className="text-white inter  p-5 w-[170px] rounded-[16px] font-[500] text-[15px] leading-[18.15px] lg:flex hidden gap-2 items-center justify-center group bg-[#2919DD]"
          >
            <span className="group-hover:translate-x-1 transition-all duration-200 ease-in-out">
              Hire Me Now
            </span>
            <img
              src={arrow}
              alt="arrow"
              className="w-[20px] group-hover:translate-x-1 transition-all duration-200 ease-in-out"
            />
          </Link>
          <Link
            target="_blank"
            to={"https://calendly.com/imonofficial2/30min?month=2024-07"}
            className="text-white inter border p-5 w-[170px] rounded-[16px] font-[500] text-[15px] leading-[18.15px] lg:flex hidden gap-2 items-center justify-center group"
          >
            <span className="group-hover:translate-x-1 transition-all duration-200 ease-in-out">
              Book a Call
            </span>
            <img
              src={arrow}
              alt="arrow"
              className="w-[20px] group-hover:translate-x-1 transition-all duration-200 ease-in-out"
            />
          </Link>
        </div>
      </div>
      <div className="relative">
        <div className=" flex absolute right-0">
          <div className="flex  md:translate-x-10 translate-x-[45px]">
            <img
              src={user1}
              className="md:w-[61.68px] md:h-[61.68px] rounded-full w-[42px] h-[42px]"
              alt="user1"
            />
            <img
              src={user2}
              className="-translate-x-4 md:w-[61.68px] md:h-[61.68px] rounded-full w-[42px] h-[42px]"
              alt="user1"
            />
            <img
              src={user3}
              className="-translate-x-9 md:w-[61.68px] md:h-[61.68px] rounded-full w-[42px] h-[42px]"
              alt="user1"
            />
          </div>
          <div className="md:w-[190px] w-[130px] md:h-[61px] h-[42px]  bg-[#191919] md:p-[20.84px] p-[6px] flex justify-center items-center text-white inter font-[600] md:text-[16.82px] md:leading-[20.36px] text-[12px] -translate-x-1  rounded-[56px]">
            2k+ Happy Clients
          </div>
        </div>
        <img src={user} alt="" />
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="absolute bottom-[4px] md:bottom-0 left-0 md:w-[191px] w-[115px] md:h-[68px] h-[42px] bg-[#191919] md:p-[20.84px]  text-white inter font-[400] md:text-[18.82px] md:leading-[24.36px] text-[14px]  rounded-[56px] flex items-center justify-center gap-3 cursor-pointer lg:mt-0 mt-3"
        >
          <img className="w-4 h-4 md:h-6 md:w-6" src={playbutton} alt="" />
          <span>Play Intro</span>
        </div>
      </div>
      {isOpen && (
        <div className="transition-all duration-500 ease-in-out h-screen  w-full fixed inset-0 bg-black flex justify-center items-center  bg-opacity-85 before:relative z-50">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl absolute right-36 top-5 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white cursor-pointer"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
          <div className="lg:w-[1024px] lg:h-[576px] md:w-[640px] md:h-[360px] w-full h-full overflow-hidden rounded-2xl bg-[#191919]">
            <ReactPlayer
              url={`https://vimeo.com/1007475654?share=copyhttps://youtu.be/p1nUaBwX2RE?si=ngksm1cTCFUIP0-M`}
              controls
              width="100%"
              height="100%"
              className="rounded-[12px]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
