import React, { useState } from "react";
import Heading from "./Heading";
import Marquee from "react-fast-marquee";
import work1 from "./../assets/work1.png";
import work2 from "./../assets/work2.png";
import work3 from "./../assets/work3.png";
import work4 from "./../assets/work4.png";
import work5 from "./../assets/work5.png";
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
  ];

  return (
    <div className="max-w-[1440px] lg:px-[110px] px-4 mx-auto lg:mt-[120px] mt-[100px]">
      <Heading
        title="my works"
        subtitle="Empower individuals and business to reach their financial aspirations"
      />
      <div className="flex flex-col gap-5">
        <div className="relative overflow-hidden">
          <Marquee direction="right" pauseOnHover>
            {videos.map((item, index) => (
              <div key={index} className="ms-4 w-[500px] h-[281px] relative">
                <ReactPlayer
                  url={item.video}
                  controls
                  width="100%"
                  height="100%"
                  playing={playingIndex === index} // ✅ শুধুমাত্র ক্লিক করা ভিডিও চলবে
                  light={playingIndex !== index ? item.img : undefined} // ✅ Pause হলে Thumbnail দেখাবে
                  onClickPreview={() => setPlayingIndex(index)} // ✅ একবার ক্লিকেই ভিডিও চালু হবে
                  onPlay={() => setPlayingIndex(index)} // ✅ Play হলে Thumbnail Remove হবে
                  onPause={() => setPlayingIndex(null)} // ✅ Pause হলে Thumbnail ফিরে আসবে
                />
              </div>
            ))}
          </Marquee>
        </div>
        <Marquee direction="left" pauseOnHover>
          <img src={work4} className="ms-4" alt="" />
          <img src={work5} className="ms-4" alt="" />
          <img src={work3} className="ms-4" alt="" />
        </Marquee>
      </div>
    </div>
  );
};

export default Mywork;
