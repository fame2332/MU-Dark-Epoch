import React from 'react';
import { rules } from '../data/rules';

const RulesSection: React.FC = () => {
  return (
    <section id="rules" className="py-20 bg-gradient-to-b from-gray-900 to-indigo-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Guild Rules</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Our rules ensure fair play and a fun environment for all members. These guidelines help maintain the integrity and spirit of RacerPH Guild.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-700">
          <div className="grid gap-8">
            {rules.map((rule) => (
              <div key={rule.id} className="rule-item">
                <div className="flex items-center gap-4 mb-2">
                  <div className="relative w-8 h-8 flex-shrink-0">
                    <div className="absolute inset-0 bg-yellow-600 transform rotate-45"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                      {rule.id}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-yellow-500">{rule.title}</h3>
                </div>
                <div className="ml-12 text-gray-300">
                  {typeof rule.description === 'string' ? (
                    <p>{rule.description}</p>
                  ) : (
                    rule.description
                  )}
                </div>
                {rule.id !== rules.length && <div className="mt-6 border-b border-gray-700/50"></div>}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-block px-6 py-3 bg-yellow-600/20 rounded-lg border border-yellow-600/40">
              <p className="text-xl font-bold text-yellow-500">Be a Racer!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;