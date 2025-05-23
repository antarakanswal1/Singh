import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import beau1 from '../assets/beau1.png';
import beau2 from '../assets/beau2.png';
import beau3 from '../assets/beau3.png';

const slides = [
  {
    id: 1,
    image: beau1,
    title: "Inner Peace",
    category: "Bed Room",
  },
  {
    id: 2,
    image: beau2,
    title: "Cozy Living",
    category: "Living Room",
  },
  {
    id: 3,
    image: beau3,
    title: "Minimalist Dream",
    category: "Dining Room",
  },
];

export default function BeautifulRoomsBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-cream flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        {/* Text Section */}
        <div className="flex-1 w-full text-center md:text-left" data-aos="fade-left">
          <h2 className="text-3xl font-bold text-gray-800">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="text-gray-600 mt-2">
            Our designer already made a lot of beautiful prototype rooms that inspire you.
          </p>
          <button className="bg-yellow-700 text-white px-5 py-3 mt-4 shadow rounded-lg hover:bg-yellow-800 transition-all">
            Explore More
          </button>
        </div>

        {/* Image Slider Section */}
        <div
          className="flex-1 w-full relative overflow-hidden rounded-lg shadow-lg"
          data-aos="fade-right"
        >
          {/* Blog Link around the image */}
          <Link to="/blog">
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="w-full h-80 sm:h-96 object-cover"
            />
          </Link>

          <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
            <span className="text-sm text-gray-500">
              {slides[currentIndex].category}
            </span>
            <h3 className="text-lg font-semibold text-gray-800">
              {slides[currentIndex].title}
            </h3>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            &#9664;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            &#9654;
          </button>
        </div>
      </div>
    </div>
  );
}
