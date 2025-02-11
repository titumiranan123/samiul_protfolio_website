import React, { useState } from "react";
import Heading from "./Heading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import work1 from "./../assets/work1.png";
import work2 from "./../assets/work2.png";
import work3 from "./../assets/work3.png";
import work4 from "./../assets/work4.png";
import Workcard from "./Workcard";
import Slider from "react-slick";

const Mywork: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // Track video playing

  const videos = [
    { img: work1, video: "https://youtu.be/p1nUaBwX2RE" },
    { img: work3, video: "https://youtu.be/DDiGYECtQzQ" },
    { img: work2, video: "https://youtu.be/DDiGYECtQzQ" },
    { img: work4, video: "https://youtu.be/dE57Ke36BXQ" },
  ];

  const videos1 = [
    { img: work1, video: "https://youtu.be/dE57Ke36BXQ" },
    { img: work3, video: "https://youtu.be/DDiGYECtQzQ" },
    { img: work2, video: "https://youtu.be/p1nUaBwX2RE" },
    { img: work4, video: "https://youtu.be/dE57Ke36BXQ" },
  ];

  const sliderSettings = (rtl: boolean = false) => ({
    dots: true,
    focusOnSelect: true,
    pauseOnHover: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: !isVideoPlaying, // Disable autoplay when video is playing
    speed: 6000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    rtl,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1, initialSlide: 1 },
      },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  });

  return (
    <div
      id="works"
      className="max-w-[1440px] lg:px-[110px] px-4 mx-auto lg:mt-[100px] mt-[80px] relative"
    >
      <Heading
        title="my works"
        subtitle="Empower individuals and business to reach their financial aspirations"
      />
      <div className="mt-6 flex relative flex-col gap-5">
        <div className="relative overflow-hidden">
          <Slider {...sliderSettings(false)}>
            {videos.map((item, index) => (
              <Workcard
                key={index}
                item={item}
                index={index}
                onPlayChange={setIsVideoPlaying}
              />
            ))}
          </Slider>
        </div>
        <div className="relative overflow-hidden">
          <Slider {...sliderSettings(true)}>
            {videos1.map((item, index) => (
              <Workcard
                key={index}
                item={item}
                index={index}
                onPlayChange={setIsVideoPlaying}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Mywork;
