import React from "react";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import Mywork from "../component/Mywork";
import Successstroy from "../component/Successstroy";
import Footer from "../component/Footer";
import Contact from "../component/Contact";
import About from "../component/About";
import Contactfrom from "../component/Contactfrom";

const Home: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Mywork />
      <About />
      <Successstroy />
      <Contactfrom />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
