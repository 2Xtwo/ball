import { useState } from 'react';
import { Player, LeaderboardScope } from '../../../types/leaderboard';
import LeaderboardTabs from '../../leaderboard/LeaderboardTabs';
import PlayerRankCard from '../../leaderboard/PlayerRankCard';
import { mockPlayers } from '../../../data/mockLeaderboardData';

export default function LeaderboardSection() {
  const [currentScope, setCurrentScope] = useState<LeaderboardScope>('global');
  const [players] = useState<Player[]>(mockPlayers);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Player Rankings</h2>
        <LeaderboardTabs
          currentScope={currentScope}
          onScopeChange={setCurrentScope}
        />
      </div>

      <div className="space-y-4">
        {players.map((player, index) => (
          <PlayerRankCard
            key={player.id}
            player={player}
            rank={index + 1}
            showDetails={true}
          />
        ))}
      </div>
    </div>
  );
}