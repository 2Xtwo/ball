import { SkillRating } from './performance';

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export interface ProfileStats {
  totalMatches: number;
  goalsScored: number;
  assists: number;
  trainingHours: number;
  badges: Badge[];
}

export interface SocialShare {
  platform: 'twitter' | 'facebook' | 'instagram' | 'whatsapp';
  url: string;
}