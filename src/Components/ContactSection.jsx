import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initializes AOS with 1s duration
  }, []);

  return (
    <div className="container mx-auto p-6 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Contact Information */}
        <div className="space-y-6" data-aos="fade-right">
          <h2 className="text-2xl font-bold">Get In Touch With Us</h2>
          <p className="text-gray-500">
            For more information about our products & services, feel free to drop us an email.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">📍 Address</h3>
              <p className="text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
            </div>
            <div>
              <h3 className="font-semibold">📞 Phone</h3>
              <p className="text-gray-600">Mobile: +(84) 546-6789</p>
              <p className="text-gray-600">Hotline: +(84) 456-6789</p>
            </div>
            <div>
              <h3 className="font-semibold">🕒 Working Time</h3>
              <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
              <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form 
          className="bg-white shadow-lg rounded-lg p-6 space-y-4 w-full max-w-lg mx-auto"
          data-aos="fade-left"
        >
          <div>
            <label className="block text-gray-700 font-medium">Your Name</label>
            <input 
              type="text" 
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" 
              placeholder="Enter your name" 
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email Address</label>
            <input 
              type="email" 
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" 
              placeholder="Enter your email" 
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Subject</label>
            <input 
              type="text" 
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" 
              placeholder="Optional" 
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea 
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" 
              placeholder="Enter your message" 
              rows="4"
            ></textarea>
          </div>
          <button 
            className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition"
            data-aos="fade-up"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
