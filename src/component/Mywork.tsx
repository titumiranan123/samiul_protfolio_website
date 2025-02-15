import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Workcard from "./Workcard";
import Slider from "react-slick";

const Mywork: React.FC = () => {
  const [data, setData] = useState([]);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // Track video playing

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
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data]);

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
            {data.map((item, index) => (
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
            {data.map((item, index) => (
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
