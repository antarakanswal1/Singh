import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-2 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Furniro Logo" className="w-14 h-14" />
        <h1 className="text-3xl font-bold">Furniro</h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6 text-black text-xl">
        <Link to="/" className="hover:text-black">Home</Link>
        <Link to="/shop" className="hover:text-black">Shop</Link>
        <Link to="/productcomparison" className="hover:text-black">About</Link>
        <Link to="/contact" className="hover:text-black">Contact</Link>
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
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col space-y-4 py-4 px-6">
          <Link to="/" className="hover:text-black" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/shop" className="hover:text-black" onClick={() => setIsOpen(false)}>Shop</Link>
          <Link to="/productcomparison" className="hover:text-black" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="hover:text-black" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
