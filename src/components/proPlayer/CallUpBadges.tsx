import { CallUpBadge } from '../../types/proPlayer';
import { format } from 'date-fns';

interface CallUpBadgesProps {
  badges: CallUpBadge[];
}

export default function CallUpBadges({ badges }: CallUpBadgesProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">National Team Call-Ups</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className="flex items-center space-x-4 p-4 border rounded-lg hover:shadow-md transition-shadow"
          >
            <img
              src={badge.flag}
              alt={badge.team}
              className="w-12 h-8 object-cover rounded shadow"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{badge.team}</h3>
              <p className="text-sm text-gray-600">{badge.level}</p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-sm text-gray-500">
                  {format(new Date(badge.date), 'MMM yyyy')}
                </span>
                <span className="text-sm font-medium text-indigo-600">
                  {badge.appearances} caps
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}