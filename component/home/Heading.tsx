
import React from "react";
interface prop {
  title: string;
  subtitle: string;
}
export default function Heading({ title, subtitle }: prop) {

  return (
    <div className=" flex justify-center flex-col items-center gap-1 inter">
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="flex justify-center items-center flex-col"
      >
        <h1
        className="lg:text-[190px]  lg:leading-[240px] text-[44px] leading-[67.2px] italic text-black mark uppercase opacity-30 stroke-1 font-bold text-center flex justify-center items-center ms-5 text-stroke">
          {title}
        </h1>
        <h1 className="text-white lg:text-[64px] lg:leading-[76.8px] text-[28px] leading-[33.6px] font-[900] uppercase text-center lg:-translate-y-[107px] -translate-y-[45px]">
          {title}
        </h1>
      </div>
      <p className="inter font-[400] md:text-[16px] md:leading-[19.2px] text-white lg:-translate-y-[98px] -translate-y-[27px] lg:text-center text-left text-[16px] leading-[21.6px]">
        {subtitle}
      </p>
    </div>
  );
};

;
