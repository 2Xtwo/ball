import { Player } from '../../types/leaderboard';
import { getSkillLevelFromRating, getSkillLevelColor } from '../../types/skillLevel';

interface PlayerSearchResultsProps {
  players: Player[];
  onSelectPlayer: (player: Player) => void;
}

export default function PlayerSearchResults({ players, onSelectPlayer }: PlayerSearchResultsProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b">
        <h2 className="text-lg font-semibold text-gray-900">Player Search Results</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {players.map((player) => {
          const skillLevel = getSkillLevelFromRating(player.rating);
          const levelColorClass = getSkillLevelColor(skillLevel);
          
          return (
            <div
              key={player.id}
              className="p-4 hover:bg-gray-50 cursor-pointer"
              onClick={() => onSelectPlayer(player)}
            >
              <div className="flex items-center space-x-4">
                <img
                  src={player.avatar}
                  alt={player.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center">
                    <h3 className="font-medium text-gray-900">{player.name}</h3>
                    {player.isVerified && (
                      <span className="ml-2 px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                        Verified
                      </span>
                    )}
                  </div>
                  <div className="mt-1 flex items-center text-sm text-gray-500">
                    <span>{player.position}</span>
                    <span className="mx-2">•</span>
                    <span>{player.club}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-lg font-semibold ${levelColorClass}`}>
                    {player.rating}
                  </div>
                  <div className="text-sm text-gray-500">{skillLevel}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}