import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import NewworkCard from "./Newworkcard";

const Mywork: React.FC = () => {
  const [data, setData] = useState([]);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data]);

  return (
    <div
      id="works"
      className=" container   lg:mt-[100px] mt-[80px] relative"
    >
      <Heading
        title="my works"
        subtitle="Empower individuals and business to reach their financial aspirations"
      />
      <div className="mt-6 flex relative flex-col gap-5 ">
        <div>
          <h2 className="text-white text-[48px] uppercase">
            <span className="font-[300] dmsans">Full-form</span>{" "}
            <span className="font-bold">Video</span>
          </h2>
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-5">
            {data.map((dt, idx) => (
              <NewworkCard item={dt} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mywork;
