import { Player } from '../../../types/leaderboard';
import { getSkillLevelFromRating, getSkillLevelColor } from '../../../types/skillLevel';

interface PlayerCardProps {
  player: Player;
  onClick: () => void;
}

export default function PlayerCard({ player, onClick }: PlayerCardProps) {
  const skillLevel = getSkillLevelFromRating(player.rating);
  const levelColorClass = getSkillLevelColor(skillLevel);

  const getCardStyle = (rating: number) => {
    if (rating >= 80) {
      return 'bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-200'; // Gold
    } else if (rating >= 60) {
      return 'bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100'; // Silver
    }
    return 'bg-gradient-to-br from-amber-700 via-amber-600 to-amber-500'; // Bronze
  };

  const getStatBgColor = (rating: number) => {
    if (rating >= 80) {
      return 'bg-white/90'; // Gold card stats
    } else if (rating >= 60) {
      return 'bg-white/80'; // Silver card stats
    }
    return 'bg-white/70'; // Bronze card stats
  };

  return (
    <div
      onClick={onClick}
      className={`${getCardStyle(player.rating)} rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer p-4`}
    >
      <div className="flex items-center space-x-4">
        <img
          src={player.avatar}
          alt={player.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-white/30"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{player.name}</h3>
          <div className="flex items-center space-x-2 text-sm text-gray-700">
            <span>{player.position}</span>
            <span>•</span>
            <span>{player.ageCategory}</span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-700">{player.club || 'Free Agent'}</p>
          {player.nationality && (
            <div className="flex items-center space-x-1 mt-1">
              {player.nationalityFlag && (
                <img
                  src={player.nationalityFlag}
                  alt={player.nationality}
                  className="w-4 h-3"
                />
              )}
              <span className="text-sm text-gray-700">{player.nationality}</span>
            </div>
          )}
        </div>
        <div className="text-right">
          <div className={`${getStatBgColor(player.rating)} px-3 py-1 rounded-full`}>
            <span className="text-2xl font-bold text-gray-900">{player.rating}</span>
          </div>
          <div className={`text-sm mt-1 ${getStatBgColor(player.rating)} px-2 py-0.5 rounded-full`}>
            <span className="text-gray-700">{skillLevel}</span>
          </div>
        </div>
      </div>
    </div>
  );
}