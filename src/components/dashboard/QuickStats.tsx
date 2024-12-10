import { TrophyIcon, StarIcon, FireIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function QuickStats() {
  const getCardStyle = (rating: number) => {
    if (rating >= 80) {
      return 'from-yellow-400 via-yellow-300 to-yellow-200'; // Gold
    } else if (rating >= 60) {
      return 'from-gray-300 via-gray-200 to-gray-100'; // Silver
    }
    return 'from-amber-700 via-amber-600 to-amber-500'; // Bronze
  };

  const stats = [
    {
      icon: TrophyIcon,
      value: '1250',
      label: 'XP Points',
      rating: 85
    },
    {
      icon: StarIcon,
      value: '12',
      label: 'Badges',
      rating: 75
    },
    {
      icon: FireIcon,
      value: '5',
      label: 'Day Streak',
      rating: 65
    },
    {
      icon: ChartBarIcon,
      value: '90',
      label: 'Performance',
      rating: 90
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`bg-gradient-to-br ${getCardStyle(stat.rating)} rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-200`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-700 font-medium">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
            </div>
            <div className="bg-white/90 p-3 rounded-full">
              <stat.icon className="h-8 w-8 text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-black/10 rounded-full h-1.5">
              <div
                className="h-1.5 rounded-full bg-white/90"
                style={{ width: `${stat.rating}%` }}
              />
            </div>
            <p className="text-sm text-gray-700 mt-1 font-medium">
              {stat.rating}% Progress
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}