import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductDescription = () => {
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className="container mx-auto p-6 md:p-12">
      {/* Tabs */}
      <div className="flex space-x-6 border-b pb-2" data-aos="fade-down">
        {[
          { label: "Description", key: "description" },
          { label: "Additional Information", key: "additional" },
          { label: "Reviews [5]", key: "reviews" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`text-lg font-semibold pb-2 border-b-2 transition ${
              activeTab === tab.key
                ? "border-black text-black"
                : "border-transparent text-gray-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-6 text-gray-600" data-aos="fade-up">
        {activeTab === "description" && (
          <>
            <p>
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p className="mt-4">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine-tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </>
        )}
      </div>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-gray-100 p-4 rounded-lg" data-aos="zoom-in">
          <img
            src="../src/assets/cloudsofa.png"
            alt="Sofa Left"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="bg-gray-100 p-4 rounded-lg" data-aos="zoom-in" data-aos-delay="200">
          <img
            src="../src/assets/cloudsofa.png"
            alt="Sofa Right"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
