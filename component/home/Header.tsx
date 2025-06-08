"use client"
import React, {  useState } from "react";
import ReactPlayer from "react-player";

import user from "@/public/assets/samiul.png";
import arrow from "@/public/assets/arrow.png";
import user1 from "@/public/assets/user1.png";
import user2 from "@/public/assets/user2.png";
import user3 from "@/public/assets/user3.png";
import playbutton from "@/public/assets/play.png";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className=" container  mt-[40px] flex md:flex-row justify-between flex-col">
      {/* Left Content */}
      <div className="content lg:w-[615px] h-[450px] w-full">
        <h1
          data-aos="fade-right"
          className="inter lg:text-[160px] lg:leading-[160px] text-[64px] leading-[72px] lg:mb-0 mb-3 font-[900] uppercase text-white"
        >
          Video Editor
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-white lg:w-[615px] font-[400] text-[20px] leading-[27px] mt-[16px] tracking-tighter"
        >
          Hi, I am Samiul, helping Podcasters & Coaches with Video Editing and Thumbnail Design
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-[70px] animate-fade-in" data-aos="fade-up" data-aos-delay="200">
          <Link
            target="_blank"
            href="https://calendly.com/imonofficial2/30min?month=2024-07"
            className="text-white inter md:p-5 md:py-0 md:px-0 py-5 px-3 md:w-[170px] w-[150px] rounded-[16px] font-[500] text-[15px] leading-[18.15px] flex gap-2 items-center justify-center group bg-[#2919DD] hover:bg-[#1e14b3] transition-all"
          >
            <span className="group-hover:translate-x-1 transition-all duration-200 ease-in-out">
              Contact Now
            </span>
            <Image
              src={arrow}
              alt="arrow"
              className="w-[20px] group-hover:translate-x-1 transition-all duration-200 ease-in-out"
            />
          </Link>

          <Link
            target="_blank"
            href="https://calendly.com/imonofficial2/30min?month=2024-07"
            className="text-white inter border md:p-5 p-3 md:w-[170px] w-[150px] rounded-[16px] font-[500] text-[15px] leading-[18.15px] flex gap-2 items-center justify-center group hover:bg-white hover:text-black transition-all"
          >
            <span className="group-hover:translate-x-1 transition-all duration-200 ease-in-out">
              Book a Call
            </span>
            <Image
              src={arrow}
              alt="arrow"
              className="w-[20px] group-hover:translate-x-1 transition-all duration-200 ease-in-out"
            />
          </Link>
        </div>
      </div>

      {/* Right Content */}
      <div className="relative" data-aos="fade-left" data-aos-delay="300">
        {/* User Images & Clients Count */}
        <div className="flex absolute right-0">
          <div className="flex md:translate-x-10 translate-x-[42px]">
            <Image
              src={user1}
              className="md:w-[61.68px] md:h-[61.68px] rounded-full w-[42px] h-[42px] shadow-lg"
              alt="user1"
            />
            <Image
              src={user2}
              className="-translate-x-4 md:w-[61.68px] md:h-[61.68px] rounded-full w-[42px] h-[42px] shadow-lg"
              alt="user2"
            />
            <Image
              src={user3}
              className="-translate-x-9 md:w-[61.68px] md:h-[61.68px] rounded-full w-[42px] h-[42px] shadow-lg"
              alt="user3"
            />
          </div>
          <div className="md:w-[190px] w-[130px] md:h-[61px] h-[42px] bg-[#191919] md:p-[20.84px] p-[6px] flex justify-center items-center text-white inter font-[600] md:text-[16.82px] text-[12px] -translate-x-1 rounded-[56px]">
            2k+ Happy Clients
          </div>
        </div>

        {/* Profile Image */}
        <Image src={user} alt="Profile" className="shadow-xl rounded-lg" />

        {/* Play Intro Button */}
        <div
          onClick={() => setIsOpen(true)}
          className="absolute bottom-[4px] md:bottom-0 left-0 md:w-[191px] w-[122px] md:h-[68px] h-[42px] bg-[#191919] md:p-[20.84px] text-white inter font-[400] md:text-[18.82px] text-[14px] rounded-[56px] flex items-center justify-center gap-3 cursor-pointer hover:bg-opacity-80 transition-all"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <Image className="w-4 h-4 md:h-6 md:w-6" src={playbutton} alt="Play" />
          <span>Play Intro</span>
        </div>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-85 flex justify-center items-center transition-opacity duration-500"
          data-aos="fade-in"
        >
          {/* Close Button */}
          <div
            onClick={() => setIsOpen(false)}
            className="text-white text-2xl absolute right-10 tomd:p-5 p-3 cursor-pointer hover:text-red-500 transition-all"
            data-aos="zoom-in"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
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

          {/* Video Player */}
          <div
            className="lg:w-[1024px] lg:h-[576px] md:w-[640px] md:h-[360px] w-full h-full overflow-hidden rounded-2xl bg-[#191919]"
            data-aos="zoom-in"
          >
            <ReactPlayer
              url="https://youtu.be/KNK0DdMh1ZY?si=MXF2PhFhcPzPbUvS"
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
