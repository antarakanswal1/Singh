import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const ColorBanner = () => {
  const location = useLocation();
  const pageTitle = location.pathname.replace("/", "") || "Home";

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div
      className="relative flex flex-col items-center justify-center text-center bg-[url('../src/assets/gal1.png')] h-[300px] bg-cover bg-center bg-opacity-50"
      data-aos="fade-in"
    >
      <h1 className="text-4xl font-bold text-black capitalize" data-aos="fade-down">
        {pageTitle}
      </h1>
      <nav className="mt-2" data-aos="fade-up">
        <a href="/" className="text-sm text-blue-600 underline">Home</a>
        <span className="text-sm text-black"> &gt; {pageTitle}</span>
      </nav>
    </div>
  );
};

export default ColorBanner;
