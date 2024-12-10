import { Player } from '../types/leaderboard';

export const mockPlayers: Player[] = [
  {
    id: '1',
    name: 'John Smith',
    avatar: 'https://placehold.co/100x100/png?text=JS',
    rating: 92,
    rank: 1,
    achievements: 15,
    isVerified: true,
    club: 'Manchester United U21',
    position: 'Forward',
    nationality: 'England',
    nationalityFlag: 'https://placehold.co/80x60/png?text=🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    region: 'Europe',
    ageCategory: 'U17',
    gender: 'Male',
  },
  // Add more mock players...
];