import React from "react";
import Heading from "./Heading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import work1 from "./../assets/work1.png";
import work2 from "./../assets/work2.png";
import work3 from "./../assets/work3.png";
import work4 from "./../assets/work4.png";
// import work5 from "./../assets/work5.png";

import Workcard from "./Workcard";
import Slider from "react-slick";

const Mywork: React.FC = () => {
  const videos = [
    {
      img: work1,
      video: "https://youtu.be/p1nUaBwX2RE",
    },
    {
      img: work3,
      video: "https://youtu.be/DDiGYECtQzQ",
    },
    {
      img: work2,
      video: "https://youtu.be/DDiGYECtQzQ",
    },
    {
      img: work4,
      video: "https://youtu.be/dE57Ke36BXQ",
    },
  ];
  const videos1 = [
    {
      img: work1,
      video: "https://youtu.be/dE57Ke36BXQ",
    },
    {
      img: work3,
      video: "https://youtu.be/DDiGYECtQzQ",
    },
    {
      img: work2,
      video: "https://youtu.be/p1nUaBwX2RE",
    },
    {
      img: work4,
      video: "https://youtu.be/dE57Ke36BXQ",
    },
  ];
  const settings = {
    dots: true,
    focusOnSelect: true,
    pauseOnHover: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings2 = {
    dots: true,
    rtl: true,
    pauseOnHover: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      id="works"
      className="max-w-[1440px] lg:px-[110px] px-4 mx-auto lg:mt-[120px] mt-[100px] relative"
    >
      <Heading
        title="my works"
        subtitle="Empower individuals and business to reach their financial aspirations"
      />
      <div className="mt-6 flex relative flex-col gap-5  before:bg-gradient-to-l from-transparent to-[#020202] lg:before:block before:hidden after:hidden lg:after:block before:h-[594px] before:w-[320px] before:absolute before:top-0 before:left-0 before:z-20 z-10 after:bg-gradient-to-r  after:h-[594px] after:w-[320px] after:absolute after:top-0 after:right-0 after:z-20 ">
        <div className="relative overflow-hidden">
          <Slider {...settings}>
            {videos.map((item, index) => (
              <Workcard item={item} index={index} />
            ))}
          </Slider>
        </div>
        <div className="relative overflow-hidden">
          <Slider {...settings2}>
            {videos1.map((item, index) => (
              <Workcard item={item} index={index} />
            ))}{" "}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Mywork;
