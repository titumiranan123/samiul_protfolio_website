import React from "react";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import Mywork from "../component/Mywork";
import Successstroy from "../component/Successstroy";
import Footer from "../component/Footer";
import Contact from "../component/Contact";
import About from "../component/About";
import Contactfrom from "../component/Contactfrom";
import useSmoothScroll from "../utils/useSmooth";
import AnimatedCursor from "react-animated-cursor";
const Home: React.FC = () => {
  useSmoothScroll();
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Header />
      <Mywork />
      <About />
      <Successstroy />
      <Contactfrom />
      <Contact />
      <Footer />
      <AnimatedCursor
        innerSize={10} // Increased for better visibility
        outerSize={20} // Increased to show outer circle
        color="193, 11, 111"
        outerAlpha={0.5} // Adjusted for better visibility
        innerScale={1} // Normal scale
        outerScale={3} // Reduced for a balanced effect
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </div>
  );
};

export default Home;
