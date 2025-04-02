import React from 'react';
import { useLocation } from 'react-router-dom';

const ColorBanner = () => {
  const location = useLocation();
  const pageTitle = location.pathname.replace("/", "") || "Home";

  return (
    <div className="relative flex flex-col items-center justify-center text-center bg-[url('../src/assets/gal1.png')] h-[300px] bg-cover bg-center bg-opacity-50">
      <h1 className="text-4xl font-bold text-black capitalize">{pageTitle}</h1>
      <nav className="mt-2">
        <a href="/" className="text-sm text-blue-600 underline">Home</a>
        <span className="text-sm text-black"> &gt; {pageTitle}</span>
      </nav>
    </div>
  );
};

export default ColorBanner;
