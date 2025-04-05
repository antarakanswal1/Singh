import React from "react";
import { Link } from "react-router-dom";
import sofa1 from "../assets/asgard sofa.png";
import sofa2 from "../assets/outdoorsofa.png";

const WishlistPage = () => {
  const wishlistItems = [
    { id: 1, name: "Asgaard Sofa", price: 250000, image: sofa1 },
    { id: 2, name: "Casaliving Wood", price: 270000, image: sofa2 },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="border rounded-lg p-4 flex gap-4">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-yellow-600">Rs. {item.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <Link to="/" className="inline-block mt-6 text-blue-600 hover:underline">
        Back to Home
      </Link>
    </div>
  );
};

export default WishlistPage;
