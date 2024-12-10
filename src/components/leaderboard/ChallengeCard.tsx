import { clsx } from 'clsx';
import { CalendarIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import { Challenge } from '../../types/leaderboard';

interface ChallengeCardProps {
  challenge: Challenge;
  onJoin: (challengeId: string) => void;
}

export default function ChallengeCard({ challenge, onJoin }: ChallengeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 space-y-4">
      <h3 className="font-semibold text-lg text-gray-900">{challenge.title}</h3>
      <p className="text-gray-600">{challenge.description}</p>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-2">
          <CalendarIcon className="h-5 w-5" />
          <span>Ends {format(new Date(challenge.endDate), 'MMM d, yyyy')}</span>
        </div>
        <div className="flex items-center space-x-2">
          <UserGroupIcon className="h-5 w-5" />
          <span>{challenge.participants} participants</span>
        </div>
      </div>

      <button
        onClick={() => onJoin(challenge.id)}
        className={clsx(
          'w-full py-2 px-4 rounded-md text-sm font-medium',
          challenge.isJoined
            ? 'bg-gray-100 text-gray-600'
            : 'bg-indigo-600 text-white hover:bg-indigo-700'
        )}
      >
        {challenge.isJoined ? 'Joined' : 'Join Challenge'}
      </button>
    </div>
  );
}