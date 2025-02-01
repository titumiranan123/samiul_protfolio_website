import React from "react";
import Heading from "./Heading";

const About: React.FC = () => {
  return (
    <div
      id="about"
      className="max-w-[1240px] lg:mt-[120px] md:mt-20  lg:px-0 mx-auto px-4 mt-[100px]"
    >
      <Heading title="About" subtitle="" />
      <div className="lg:w-[784px] mx-auto">
        <p className="dmsans font-[400] text-[20px] leading-[27px] text-white">
          Hi there! I'm Samiul Arafat Imon, your go-to video editor and
          full-time digital content creator since 2016. With over 100k followers
          on platforms like YouTube and Facebook, I bring a wealth of experience
          and expertise. <br />
          <br />
          Throughout my career, I've had the pleasure of collaborating with
          clients from over 30 countries and working with numerous international
          and national brands. My specialization includes editing podcasts, zoom
          podcasts, short form video, music videos, slide show, commercials, and
          more. <br />
          <br />
          Explore my services, and let's create something extraordinary
          together!
        </p>
      </div>
    </div>
  );
};

export default About;
