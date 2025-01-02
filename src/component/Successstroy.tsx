import React from "react";
import ReactPlayer from "react-player";
import julian from "./../assets/testimonial/julian.png";
import cia from "./../assets/testimonial/cia.png";
import marc from "./../assets/testimonial/marc.png";
import Heading from "./Heading";
const Successstroy: React.FC = () => {
  return (
    <div className="max-w-[1240px] lg:mt-[120px] md:mt-20  lg:px-0 mx-auto px-4 mt-[100px]">
      <Heading title="Testimonial" subtitle="" />
      <div className="mt-12 gap-4 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 lg:gap-10">
        <div className="md:w-[386px] md:h-[784px] h-[660px] bg-[#0e141e] ps-[26px] pt-[26px] pe-[26px] pb-[44px] rounded-[24px]">
          <div className="md:w-[334px] w-full  rounded-[12px] md:h-[594px] h-[491px] overflow-hidden">
            <ReactPlayer
              url={`https://vimeo.com/1007475654?share=copy`}
              controls
              width="100%"
              height="100%"
            />
          </div>
          <div className="flex gap-5 items-center mt-10">
            <div>
              <img
                src={julian}
                className=" w-[80px] h-[80px] rounded-full"
                alt=""
              />
            </div>
            <div>
              <h1 className="semibold md:text-[24px] text-[20px] text-[#D9D9D9]">
                Julian De Graaf
              </h1>
              <p className="regular font-[600] md:text-[20px] text-[14px] text-[#D9D9D9] md:leading-[25.6px] leading-[16px]">
                CEO , Elite Rentals
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-[386px] md:h-[784px] h-[660px] bg-[#0e141e] ps-[26px] pt-[26px] pe-[26px] pb-[44px] rounded-[24px]">
          <div className="md:w-[334px] w-full  rounded-[12px] md:h-[594px] h-[491px] overflow-hidden">
            <ReactPlayer
              url={`https://vimeo.com/1007476080?share=copy`}
              controls
              width="100%"
              height="100%"
            />
          </div>
          <div className="flex gap-5 items-center mt-10">
            <div>
              <img
                src={cia}
                className=" w-[100px] h-[80px] rounded-full "
                alt=""
              />
            </div>
            <div>
              <h1 className="semibold md:text-[24px] text-[20px] text-[#D9D9D9]">
                Cia E
              </h1>
              <p className="regular font-[600] md:text-[20px] text-[14px] text-[#D9D9D9] md:leading-[25.6px] leading-[16px]">
                Trauma Recovery & Relationship Coach
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-[386px] md:h-[784px] h-[660px] bg-[#0e141e] ps-[26px] pt-[26px] pe-[26px] pb-[44px] rounded-[24px]">
          <div className="md:w-[334px] w-full  rounded-[12px] md:h-[594px] h-[491px] overflow-hidden">
            <ReactPlayer
              url={`https://vimeo.com/1007476337?share=copy`}
              controls
              width="100%"
              height="100%"
            />
          </div>
          <div className="flex gap-5 items-center mt-10">
            <div>
              <img
                src={marc}
                className=" w-[80px] h-[80px] rounded-full"
                alt=""
              />
            </div>
            <div>
              <h1 className="semibold md:text-[24px] text-[20px] text-[#D9D9D9]">
                Marc Palombo
              </h1>
              <p className="regular font-[600] md:text-[20px] text-[14px] text-[#D9D9D9] md:leading-[25.6px] leading-[16px]">
                Actor, The Talent Group
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Successstroy;
