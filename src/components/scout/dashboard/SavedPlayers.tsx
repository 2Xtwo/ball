import { Player } from '../../../types/leaderboard';
import { CheckBadgeIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { getSkillLevelFromRating, getSkillLevelColor } from '../../../types/skillLevel';

interface SavedPlayersProps {
  players: Player[];
  onViewProfile: (playerId: string) => void;
}

export default function SavedPlayers({ players, onViewProfile }: SavedPlayersProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Saved Players</h2>
      <div className="space-y-4">
        {players.map((player) => {
          const skillLevel = getSkillLevelFromRating(player.rating);
          const levelColorClass = getSkillLevelColor(skillLevel);

          return (
            <div
              key={player.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              onClick={() => onViewProfile(player.id)}
            >
              <div className="flex items-center space-x-4">
                <img
                  src={player.avatar}
                  alt={player.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-medium text-gray-900">{player.name}</h3>
                    {player.isVerified && (
                      <CheckBadgeIcon className="h-5 w-5 text-blue-500" />
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>{player.position}</span>
                    <span>•</span>
                    <span>{player.ageCategory}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="flex items-center space-x-1">
                    <ChartBarIcon className="h-4 w-4 text-gray-400" />
                    <span className={`font-medium ${levelColorClass}`}>
                      {player.rating}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{skillLevel}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}