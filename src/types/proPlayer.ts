export interface PlayerProfile {
  id: string;
  fullName: string;
  position: string;
  club: string;
  nationalTeam?: string;
  profilePicture: string;
  countryFlag: string;
  verified: boolean;
}

export interface SkillRating {
  skill: string;
  rating: number;
  category: 'technical' | 'physical' | 'mental';
}

export interface PlayerMoment {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  date: string;
  likes: number;
  comments: number;
}

export interface CallUpBadge {
  id: string;
  team: string;
  level: string;
  date: string;
  description: string;
  flag: string;
  appearances: number;
}

export interface ClubAffiliation {
  id: string;
  name: string;
  logo: string;
  startDate: string;
  endDate?: string;
  current: boolean;
}

export interface TrialInvite {
  id: string;
  clubName: string;
  clubLogo: string;
  date: string;
  details: string;
  status: 'pending' | 'completed' | 'upcoming';
}

export interface CareerHighlight {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'trophy' | 'award' | 'achievement';
  icon: string;
}