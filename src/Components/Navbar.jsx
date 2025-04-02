import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-6 py-2 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Furniro Logo" className="w-14 h-14" />
        <h1 className="text-3xl font-bold">Furniro</h1>
      </div>

      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex space-x-6 text-black text-xl">
        <Link to="/" className="hover:text-gray-700">Home</Link>
        <Link to="/shop" className="hover:text-gray-700">Shop</Link>
        <Link to="/productcomparison" className="hover:text-gray-700">About</Link>
        <Link to="/contact" className="hover:text-gray-700">Contact</Link>
      </div>

      {/* Icons & Mobile Menu Toggle */}
      <div className="flex space-x-4 text-gray-700">
        <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
        <i className="fa-solid fa-heart cursor-pointer"></i>
        <i className="fa-solid fa-cart-shopping cursor-pointer"></i>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col space-y-4 py-4 px-6 transform transition-transform duration-300 ease-in-out z-50 
        ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
      >
        <Link to="/" className="hover:text-gray-700" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/shop" className="hover:text-gray-700" onClick={() => setIsOpen(false)}>Shop</Link>
        <Link to="/productcomparison" className="hover:text-gray-700" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/contact" className="hover:text-gray-700" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
