import React from "react";

const Heading: React.FC = () => {
  return (
    <div className="max-w-[1440px] lg:px-[110px] px-4 flex justify-center flex-col items-center gap-1 inter">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-[200px] leading-[240px] italic text-black mark uppercase opacity-30 stroke-white stroke-1 font-bold text-center flex justify-center items-center ms-5">
          My Works{" "}
        </h1>
        <h1 className="text-white text-[64px] leading-[76.8px] font-[900] uppercase text-center -translate-y-[107px]">
          My works
        </h1>
      </div>
      <p className="inter font-[400] text-[16px] leading-[19.2px] text-white -translate-y-[90px]">
        Empower individuals and business to reach their financial aspirations
      </p>
    </div>
  );
};

export default Heading;
