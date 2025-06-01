"use client"
import React from 'react';
import Navbar from '../home/Navbar';
import Header from '../home/Header';
import Mywork from '../home/Mywork';
import About from '../home/About';
import Contactfrom from '../home/Contactfrom';
import Contact from '../home/Contact';
import Footer from '../home/Footer';
import useSmoothScroll from '@/utils/useSmooth';
import Successstory from '../home/Successstroy';

const Clientwraper = () => {
    useSmoothScroll()
    return (
       <div className="overflow-hidden">
      <Navbar />
      <Header />
      <Mywork />
      <About />
      <Successstory />
      <Contactfrom />
      <Contact />
      <Footer />
      
    </div>
    );
};

export default Clientwraper;