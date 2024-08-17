// components/FeatureCard.js
import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-4 w-48 h-48 bg-white rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition duration-300">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};


export default FeatureCard;