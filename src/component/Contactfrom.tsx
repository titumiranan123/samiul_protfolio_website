import React from "react";
import Heading from "./Heading";
import arrow from "./../assets/arrow.png";
import { Link } from "react-router-dom";
const Contactfrom: React.FC = () => {
  return (
    <div className="max-w-[1240px] lg:mt-[120px] md:mt-20  lg:px-0 mx-auto px-4 mt-[100px]">
      <Heading title="Contact" subtitle="" />
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-10">
          <div>
            <h1>Email</h1>
            <p>hello.samiularafat@gmail.com</p>
          </div>
          <div>
            <h1>Instagram</h1>
            <p>_samiul_arafat</p>
          </div>
          <div>
            <h1>LinkedIn</h1>
            <p>samiul-arafat</p>
          </div>
        </div>
        <div className="bg-[#191919] px-5 py-8 lg:w-[563px] h-[524px] rounded-md flex-col flex justify-between items-center">
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
              <input
                type="text"
                className="border-b bg-[#191919] outline-none focus:outline-none text-white"
              />
            </div>
            <Link
              to={"https://calendly.com/imonofficial2/30min?month=2024-07"}
              className="text-white inter  p-5  rounded-[16px] font-[500] text-[15px] leading-[18.15px] lg:flex hidden gap-2 items-center justify-center group bg-[#2919DD]"
            >
              <span className="group-hover:translate-x-1 transition-all duration-200 ease-in-out">
                Send Message
              </span>
              <img
                src={arrow}
                alt="arrow"
                className="w-[20px] group-hover:translate-x-1 transition-all duration-200 ease-in-out"
              />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactfrom;
