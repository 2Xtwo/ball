import { clsx } from 'clsx';
import { TrophyIcon, StarIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';
import { Player } from '../../types/leaderboard';
import { getSkillLevelFromRating, getSkillLevelColor } from '../../types/skillLevel';

interface PlayerRankCardProps {
  player: Player;
  rank: number;
  showDetails?: boolean;
}

export default function PlayerRankCard({ player, rank, showDetails = false }: PlayerRankCardProps) {
  const skillLevel = getSkillLevelFromRating(player.rating);
  const levelColorClass = getSkillLevelColor(skillLevel);

  return (
    <div className={clsx(
      'flex items-center justify-between p-4 rounded-lg',
      rank <= 3 ? 'bg-gradient-to-r from-premier-purple/5 to-white' : 'bg-white',
      'hover:shadow-md transition-shadow'
    )}>
      <div className="flex items-center space-x-4">
        <div className={clsx(
          'w-8 h-8 flex items-center justify-center rounded-full font-bold',
          rank === 1 ? 'bg-premier-gold text-premier-purple' :
          rank === 2 ? 'bg-gray-300 text-gray-800' :
          rank === 3 ? 'bg-amber-600 text-white' :
          'bg-gray-100 text-gray-600'
        )}>
          {rank}
        </div>
        <div className="relative">
          <img
            src={player.avatar}
            alt={player.name}
            className="w-10 h-10 rounded-full"
          />
          {player.isVerified && (
            <CheckBadgeIcon className="absolute -top-1 -right-1 h-5 w-5 text-blue-500 bg-white rounded-full" />
          )}
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="font-semibold text-gray-900">{player.name}</h3>
            <span className={`text-sm ${levelColorClass}`}>({skillLevel})</span>
            {player.nationalityFlag && (
              <img 
                src={player.nationalityFlag} 
                alt={player.nationality} 
                className="w-5 h-3 rounded-sm shadow-sm"
              />
            )}
          </div>
          {showDetails && player.club && player.position && (
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>{player.club}</span>
              <span>•</span>
              <span>{player.position}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="text-right">
          <div className="flex items-center space-x-1">
            <TrophyIcon className="h-4 w-4 text-premier-gold" />
            <span className="font-bold text-lg">{player.rating}</span>
          </div>
          {showDetails && (
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <StarIcon className="h-4 w-4 text-premier-purple" />
              <span>{player.achievements}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}