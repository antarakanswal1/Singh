import { useState } from "react";

const slides = [
  {
    id: 1,
    image: "../src/assets/beau1.png",
    title: "Inner Peace",
    category: "Bed Room",
  },
  {
    id: 2,
    image: "../src/assets/beau2.png",
    title: "Cozy Living",
    category: "Living Room",
  },
  {
    id: 3,
    image: "../src/assets/beau3.png",
    title: "Minimalist Dream",
    category: "Dining Room",
  },
];

export default function BeautifulRoomsBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-cream flex items-center justify-center py-12">
      <div className="container flex flex-col md:flex-row items-center gap-8">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold text-gray-800">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="text-gray-600 mt-2">
            Our designer already made a lot of beautiful prototype rooms that
            inspire you.
          </p>
          <button className="bg-yellow-700 text-white px-4 py-2 mt-4 shadow">
            Explore More
          </button>
        </div>

        <div className="relative w-full max-w-lg overflow-hidden rounded-lg shadow-lg">
          <img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            className="w-full h-96 object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
            <span className="text-sm text-gray-500">{slides[currentIndex].category}</span>
            <h3 className="text-lg font-semibold text-gray-800">
              {slides[currentIndex].title}
            </h3>
          </div>
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
