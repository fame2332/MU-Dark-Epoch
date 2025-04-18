import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import OfficersSection from '../components/OfficersSection';
import RankingsSection from '../components/RankingsSection';
import RulesSection from '../components/RulesSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <HeroSection />
      <OfficersSection />
      <RankingsSection />
      <RulesSection />
      <Footer />
    </div>
  );
};

export default Home;