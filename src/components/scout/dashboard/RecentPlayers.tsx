import { Player } from '../../../types/leaderboard';
import PlayerCard from './PlayerCard';

interface RecentPlayersProps {
  players: Player[];
  onSelectPlayer: (player: Player) => void;
}

export default function RecentPlayers({ players, onSelectPlayer }: RecentPlayersProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Player Profiles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            onClick={() => onSelectPlayer(player)}
          />
        ))}
      </div>
    </div>
  );
}