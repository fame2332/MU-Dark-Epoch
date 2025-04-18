import React from 'react';
import { Shield, Users, Sword, Trophy } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-indigo-950 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-75"
        style={{ 
          backgroundImage: 'url("/images/Background.jpg")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.7)'
        }}
      />

      {/* Content Container */}
      <div className="container mx-auto px-6 z-10">
        <div className="animate-fadeInUp max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <img 
                src="/images/LGORACER.png"
                alt="RacerPH Guild Logo" 
                className="w-24 h-24 object-cover rounded-full border-2 border-yellow-500 shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              Welcome to <span className="text-yellow-500">RacerPH</span> Guild
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              An elite guild in DARK MU EPOCH dedicated to strategic gameplay, epic loot, and a supportive community.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="#rules" 
                className="inline-block px-8 py-3 bg-yellow-600 hover:bg-yellow-500 text-white font-medium rounded-lg transition-colors duration-300 transform hover:scale-105"
              >
                View Guild Rules
              </a>
              <a 
                href="https://discord.gg/your-invite-link" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-colors duration-300 transform hover:scale-105"
              >
                Join Discord
              </a>
            </div>
          </div>

          {/* Guild Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            {[
              { icon: Users, label: 'Active Members', value: '22+' },
              { icon: Sword, label: 'Daily Events', value: '3+' },
              { icon: Trophy, label: 'Guild Ranking', value: '#2' },
              { icon: Shield, label: 'Days Active', value: '4+' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center transform transition-transform hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative diamond elements */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <div className="animate-bounce text-white opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M5 12l7 7 7-7"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;