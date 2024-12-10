export type AgeCategory = 'U9' | 'U11' | 'U13' | 'U15' | 'U17' | 'Senior';
export type Gender = 'Male' | 'Female';
export type Region = 'Europe' | 'Asia' | 'Africa' | 'North America' | 'South America' | 'Oceania';
export type LeaderboardScope = 'global' | 'regional' | 'national';

export interface Player {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  rank: number;
  achievements: number;
  isVerified: boolean;
  club?: string;
  position?: string;
  nationality?: string;
  nationalityFlag?: string;
  region: Region;
  ageCategory: AgeCategory;
  gender: Gender;
}