import React from "react";

const products = [
  {
    name: "Appasport Sofa",
    image: "../assets/asgard sofa.png",
    rating: 4.5,
    general: {
      material: "1 seater sofa",
      secondaryMaterial: "100% wood",
      upholstery: "Fabric + Cotton",
      color: "Magic Grey & Linen",
      country: "India",
    },
    dimensions: {
      width: "200 cm",
      height: "85 cm",
      depth: "90 cm",
      weight: "45 kg",
    },
    warranty: "12 months manufacturing warranty. The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
  },
  {
    name: "Outdoor Sofa Set",
    image: "../assets/outdoorsofa.png",
    rating: 4.7,
    general: {
      material: "1 three Seater, 1 Single",
      secondaryMaterial: "100% wood",
      upholstery: "Fabric + Cotton",
      color: "Magic Grey & Linen",
      country: "India",
    },
    dimensions: {
      width: "210 cm",
      height: "88 cm",
      depth: "92 cm",
      weight: "48 kg",
    },
    warranty: "12 months manufacturing warranty. The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
  },
];

const ComparisonTable = () => {
  return (
    <div className="container mx-auto p-6 md:p-12 overflow-x-auto">
      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">Go to Product Page for more Products</h2>
          <a href="#" className="text-yellow-600 underline">Show More</a>
        </div>
        {products.map((product, index) => (
          <div key={index} className="text-center">
            <img src={product.image} alt={product.name} className="mx-auto mb-2" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-yellow-500">⭐ {product.rating} Reviews</p>
          </div>
        ))}
      </div>
      
      {/* Specification Table */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        {Object.keys(products[0].general).map((key, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-3 p-4">
            <h4 className="font-semibold text-gray-700">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</h4>
            {products.map((product, i) => (
              <p key={i} className="text-gray-600">{product.general[key]}</p>
            ))}
          </div>
        ))}
        
        {Object.keys(products[0].dimensions).map((key, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-3 p-4">
            <h4 className="font-semibold text-gray-700">{key.toUpperCase()}</h4>
            {products.map((product, i) => (
              <p key={i} className="text-gray-600">{product.dimensions[key]}</p>
            ))}
          </div>
        ))}
        
        <div className="grid grid-cols-1 md:grid-cols-3 p-4">
          <h4 className="font-semibold text-gray-700">WARRANTY</h4>
          {products.map((product, i) => (
            <p key={i} className="text-gray-600">{product.warranty}</p>
          ))}
        </div>
      </div>
      
      {/* Add to Cart Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div></div>
        {products.map((_, i) => (
          <button
            key={i}
            className="bg-[#B88E2F] text-white py-2 rounded-lg hover:bg-yellow-600 transition w-full"
          >
            ADD TO CART
          </button>
        ))}
      </div>
    </div>
  );
};

export default ComparisonTable;
