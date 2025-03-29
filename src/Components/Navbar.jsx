import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Furniro Logo" className="w-10 h-10" />
        <h1 className="text-xl font-bold">Furniro</h1>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6 text-gray-700">
        <p className="cursor-pointer hover:text-black">Home</p>
        <p className="cursor-pointer hover:text-black">Shop</p>
        <p className="cursor-pointer hover:text-black">About</p>
        <p className="cursor-pointer hover:text-black">Contact</p>
      </div>

      {/* Icons */}
      <div className="flex space-x-4 text-gray-700">
        <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
        <i className="fa-solid fa-heart cursor-pointer"></i>
        <i className="fa-solid fa-cart-shopping cursor-pointer"></i>
      </div>
    </nav>
  );
};

export default Navbar;
