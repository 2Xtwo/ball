import { useState } from 'react';
import { Player } from '../../../types/leaderboard';
import { mockPlayers } from '../../../data/mockLeaderboardData';
import { getSkillLevelFromRating, getSkillLevelColor } from '../../../types/skillLevel';

interface PlayerRecruitmentProps {
  club: any;
}

export default function PlayerRecruitment({ club }: PlayerRecruitmentProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('all');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all');

  const filteredPlayers = mockPlayers.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPosition = selectedPosition === 'all' || player.position === selectedPosition;
    const matchesAge = selectedAgeGroup === 'all' || player.ageCategory === selectedAgeGroup;
    return matchesSearch && matchesPosition && matchesAge;
  });

  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg shadow space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Search players..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          <select
            value={selectedPosition}
            onChange={(e) => setSelectedPosition(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="all">All Positions</option>
            <option value="Forward">Forward</option>
            <option value="Midfielder">Midfielder</option>
            <option value="Defender">Defender</option>
            <option value="Goalkeeper">Goalkeeper</option>
          </select>
          <select
            value={selectedAgeGroup}
            onChange={(e) => setSelectedAgeGroup(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="all">All Age Groups</option>
            <option value="U17">Under 17</option>
            <option value="U15">Under 15</option>
            <option value="U13">Under 13</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPlayers.map((player) => {
          const skillLevel = getSkillLevelFromRating(player.rating);
          const levelColorClass = getSkillLevelColor(skillLevel);

          return (
            <div key={player.id} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center space-x-4">
                <img
                  src={player.avatar}
                  alt={player.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{player.name}</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>{player.position}</span>
                    <span>•</span>
                    <span>{player.ageCategory}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">{player.nationality}</p>
                  <div className={`text-lg font-bold ${levelColorClass}`}>
                    Rating: {player.rating}
                  </div>
                </div>
                <button
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                  onClick={() => console.log('Invite to trial:', player.id)}
                >
                  Invite to Trial
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}