import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import gal1 from "../assets/gal1.png";
import gal2 from "../assets/gal2.png";
import gal3 from "../assets/gal3.png";
import gal4 from "../assets/gal4.png";
import gal5 from "../assets/gal5.png";
import gal6 from "../assets/gal6.png";
import gal7 from "../assets/gal7.png";
import gal8 from "../assets/gal8.png";

const images = [gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8];

export default function PhotoGallery() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="py-12 bg-gray-100 text-center" data-aos="fade-up">
      <h2 className="text-lg text-black">Share your setup with</h2>
      <h1 className="text-3xl font-bold text-black">#FuniroFurniture</h1>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 max-w-6xl mx-auto"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg"
            data-aos="zoom-in"
            data-aos-delay={index * 100} // Staggered animation effect
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
