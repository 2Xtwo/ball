import { useState } from 'react';
import {
  PlayerProfile,
  SkillRating,
  PlayerMoment,
} from '../../../types/proPlayer';
import ProfileHeader from '../../proPlayer/ProfileHeader';
import RatingCard from '../../proPlayer/RatingCard';
import MomentsGrid from '../../proPlayer/MomentsGrid';
import { mockProfile, mockSkillRatings, mockMoments } from '../../../data/mockProPlayerData';

export default function ProPlayerSection() {
  const [profile] = useState<PlayerProfile>(mockProfile);
  const [skillRatings] = useState<SkillRating[]>(mockSkillRatings);
  const [moments] = useState<PlayerMoment[]>(mockMoments);

  const overallRating = Math.round(
    skillRatings.reduce((acc, curr) => acc + curr.rating, 0) / skillRatings.length
  );

  return (
    <div className="space-y-6">
      <ProfileHeader profile={profile} />
      
      <RatingCard
        overallRating={overallRating}
        skillRatings={skillRatings}
      />
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Player Highlights</h2>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Upload Moment
          </button>
        </div>
        <MomentsGrid moments={moments} />
      </div>
    </div>
  );
}