import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import sofa1 from "../assets/asgard sofa.png";
import sofa2 from "../assets/outdoorsofa.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Asgaard Sofa", price: 250000, image: sofa1, quantity: 1 },
    { id: 2, name: "Casaliving Wood", price: 270000, image: sofa2, quantity: 1 },
  ]);

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <nav className="relative flex items-center justify-between px-6 py-2 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Furniro Logo" className="w-14 h-14" />
        <h1 className="text-3xl font-bold">Furniro</h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6 text-black text-xl">
        <Link to="/" className="hover:text-gray-700">Home</Link>
        <Link to="/shop" className="hover:text-gray-700">Shop</Link>
        <Link to="/productcomparison" className="hover:text-gray-700">About</Link>
        <Link to="/contact" className="hover:text-gray-700">Contact</Link>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4 text-gray-700 relative">
        {/* Search Icon */}
        <div className="relative">
          <i
            className="fa-solid fa-magnifying-glass cursor-pointer"
            onClick={() => setShowSearch(!showSearch)}
          ></i>

          {/* Search Input Dropdown */}
          {showSearch && (
            <form
              onSubmit={handleSearch}
              className="absolute right-0 mt-2 bg-white shadow-md border rounded-full flex items-center px-3 py-1 z-50"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="outline-none px-2 py-1 text-sm w-40"
              />
              <button type="submit">
                <i className="fa-solid fa-arrow-right text-gray-600 ml-2"></i>
              </button>
            </form>
          )}
        </div>

        {/* Wishlist */}
        <Link to="/wishlist">
          <i className="fa-solid fa-heart cursor-pointer"></i>
        </Link>

        {/* Cart */}
        <i
          className="fa-solid fa-cart-shopping cursor-pointer relative"
          onClick={() => setShowCart(!showCart)}
        >
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          )}
        </i>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 
        ${showCart ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <hr className="my-4" />

          <div className="space-y-4">
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg" />
                  <div className="flex-1 px-4">
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-yellow-600">Rs. {item.price.toLocaleString()}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>
                    <i className="fa-solid fa-xmark text-gray-500 hover:text-red-500"></i>
                  </button>
                </div>
              ))
            )}
          </div>

          <hr className="my-4" />
          <div className="flex justify-between text-lg font-semibold">
            <span>Subtotal</span>
            <span className="text-yellow-600">Rs. {subtotal.toLocaleString()}</span>
          </div>

          <div className="flex justify-between mt-4">
            <Link to="/cart" className="border rounded-full px-4 py-2">Cart</Link>
            <Link to="/checkout" className="border rounded-full px-4 py-2">Checkout</Link>
            <Link to="/productcomparison" className="border rounded-full px-4 py-2">Comparison</Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col space-y-4 py-4 px-6 transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
      >
        <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-gray-700">Home</Link>
        <Link to="/shop" onClick={() => setIsOpen(false)} className="hover:text-gray-700">Shop</Link>
        <Link to="/productcomparison" onClick={() => setIsOpen(false)} className="hover:text-gray-700">About</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-gray-700">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
