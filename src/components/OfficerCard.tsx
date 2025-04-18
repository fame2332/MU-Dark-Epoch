import React from 'react';
import { Officer } from '../types/types';

interface OfficerCardProps {
  officer: Officer;
}

const OfficerCard: React.FC<OfficerCardProps> = ({ officer }) => {
  return (
    <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-105">
      <div className="relative mb-12 w-52 h-52 md:w-64 md:h-64">
        {/* Diamond shape container */}
        <div className="absolute inset-0 bg-indigo-900/80 transform rotate-45 rounded shadow-lg"></div>
        
        {/* Image container */}
        <div className="absolute inset-2 overflow-hidden transform rotate-45">
          <img
            src={officer.imageUrl}
            alt={officer.name}
            className="w-full h-full object-cover transform -rotate-45 scale-[1.5]"
          />
        </div>
        
        {/* Role badge */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-yellow-600 text-white px-4 py-1 rounded-full text-sm font-medium z-10">
          {officer.role}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-1">{officer.name}</h3>
      <p className="text-gray-400 text-center max-w-xs px-4">{officer.description}</p>
    </div>
  );
};

export default OfficerCard;