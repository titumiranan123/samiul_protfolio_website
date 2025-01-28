import React, { useState } from "react";
import Heading from "./Heading";
import Marquee from "react-fast-marquee";
import work1 from "./../assets/work1.png";
import work2 from "./../assets/work2.png";
import work3 from "./../assets/work3.png";
import work4 from "./../assets/work4.png";
// import work5 from "./../assets/work5.png";
import ReactPlayer from "react-player";

const Mywork: React.FC = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const videos = [
    {
      img: work1,
      video: "https://www.youtube.com/watch?v=yneYAJioTzw",
    },
    {
      img: work3,
      video: "https://youtu.be/WEr-BVxL4e0?si=pU_SBfBtlXFBceC-",
    },
    {
      img: work2,
      video: "https://youtu.be/-VPVWGfVsDM?si=29rO7ybYnPccnlEw",
    },
    {
      img: work4,
      video: "https://youtu.be/WEr-BVxL4e0?si=pU_SBfBtlXFBceC-",
    },
  ];

  return (
    <div className="max-w-[1440px] lg:px-[110px] px-4 mx-auto lg:mt-[120px] mt-[100px] relative">
      <Heading
        title="my works"
        subtitle="Empower individuals and business to reach their financial aspirations"
      />
      <div className="flex relative flex-col gap-5  before:bg-gradient-to-l from-transparent to-[#020202] lg:before:block before:hidden after:hidden lg:after:block before:h-[594px] before:w-[320px] before:absolute before:top-0 before:left-0 before:z-20 z-10 after:bg-gradient-to-r  after:h-[594px] after:w-[320px] after:absolute after:top-0 after:right-0 after:z-20 ">
        <div className="relative overflow-hidden">
          <Marquee direction="right" pauseOnHover>
            {videos.map((item, index) => (
              <div key={index} className="ms-4 w-[500px] h-[281px] relative">
                <ReactPlayer
                  url={item.video}
                  controls
                  width="100%"
                  height="100%"
                  playing={playingIndex === index}
                  light={playingIndex !== index ? item.img : undefined}
                  onClickPreview={() => setPlayingIndex(index)}
                  onPlay={() => setPlayingIndex(index)}
                  onPause={() => setPlayingIndex(null)}
                />
              </div>
            ))}
          </Marquee>
        </div>
        <div className="relative overflow-hidden">
          <Marquee direction="left" pauseOnHover>
            {videos.map((item, index) => (
              <div key={index} className="ms-4 w-[500px] h-[281px] relative">
                <ReactPlayer
                  url={item.video}
                  controls
                  width="100%"
                  height="100%"
                  playing={playingIndex === index}
                  light={playingIndex !== index ? item.img : undefined}
                  onClickPreview={() => setPlayingIndex(index)}
                  onPlay={() => setPlayingIndex(index)}
                  onPause={() => setPlayingIndex(null)}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Mywork;
