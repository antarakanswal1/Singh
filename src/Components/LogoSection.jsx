import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const LogoSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const features = [
    {
      icon: <p className="text-3xl">🏆</p>, 
      title: "High Quality",
      description: "crafted from top materials",
      animation: "fade-up"
    },
    {
      icon: <p className="text-3xl">🛡️</p>, 
      title: "Warranty Protection",
      description: "Over 2 years",
      animation: "fade-down"
    },
    {
      icon: <p className="text-3xl">🚚</p>, 
      title: "Free Shipping",
      description: "Order over 150 $",
      animation: "fade-up"
    },
    {
      icon: <p className="text-3xl">🎧</p>, 
      title: "24 / 7 Support",
      description: "Dedicated support",
      animation: "fade-down"
    }
  ];

  return (
    <div className="bg-[#f8f4f0] py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center space-y-2" data-aos={feature.animation}>
            {feature.icon}
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-lg text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSection;
