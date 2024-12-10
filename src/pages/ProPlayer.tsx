import { useState } from 'react';
import {
  PlayerProfile,
  SkillRating,
  PlayerMoment,
  CallUpBadge,
  ClubAffiliation,
  CareerHighlight,
} from '../types/proPlayer';
import ProfileHeader from '../components/proPlayer/ProfileHeader';
import RatingCard from '../components/proPlayer/RatingCard';
import MomentsGrid from '../components/proPlayer/MomentsGrid';
import CallUpBadges from '../components/proPlayer/CallUpBadges';
import ClubAffiliations from '../components/proPlayer/ClubAffiliations';
import CareerHighlights from '../components/proPlayer/CareerHighlights';
import { mockProfile, mockSkillRatings, mockMoments } from '../data/mockProPlayerData';

const mockCallUpBadges: CallUpBadge[] = [
  {
    id: '1',
    team: 'England National Team',
    level: 'Senior Team',
    date: '2024-01-15',
    description: 'FIFA World Cup Qualification',
    flag: 'https://placehold.co/80x60/png?text=🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    appearances: 12,
  },
  {
    id: '2',
    team: 'England U21',
    level: 'Youth Team',
    date: '2023-06-20',
    description: 'UEFA European Under-21 Championship',
    flag: 'https://placehold.co/80x60/png?text=🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    appearances: 8,
  },
];

const mockClubAffiliations: ClubAffiliation[] = [
  {
    id: '1',
    name: 'Manchester City',
    logo: 'https://placehold.co/120x120/png?text=MCFC',
    startDate: '2022-07-01',
    current: true,
  },
  {
    id: '2',
    name: 'Leicester City',
    logo: 'https://placehold.co/120x120/png?text=LCFC',
    startDate: '2020-07-01',
    endDate: '2022-06-30',
    current: false,
  },
];

const mockCareerHighlights: CareerHighlight[] = [
  {
    id: '1',
    title: 'Premier League Champion',
    description: 'Won the Premier League title with Manchester City',
    date: '2023-05-28',
    type: 'trophy',
    icon: 'https://placehold.co/40x40/png?text=🏆',
  },
  {
    id: '2',
    title: 'Young Player of the Year',
    description: 'Named Premier League Young Player of the Year',
    date: '2023-05-30',
    type: 'award',
    icon: 'https://placehold.co/40x40/png?text=🌟',
  },
  {
    id: '3',
    title: 'International Debut',
    description: 'First senior appearance for England National Team',
    date: '2024-01-15',
    type: 'achievement',
    icon: 'https://placehold.co/40x40/png?text=🎯',
  },
];

export default function ProPlayer() {
  const [profile] = useState<PlayerProfile>(mockProfile);
  const [skillRatings] = useState<SkillRating[]>(mockSkillRatings);
  const [moments] = useState<PlayerMoment[]>(mockMoments);
  const [callUpBadges] = useState<CallUpBadge[]>(mockCallUpBadges);
  const [clubAffiliations] = useState<ClubAffiliation[]>(mockClubAffiliations);
  const [careerHighlights] = useState<CareerHighlight[]>(mockCareerHighlights);

  const overallRating = Math.round(
    skillRatings.reduce((acc, curr) => acc + curr.rating, 0) / skillRatings.length
  );

  return (
    <div className="space-y-6 pb-16">
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

      <CallUpBadges badges={callUpBadges} />
      <ClubAffiliations affiliations={clubAffiliations} />
      <CareerHighlights highlights={careerHighlights} />
    </div>
  );
}