import React from 'react';

const LogoSection = () => {
  const features = [
    {
      icon: <p className="text-3xl">🏆</p>, 
      title: "High Quality",
      description: "crafted from top materials"
    },
    {
      icon: <p className="text-3xl">🛡️</p>, 
      title: "Warranty Protection",
      description: "Over 2 years"
    },
    {
      icon: <p className="text-3xl">🚚</p>, 
      title: "Free Shipping",
      description: "Order over 150 $"
    },
    {
      icon: <p className="text-3xl">🎧</p>, 
      title: "24 / 7 Support",
      description: "Dedicated support"
    }
  ];

  return (
    <div className="bg-[#f8f4f0] py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
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
