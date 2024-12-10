import { useState } from 'react';
import { Player, LeaderboardScope, AgeCategory, Gender, Region } from '../types/leaderboard';
import LeaderboardTabs from '../components/leaderboard/LeaderboardTabs';
import LeaderboardFilters from '../components/leaderboard/LeaderboardFilters';
import RegionSelector from '../components/leaderboard/RegionSelector';
import PlayerRankCard from '../components/leaderboard/PlayerRankCard';
import { mockPlayers } from '../data/mockLeaderboardData';
import { useAuthStore } from '../lib/store/authStore';

export default function Leaderboards() {
  const [currentScope, setCurrentScope] = useState<LeaderboardScope>('global');
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [selectedAgeCategory, setSelectedAgeCategory] = useState<AgeCategory>('U17');
  const [selectedGender, setSelectedGender] = useState<Gender>('Male');
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const filteredPlayers = mockPlayers
    .filter(player => {
      const scopeMatch = (() => {
        switch (currentScope) {
          case 'global':
            return true;
          case 'regional':
            return selectedRegion ? player.region === selectedRegion : true;
          case 'national':
            return player.nationality === 'England'; // Replace with actual user's nationality
          default:
            return true;
        }
      })();

      const ageCategoryMatch = player.ageCategory === selectedAgeCategory;
      const genderMatch = player.gender === selectedGender;
      
      return scopeMatch && ageCategoryMatch && genderMatch;
    })
    .sort((a, b) => b.rating - a.rating);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Header */}
          <div className="bg-gradient-premier p-6 rounded-lg shadow-premier text-white">
            <h1 className="text-2xl font-bold">Verified Player Leaderboards</h1>
            <p className="text-gray-200">Track the progress of verified players worldwide</p>
          </div>

          {/* Filters Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
            <LeaderboardTabs
              currentScope={currentScope}
              onScopeChange={setCurrentScope}
            />

            {currentScope === 'regional' && (
              <RegionSelector
                selectedRegion={selectedRegion}
                onRegionChange={setSelectedRegion}
              />
            )}

            <LeaderboardFilters
              selectedAgeCategory={selectedAgeCategory}
              selectedGender={selectedGender}
              onAgeCategoryChange={setSelectedAgeCategory}
              onGenderChange={setSelectedGender}
            />
          </div>

          {/* Players List */}
          <div className="space-y-4">
            {filteredPlayers.map((player, index) => (
              <PlayerRankCard
                key={player.id}
                player={{
                  ...player,
                  name: isAuthenticated ? player.name : player.name.split(' ')[0],
                  club: isAuthenticated ? player.club : undefined,
                  position: isAuthenticated ? player.position : undefined,
                }}
                rank={index + 1}
                showDetails={isAuthenticated}
              />
            ))}
          </div>
        </div>

        {/* Sign In/Up Banner */}
        {!isAuthenticated && (
          <div className="fixed bottom-0 left-0 right-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
              <div className="bg-gradient-premier rounded-lg p-4 shadow-lg text-center">
                <p className="text-white mb-2">Sign in to view complete player profiles and connect with players</p>
                <div className="space-x-4">
                  <a href="/login" className="inline-block bg-premier-pink text-white px-6 py-2 rounded-lg hover:bg-premier-pink/90 transition-colors">
                    Sign In
                  </a>
                  <a href="/signup" className="inline-block bg-white text-premier-purple px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}