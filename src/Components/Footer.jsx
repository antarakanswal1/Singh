import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

    return (
      <footer className="bg-white py-8" data-aos="fade-up">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <h2 className="text-xl font-bold" data-aos-duration="1000">Funiro.</h2>
            <p className="text-gray-500 mt-2">
              400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
            </p>
          </div>
  
          {/* Middle Section */}
          <div className="grid grid-cols-2 gap-8" data-aos="fade-up" data-aos-duration="1000">
            <div>
              <h3 className="text-gray-500 font-semibold">Links</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">Shop</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-500 font-semibold">Help</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="hover:underline">Payment Options</a></li>
                <li><a href="#" className="hover:underline">Returns</a></li>
                <li><a href="#" className="hover:underline">Privacy Policies</a></li>
              </ul>
            </div>
          </div>
  
          {/* Right Section */}
          <div data-aos="fade-left" data-aos-duration="1000">
            <h3 className="text-gray-500 font-semibold">Newsletter</h3>
            <div className="mt-2 flex items-center border-b pb-1">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full bg-transparent border-none outline-none text-gray-600"
              />
              <button className="text-black font-semibold">SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-gray-500 text-sm">
          2025 Novanectars Pvt Ltd. All rights reserved
        </div>
      </footer>
    );
  }
  