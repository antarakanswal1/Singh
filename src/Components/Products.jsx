import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Shop1 from '../assets/shop1.png';
import Shop2 from '../assets/shop2.png';
import Shop3 from '../assets/shop3.png';
import Shop4 from '../assets/shop4.jpg';
import Shop5 from '../assets/shop5.png';
import Shop6 from '../assets/shop6.png';
import Shop7 from '../assets/shop7.jpg';
import Shop8 from '../assets/shop8.jpg';

const products = [
  { image: Shop1, title: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000" },
  { image: Shop2, title: "Leviosa", description: "Stylish cafe chair", price: "Rp 3.200.000" },
  { image: Shop3, title: "Lolito", description: "Luxury Big Sofa", price: "Rp 4.100.000" },
  { image: Shop4, title: "Respira", description: "Outdoor Bar table and stool", price: "Rp 2.800.000" },
  { image: Shop5, title: "Grifo", description: "Night lamp", price: "Rp 1.500.000" },
  { image: Shop6, title: "Muggo", description: "Small mug", price: "Rp 150.000" },
  { image: Shop7, title: "Pingky", description: "Cute bed set", price: "Rp 7.000.000" },
  { image: Shop8, title: "Flower Pots", description: "Minimalist flower pot", price: "Rp 500.000" },
];

const Products = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="py-8">
      <div className='h-[30px]'></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div 
            key={index} 
            className="max-w-sm rounded overflow-hidden shadow-lg relative group transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`} // Staggered animation
          >
            {/* Image */}
            <img className="w-full h-48 object-cover" src={product.image} alt={product.title} />

            {/* Content */}
            <div className="px-6 py-4 bg-white">
              <h2 className="font-bold text-xl mb-2">{product.title}</h2>
              <p className="text-gray-700 text-base">{product.description}</p>
              <p className="text-lg font-semibold mt-2">{product.price}</p>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white text-black font-semibold py-2 px-4 rounded">Add to cart</button>
              <div className="flex justify-between gap-4 mt-3 text-white">
                <span className="cursor-pointer">🔄 Compare</span>
                <span className="cursor-pointer">❤️ Like</span>
                <span className="cursor-pointer">🔗 Share</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='h-[50px]'></div>
    </section>    
  );
}

export default Products;
