import { useState } from 'react';
import { Player } from '../../types/leaderboard';
import { mockUsers } from '../../data/mockUsers';
import { mockPlayers } from '../../data/mockLeaderboardData';
import ScoutProfile from '../../components/scout/dashboard/ScoutProfile';
import TalentPool from '../../components/scout/dashboard/TalentPool';
import ChatInterface from '../../components/chat/ChatInterface';

export default function ScoutDashboard() {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const scoutUser = mockUsers.find(user => user.role === 'scout');

  if (!scoutUser) return null;

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-gray-900">Scout Dashboard</h1>
        <p className="text-gray-600">Discover and evaluate talented players</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <ScoutProfile scout={scoutUser} />
          <TalentPool
            players={mockPlayers}
            onSelectPlayer={setSelectedPlayer}
          />
        </div>
        <div className="bg-white rounded-lg shadow">
          {selectedPlayer ? (
            <ChatInterface
              recipient={selectedPlayer}
              onClose={() => setSelectedPlayer(null)}
            />
          ) : (
            <div className="p-6 text-center text-gray-500">
              Select a player to start a conversation
            </div>
          )}
        </div>
      </div>
    </div>
  );
}