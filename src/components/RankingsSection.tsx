import React from 'react';
import { rankings } from '../data/rankings';
import { Trophy, Crown, Star } from 'lucide-react';

const RankingsSection: React.FC = () => {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="text-yellow-400 w-6 h-6" />;
      case 2:
        return <Trophy className="text-gray-300 w-6 h-6" />;
      case 3:
        return <Trophy className="text-amber-600 w-6 h-6" />;
      default:
        return <Star className="text-indigo-400 w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-indigo-950 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Weekly Top Rankings</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Top 10 players by level in the last week
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-700">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700 mb-4">
            <div className="flex items-center gap-4">
              <span className="text-gray-400 font-medium w-24">Rank</span>
              <span className="text-gray-400 font-medium">Character</span>
            </div>
            <span className="text-gray-400 font-medium">Level</span>
          </div>

          <div className="space-y-4">
            {rankings.map((player) => (
              <div 
                key={player.rank}
                className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
                  player.rank <= 3 
                    ? 'bg-gradient-to-r from-gray-700/30 to-gray-700/50 hover:from-gray-700/40 hover:to-gray-700/60' 
                    : 'bg-gray-700/30 hover:bg-gray-700/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-24 flex items-center gap-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-lg font-bold border border-gray-700">
                      {player.rank}
                    </div>
                    {getRankIcon(player.rank)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-semibold text-white">{player.name}</span>
                    <span className="text-sm text-gray-400">Active Player</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 bg-yellow-600/20 rounded-lg border border-yellow-600/40">
                    <span className="text-lg text-yellow-500">Level {player.level}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-700">
            <p className="text-center text-gray-400 text-sm">
              Rankings are updated weekly. Last update: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankingsSection;