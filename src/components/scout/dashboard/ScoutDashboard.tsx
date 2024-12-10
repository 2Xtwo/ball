import { useState } from 'react';
import { Player } from '../../../types/leaderboard';
import { mockUsers } from '../../../data/mockUsers';
import { mockPlayers } from '../../../data/mockLeaderboardData';
import ScoutProfile from './ScoutProfile';
import TalentPool from './TalentPool';
import RecentPlayers from './RecentPlayers';
import SavedPlayers from './SavedPlayers';
import UpcomingMatches from './UpcomingMatches';
import ChatInterface from '../../chat/ChatInterface';

const mockMatches = [
  {
    id: '1',
    homeTeam: 'Manchester United U21',
    awayTeam: 'Liverpool U21',
    date: '2024-03-15T15:00:00Z',
    venue: 'Leigh Sports Village',
    competition: 'Premier League 2',
    trackedPlayers: 3,
  },
  {
    id: '2',
    homeTeam: 'Arsenal U21',
    awayTeam: 'Chelsea U21',
    date: '2024-03-18T19:00:00Z',
    venue: 'Meadow Park',
    competition: 'Premier League 2',
    trackedPlayers: 2,
  },
];

export default function ScoutDashboard() {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const scoutUser = mockUsers.find(user => user.role === 'scout');

  if (!scoutUser) return null;

  const handleViewMatch = (matchId: string) => {
    console.log('Viewing match:', matchId);
  };

  const handleViewProfile = (playerId: string) => {
    const player = mockPlayers.find(p => p.id === playerId);
    if (player) {
      setSelectedPlayer(player);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-gray-900">Scout Dashboard</h1>
        <p className="text-gray-600">Discover and evaluate talented players</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <ScoutProfile scout={scoutUser} />
          <RecentPlayers
            players={mockPlayers.slice(0, 4)}
            onSelectPlayer={setSelectedPlayer}
          />
          <TalentPool
            players={mockPlayers}
            onSelectPlayer={setSelectedPlayer}
          />
        </div>
        <div className="space-y-6">
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
          <SavedPlayers
            players={mockPlayers.slice(0, 3)}
            onViewProfile={handleViewProfile}
          />
          <UpcomingMatches
            matches={mockMatches}
            onViewMatch={handleViewMatch}
          />
        </div>
      </div>
    </div>
  );
}