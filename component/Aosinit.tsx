'use client'
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const Aosinit = () => {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
    return null
};

export default Aosinit;