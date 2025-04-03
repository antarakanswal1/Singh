import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BillingSection = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className="container mx-auto p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Billing Details Form */}
      <div className="bg-white p-6 shadow-lg rounded-lg" data-aos="fade-right">
        <h2 className="text-xl font-bold mb-4">Billing details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="First Name" className="border p-2 rounded w-full" />
          <input type="text" placeholder="Last Name" className="border p-2 rounded w-full" />
        </div>
        <input type="text" placeholder="Company Name (Optional)" className="border p-2 rounded w-full mt-4" />
        <select className="border p-2 rounded w-full mt-4">
          <option>Country / Region</option>
          <option>United States</option>
        </select>
        <input type="text" placeholder="Street Address" className="border p-2 rounded w-full mt-4" />
        <input type="text" placeholder="Town / City" className="border p-2 rounded w-full mt-4" />
        <select className="border p-2 rounded w-full mt-4">
          <option>Province</option>
          <option>Western Province</option>
        </select>
        <input type="text" placeholder="ZIP Code" className="border p-2 rounded w-full mt-4" />
        <input type="text" placeholder="Phone" className="border p-2 rounded w-full mt-4" />
        <input type="email" placeholder="Email Address" className="border p-2 rounded w-full mt-4" />
        <textarea placeholder="Additional information" className="border p-2 rounded w-full mt-4"></textarea>
      </div>
      
      {/* Order Summary */}
      <div className="bg-white p-6 shadow-lg rounded-lg" data-aos="fade-left">
        <h2 className="text-xl font-bold mb-4">Product</h2>
        <div className="border-b pb-4 mb-4" data-aos="fade-up">
          <p className="flex justify-between"><span>Supercool x1</span> <span>Rs. 250,000.00</span></p>
        </div>
        <div className="border-b pb-4 mb-4" data-aos="fade-up">
          <p className="flex justify-between"><span>Subtotal</span> <span>Rs. 250,000.00</span></p>
        </div>
        <div className="text-xl font-bold text-yellow-600 flex justify-between" data-aos="zoom-in">
          <span>Total</span>
          <span>Rs. 250,000.00</span>
        </div>
        
        {/* Payment Methods */}
        <div className="mt-6" data-aos="fade-up">
          <label className="flex items-center space-x-2">
            <input type="radio" name="payment" className="w-4 h-4" />
            <span>Direct Bank Transfer</span>
          </label>
          <p className="text-sm text-gray-500 pl-6">
            Make your payment directly into our bank account...
          </p>
          <label className="flex items-center space-x-2 mt-4">
            <input type="radio" name="payment" className="w-4 h-4" />
            <span>Cash on Delivery</span>
          </label>
        </div>
        
        {/* Privacy Policy */}
        <p className="text-sm text-gray-500 mt-4" data-aos="fade-up">
          Your personal data will be used to process your order...
        </p>
        
        {/* Place Order Button */}
        <button className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700 transition mt-4" data-aos="fade-up">
          Place order
        </button>
      </div>
    </div>
  );
};

export default BillingSection;
