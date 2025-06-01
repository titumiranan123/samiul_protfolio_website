import React from "react";
import Heading from "./Heading";
import Link from "next/link";


const About: React.FC = () => {
  return (
    <div
      id="about"
      className="max-w-[1440px] lg:px-[110px] px-4 mx-auto lg:mt-[100px] mt-[80px]"
    >
      <Heading title="About" subtitle="" />
      <div className="lg:w-[784px] mx-auto">
        <p className="dmsans font-[400] text-[20px] leading-[27px] text-white">
          Hi there! I'm Samiul Arafat Imon, your go-to video editor and
          full-time digital content creator since 2016. With over 100k followers
          on platforms like{" "}
          <Link
            className="underline"
            href={"https://www.youtube.com/@montagemotion77"}
            target="_blank"
          >
            Youtube
          </Link>{" "}
          and{" "}
          <Link
            className="underline"
            href={"Facebookhttps://www.facebook.com/Samiul.Bhaiya/"}
            target="_blank"
          >
            Facebook
          </Link>
          , I bring a wealth of experience and expertise. <br />
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
