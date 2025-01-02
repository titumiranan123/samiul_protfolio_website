import React from "react";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import Mywork from "../component/Mywork";

const Home: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Mywork />
    </div>
  );
};

export default Home;
