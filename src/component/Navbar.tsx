import React, { useState } from "react";
import logo from "./../assets/logo.png";
import arrow from "./../assets/arrow.png";
import { Link } from "react-router-dom";
import close from "./../assets/close.png";
const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  //   const Customroute = ({ href, title, className }) => {
  //     const path = useLocation()
  //     return (
  //       <Link to={href} className={`${className}`}>
  //         {title}
  //       </Link>
  //     );
  //   };
  return (
    <div className="max-w-[1440px] lg:px-[110px] px-4 lg:py-10 md:py-8 py-8 mx-auto flex justify-between items-center inter relative">
      <img src={logo} alt="logo" />
      <div className="lg:flex hidden items-center gap-4 text-white">
        <Link className="text-[20px] font-[700]" to="#">
          Home
        </Link>
        <Link className="text-[20px] font-[500]" to="#">
          Works
        </Link>
        <Link className="text-[20px] font-[500]" to="#">
          About
        </Link>
        <Link className="text-[20px] font-[500]" to="#">
          Contact
        </Link>
      </div>
      <Link
        to={"https://calendly.com/imonofficial2/30min?month=2024-07"}
        className="text-white inter border p-5 w-[170px] rounded-[16px] font-[500] text-[15px] leading-[18.15px] lg:flex hidden gap-2 items-center justify-center group"
      >
        <span className="group-hover:translate-x-1 transition-all duration-200 ease-in-out">
          Contact
        </span>
        <img
          src={arrow}
          alt="arrow"
          className="w-[20px] group-hover:translate-x-1 transition-all duration-200 ease-in-out"
        />
      </Link>
      <div
        onClick={() => setOpen(!isOpen)}
        className="lg:hidden  flex flex-col gap-[6px]"
      >
        <span className="w-7 h-[3px] bg-white"></span>
        <span className="w-7 h-[3px] bg-white"></span>
        <span className="w-7 h-[3px] bg-white"></span>
      </div>
      {isOpen && (
        // mobile navigation
        <div className="bg-white absolute w-full top-0 h-[300px] left-0 rounded-[20px]  ">
          <div
            onClick={() => setOpen(!isOpen)}
            className="flex flex-col absolute top-[40px] right-[20px] "
          >
            <img className="w-8 h-8" src={close} alt="close" />
          </div>
          <div className="flex flex-col items-center justify-center gap-1 h-full">
            <Link className="text-[20px] font-[700]" to="#">
              Home
            </Link>
            <Link className="text-[20px] font-[500]" to="#">
              Works
            </Link>
            <Link className="text-[20px] font-[500]" to="#">
              About
            </Link>
            <Link className="text-[20px] font-[500]" to="#">
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
