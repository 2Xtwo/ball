import { Badge } from '../../types/profile';

interface BadgeGridProps {
  badges: Badge[];
}

export default function BadgeGrid({ badges }: BadgeGridProps) {
  const rarityColors = {
    common: 'bg-gray-100 text-gray-800',
    rare: 'bg-blue-100 text-blue-800',
    epic: 'bg-purple-100 text-purple-800',
    legendary: 'bg-yellow-100 text-yellow-800',
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Badges & Achievements</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className="flex flex-col items-center p-4 border rounded-lg hover:shadow-md transition-shadow"
          >
            <img src={badge.icon} alt={badge.name} className="w-12 h-12 mb-2" />
            <h3 className="font-medium text-gray-900 text-center">{badge.name}</h3>
            <p className="text-sm text-gray-500 text-center mt-1">{badge.description}</p>
            <span className={`mt-2 px-2 py-1 rounded-full text-xs font-medium ${rarityColors[badge.rarity]}`}>
              {badge.rarity.charAt(0).toUpperCase() + badge.rarity.slice(1)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}