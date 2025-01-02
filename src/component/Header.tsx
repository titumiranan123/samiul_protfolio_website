import React from "react";
import user from "./../assets/samiul.png";
import { Link } from "react-router-dom";
import arrow from "./../assets/arrow.png";
import user1 from "./../assets/user1.png";
import playbutton from "./../assets/play.png";
const Header: React.FC = () => {
  return (
    <div className="max-w-[1440px] lg:px-[110px] px-4 mx-auto   mt-[40px] flex md:flex-row justify-between flex-col">
      <div className="content lg:w-[615px] w-full">
        <h1 className="inter  lg:text-[160px] lg:leading-[160px] text-[64px] font-[64px] text-white">
          Video Editor
        </h1>
        <span className="text-white font-[400px] dmsans text-[20px] leading-[27px] mt-[16px]">
          Hi, I am Samiul, helping Podcasters & Coaches with Video Editing and
          Thumbnail Design
        </span>
        <div className="flex gap-5 mt-[70px]">
          <Link
            to={"https://calendly.com/imonofficial2/30min?month=2024-07"}
            className="text-white inter border p-5 w-[170px] rounded-[16px] font-[500] text-[15px] leading-[18.15px] lg:flex hidden gap-2 items-center justify-center group bg-[#2919DD]"
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
          <div className="flex  translate-x-10">
            <img src={user1} className="" alt="user1" />
            <img src={user1} className="-translate-x-4" alt="user1" />
            <img src={user1} className="-translate-x-9" alt="user1" />
          </div>
          <div className="w-[190px] h-[61px] bg-[#191919] p-[20.84px] text-white inter font-[600] text-[16.82px] leading-[20.36px] -translate-x-4  rounded-[56px]">
            2k+ Happy Clients
          </div>
        </div>
        <img src={user} alt="" />
        <div className="absolute bottom-0 left-0 w-[191px] h-[68px] bg-[#191919] p-[20.84px] text-white inter font-[400] text-[18.82px] leading-[24.36px]   rounded-[56px] flex items-center justify-center gap-3">
          <img src={playbutton} alt="" />
          <span>Play Intro</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
