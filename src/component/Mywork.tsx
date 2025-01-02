import React from "react";
import Heading from "./Heading";
import Marquee from "react-fast-marquee";
import work1 from "./../assets/work1.png";
import work2 from "./../assets/work2.png";
import work3 from "./../assets/work3.png";
import work4 from "./../assets/work4.png";
import work5 from "./../assets/work5.png";
const Mywork: React.FC = () => {
  return (
    <div className="max-w-[1440px] lg:px-[110px] px-4 mx-auto  lg:mt-[120px] mt-[100px]">
      <Heading
        title="my works"
        subtitle="Empower individuals and business to reach their financial aspirations"
      />
      <div className="flex flex-col gap-5">
        <Marquee direction="right" pauseOnHover pauseOnClick>
          <img src={work1} className="ms-4" alt="" />
          <img src={work2} className="ms-4" alt="" />
          <img src={work3} className="ms-4" alt="" />
        </Marquee>
        <Marquee direction="left" pauseOnHover pauseOnClick>
          <img src={work4} className="ms-4" alt="" />
          <img src={work5} className="ms-4" alt="" />
          <img src={work3} className="ms-4" alt="" />
        </Marquee>
      </div>
    </div>
  );
};

export default Mywork;
