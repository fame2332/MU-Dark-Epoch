import React from 'react';
import OfficerCard from './OfficerCard';
import { officers } from '../data/officers';

const OfficersSection: React.FC = () => {
  return (
    <section id="officers" className="py-20 bg-gradient-to-b from-indigo-950 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Guild Officers</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Meet the leadership team that guides our guild to victory in the world of DARK MU EPOCH.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
          {officers.map(officer => (
            <OfficerCard key={officer.id} officer={officer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficersSection;