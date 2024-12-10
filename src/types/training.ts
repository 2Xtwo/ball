export type TrainingCategory = 
  | 'Technical Skills'
  | 'Physical Attributes'
  | 'Tactical Awareness'
  | 'Mental and Psychological';

export type TechnicalSkillType = 
  | 'Passing'
  | 'Receiving and Ball Control'
  | 'Dribbling'
  | 'Shooting'
  | 'Heading'
  | 'Ball Juggling'
  | 'Set Pieces and Crossing'
  | 'Tackling';

export type PhysicalAttributeType = 
  | 'Agility'
  | 'Flexibility'
  | 'Balance'
  | 'Coordination'
  | 'Speed'
  | 'Endurance'
  | 'Power'
  | 'Strength';

export type TacticalAwarenessType = 
  | 'Attacking Play'
  | 'Defensive Play'
  | 'Game Impact'
  | 'Tactical Awareness'
  | 'Running off the Ball';

export type MentalAttributeType = 
  | 'Attitude'
  | 'Commitment'
  | 'Leadership'
  | 'Fair Play';

export type TrainingSubcategory = 
  | TechnicalSkillType 
  | PhysicalAttributeType 
  | TacticalAwarenessType 
  | MentalAttributeType;

export interface TrainingVideo {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  category: TrainingCategory;
  subcategory: TrainingSubcategory;
  duration: number;
  uploadedBy: {
    id: string;
    name: string;
    avatar: string;
  };
  uploadedAt: string;
  likes: number;
  comments: number;
  views: number;
}