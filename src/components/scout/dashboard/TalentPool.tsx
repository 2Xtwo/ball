import { useState } from 'react';
import { Player } from '../../../types/leaderboard';
import PlayerCard from './PlayerCard';
import TalentFilters from './TalentFilters';

interface TalentPoolProps {
  players: Player[];
  onSelectPlayer: (player: Player) => void;
}

export default function TalentPool({ players, onSelectPlayer }: TalentPoolProps) {
  const [filters, setFilters] = useState({
    position: 'all',
    ageGroup: 'all',
    rating: 'all',
  });

  const filteredPlayers = players.filter(player => {
    if (filters.position !== 'all' && player.position !== filters.position) return false;
    if (filters.ageGroup !== 'all' && player.ageCategory !== filters.ageGroup) return false;
    if (filters.rating === '90+' && player.rating < 90) return false;
    if (filters.rating === '80-89' && (player.rating < 80 || player.rating >= 90)) return false;
    if (filters.rating === '70-79' && (player.rating < 70 || player.rating >= 80)) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <TalentFilters
        filters={filters}
        onChange={setFilters}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPlayers.map((player) => (
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