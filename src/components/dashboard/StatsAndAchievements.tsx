import { useState } from 'react';
import { PencilIcon, CheckIcon } from '@heroicons/react/24/outline';
import { Badge } from '../../types/profile';

interface Stats {
  totalMatches: number;
  goals: number;
  assists: number;
  trainingHours: number;
}

interface StatsAndAchievementsProps {
  initialStats: Stats;
  badges: Badge[];
  onUpdateStats: (stats: Stats) => void;
}

export default function StatsAndAchievements({ 
  initialStats, 
  badges,
  onUpdateStats 
}: StatsAndAchievementsProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [stats, setStats] = useState(initialStats);

  const handleSave = () => {
    onUpdateStats(stats);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Player Statistics</h2>
          {isEditing ? (
            <button
              onClick={handleSave}
              className="inline-flex items-center px-3 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <CheckIcon className="h-4 w-4 mr-2" />
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <PencilIcon className="h-4 w-4 mr-2" />
              Edit Stats
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Total Matches</p>
            {isEditing ? (
              <input
                type="number"
                value={stats.totalMatches}
                onChange={(e) => setStats(prev => ({ ...prev, totalMatches: parseInt(e.target.value) || 0 }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            ) : (
              <p className="text-2xl font-bold text-gray-900">{stats.totalMatches}</p>
            )}
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Goals</p>
            {isEditing ? (
              <input
                type="number"
                value={stats.goals}
                onChange={(e) => setStats(prev => ({ ...prev, goals: parseInt(e.target.value) || 0 }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            ) : (
              <p className="text-2xl font-bold text-gray-900">{stats.goals}</p>
            )}
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Assists</p>
            {isEditing ? (
              <input
                type="number"
                value={stats.assists}
                onChange={(e) => setStats(prev => ({ ...prev, assists: parseInt(e.target.value) || 0 }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            ) : (
              <p className="text-2xl font-bold text-gray-900">{stats.assists}</p>
            )}
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Training Hours</p>
            {isEditing ? (
              <input
                type="number"
                value={stats.trainingHours}
                onChange={(e) => setStats(prev => ({ ...prev, trainingHours: parseInt(e.target.value) || 0 }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            ) : (
              <p className="text-2xl font-bold text-gray-900">{stats.trainingHours}</p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Badges & Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className="flex flex-col items-center p-4 border rounded-lg hover:shadow-md transition-shadow"
            >
              <img src={badge.icon} alt={badge.name} className="w-12 h-12 mb-2" />
              <h3 className="font-medium text-gray-900 text-center">{badge.name}</h3>
              <p className="text-sm text-gray-500 text-center mt-1">{badge.description}</p>
              <span className={`mt-2 px-2 py-1 rounded-full text-xs font-medium ${
                badge.rarity === 'legendary' ? 'bg-yellow-100 text-yellow-800' :
                badge.rarity === 'epic' ? 'bg-purple-100 text-purple-800' :
                badge.rarity === 'rare' ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {badge.rarity.charAt(0).toUpperCase() + badge.rarity.slice(1)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}