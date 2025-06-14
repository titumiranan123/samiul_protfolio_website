'use client'
import React, { useState } from "react";
import logo from "@/public/assets/logo.png";
import arrow from "@/public/assets/arrow.png";

import close from "@/public/assets/close.png";
import Link from "next/link";
import Image from "next/image";

export default function Navbar()  {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="max-w-[1440px] lg:px-[110px] px-4 lg:py-10 md:py-8 py-8 mx-auto flex justify-between items-center inter relative">
      <Image src={logo} alt="logo" />
      <div className="lg:flex hidden items-center gap-4 text-white">
        <Link className="text-[20px] font-[700]" href="#">
          Home
        </Link>
        <a className="text-[20px] font-[500]" href="#works">
          Works
        </a>
        <a className="text-[20px] font-[500]" href="#about">
          About
        </a>
        <a className="text-[20px] font-[500]" href="#contact">
          Contact
        </a>
      </div>
      <Link
        href={"https://calendly.com/imonofficial2/30min?month=2024-07"}
        target="_blank"
        className="text-white inter border p-5 w-[170px] rounded-[16px] font-[500] text-[15px] leading-[18.15px] lg:flex hidden gap-2 items-center justify-center group"
      >
        <span className="group-hover:translate-x-1 transition-all duration-200 ease-in-out">
          Contact
        </span>
        <Image
          src={arrow}
          alt="arrow"
          className="w-[20px] group-hover:translate-x-1 transition-all duration-200 ease-in-out"
        />
      </Link>
      <div
        onClick={toggle}
        className="lg:hidden flex flex-col gap-[6px] cursor-pointer"
      >
        <span className="w-7 h-[3px] bg-white"></span>
        <span className="w-7 h-[3px] bg-white"></span>
        <span className="w-7 h-[3px] bg-white"></span>
      </div>
      {isOpen && (
        // mobile navigation
        <div className="bg-white absolute w-full top-0 h-[300px] left-0 rounded-[20px] z-50">
          <div
            onClick={toggle}
            className="flex flex-col absolute top-[40px] right-[20px] cursor-pointer"
          >
            <Image className="w-8 h-8" src={close} alt="close" />
          </div>
          <div className="flex flex-col items-center justify-center gap-1 h-full">
            <a onClick={toggle} className="text-[20px] font-[700]" href="#">
              Home
            </a>
            <a
              onClick={toggle}
              className="text-[20px] font-[500]"
              href="#works"
            >
              Works
            </a>
            <a
              onClick={toggle}
              className="text-[20px] font-[500]"
              href="#about"
            >
              About
            </a>
            <a
              onClick={toggle}
              className="text-[20px] font-[500]"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

