import React from "react";
import { Link } from "react-router-dom";
import arrow from "./../assets/arrow.png";
const Contact: React.FC = () => {
  return (
    <div className=" max-w-[1440px] lg:px-[110px] px-4 mx-auto  lg:mt-[120px] mt-[40px] ">
      <div className="rounded-[16px] flex justify-center items-center flex-col gap-4 bg-[#191919] shadow-md max-w-[1200px] mx-auto h-[300px] py-[50px]">
        <h1 className="inter font-bold italic lg:text-[64px] lg:leading-[76.6px] text-[24px] leading-[24px] text-white ">
          Have A project ?
        </h1>
        <p className="text-white inter lg:text-[20px] lg:leading-[26.5px] text-[16px] leading-[19.5px] font-[400] text-center">
          I am always available to take your projet to the next level.
        </p>
        <Link
          to={"https://calendly.com/imonofficial2/30min?month=2024-07"}
          target="_blank"
          className="text-white inter mt-2 p-5 w-[160px] h-[58px] rounded-[16px] font-[500] text-[15px] leading-[18.15px] lg:flex hidden  items-center  group bg-[#2919DD] justify-between"
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
      </div>
    </div>
  );
};

export default Contact;
