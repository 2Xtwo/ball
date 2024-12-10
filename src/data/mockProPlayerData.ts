import { PlayerProfile, SkillRating, PlayerMoment } from '../types/proPlayer';

export const mockProfile: PlayerProfile = {
  id: '1',
  fullName: 'Marcus Sterling',
  position: 'Forward',
  club: 'Manchester City',
  nationalTeam: 'England',
  profilePicture: 'https://placehold.co/400x400/png?text=MS',
  countryFlag: 'https://placehold.co/80x60/png?text=🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  verified: true,
};

export const mockSkillRatings: SkillRating[] = [
  { skill: 'Speed', rating: 88, category: 'physical' },
  { skill: 'Shooting', rating: 85, category: 'technical' },
  { skill: 'Dribbling', rating: 92, category: 'technical' },
  { skill: 'Passing', rating: 84, category: 'technical' },
  { skill: 'Strength', rating: 78, category: 'physical' },
  { skill: 'Vision', rating: 86, category: 'mental' },
];

export const mockMoments: PlayerMoment[] = [
  {
    id: '1',
    title: 'Amazing Solo Goal vs Liverpool',
    description: 'Dribbled past three defenders to score the winning goal',
    thumbnail: 'https://placehold.co/800x400/png?text=Goal+vs+Liverpool',
    videoUrl: 'https://example.com/video1.mp4',
    date: '2024-02-15',
    likes: 1250,
    comments: 89,
  },
  {
    id: '2',
    title: 'Perfect Hat-trick',
    description: 'Scored three goals in a single match against Arsenal',
    thumbnail: 'https://placehold.co/800x400/png?text=Hat-trick',
    videoUrl: 'https://example.com/video2.mp4',
    date: '2024-01-28',
    likes: 2100,
    comments: 156,
  },
  {
    id: '3',
    title: 'Training Highlights',
    description: 'Best moments from this week\'s training sessions',
    thumbnail: 'https://placehold.co/800x400/png?text=Training',
    videoUrl: 'https://example.com/video3.mp4',
    date: '2024-02-10',
    likes: 850,
    comments: 42,
  },
];