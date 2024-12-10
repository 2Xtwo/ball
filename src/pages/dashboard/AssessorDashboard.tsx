import { useState } from 'react';
import { Player } from '../../types/leaderboard';
import AssessorProfile from '../../components/assessor/AssessorProfile';
import PlayerAssessment from '../../components/assessor/PlayerAssessment';
import ChatInterface from '../../components/chat/ChatInterface';
import { mockPlayers } from '../../data/mockLeaderboardData';
import { mockUsers } from '../../data/mockUsers';

export default function AssessorDashboard() {
  const [players] = useState<Player[]>(mockPlayers);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const assessorUser = mockUsers.find(user => user.role === 'assessor');

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-gray-900">Assessor Dashboard</h1>
        <p className="text-gray-600">Evaluate players and provide professional assessments</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <AssessorProfile assessor={assessorUser} />
          <PlayerAssessment
            players={players}
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