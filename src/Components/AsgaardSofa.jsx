import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AsgaardSofa = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Product Images */}
      <div className="flex flex-col items-center" data-aos="fade-right">
        <div className="bg-gray-100 p-4 rounded-lg">
          <img src="../src/assets/asgard sofa.png" alt="Asgaard Sofa" className="rounded-lg" />
        </div>
      </div>

      {/* Product Details */}
      <div data-aos="fade-left">
        <h1 className="text-3xl font-bold">Asgaard Sofa</h1>
        <p className="text-xl text-gray-500">Rs. 250,000.00</p>
        <div className="flex items-center gap-2 mt-2 text-yellow-500">
          <span>⭐⭐⭐⭐⭐</span>
          <p className="text-gray-600">5 Customer Reviews</p>
        </div>
        <p className="mt-4 text-gray-700">
          Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boosts a clear midrange and extended highs for a larger-than-life sound.
        </p>
        
        {/* Size Selection */}
        <div className="mt-4" data-aos="fade-up">
          <h3 className="font-semibold">Size</h3>
          <div className="flex gap-2 mt-2">
            <button className="px-4 py-2 border rounded">L</button>
            <button className="px-4 py-2 border rounded">XL</button>
            <button className="px-4 py-2 border rounded">XS</button>
          </div>
        </div>

        {/* Color Selection */}
        <div className="mt-4" data-aos="fade-up" data-aos-delay="200">
          <h3 className="font-semibold">Color</h3>
          <div className="flex gap-2 mt-2">
            <span className="w-6 h-6 bg-purple-500 rounded-full cursor-pointer"></span>
            <span className="w-6 h-6 bg-black rounded-full cursor-pointer"></span>
            <span className="w-6 h-6 bg-yellow-500 rounded-full cursor-pointer"></span>
          </div>
        </div>

        {/* Quantity & Buttons */}
        <div className="mt-6 flex items-center gap-4" data-aos="fade-up" data-aos-delay="400">
          <div className="flex items-center border px-4 py-2 rounded">
            <button className="text-lg">-</button>
            <span className="mx-4">1</span>
            <button className="text-lg">+</button>
          </div>
          <button className="bg-black text-white px-6 py-2 rounded">Add To Cart</button>
          <button className="border px-6 py-2 rounded">+ Compare</button>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-gray-700" data-aos="fade-up" data-aos-delay="600">
          <p><strong>SKU:</strong> SS001</p>
          <p><strong>Category:</strong> Sofas</p>
          <p><strong>Tags:</strong> Sofa, Chair, Home, Shop</p>
        </div>

        {/* Social Share */}
        <div className="mt-4 flex gap-4 text-lg" data-aos="zoom-in">
          <span className="cursor-pointer">🔗</span>
          <span className="cursor-pointer">📘</span>
          <span className="cursor-pointer">📷</span>
        </div>
      </div>
    </div>
  );
};

export default AsgaardSofa;
