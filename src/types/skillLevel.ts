export type SkillLevel = 'Beginner' | 'Novice' | 'Intermediate' | 'Advanced' | 'Expert';

export interface SkillLevelDefinition {
  level: SkillLevel;
  technicalSkills: string;
  dribbling: string;
  passing: string;
  shooting: string;
  defending: string;
  physicality: string;
  gameUnderstanding: string;
  ratingRange: {
    min: number;
    max: number;
  };
}

export const skillLevelDefinitions: Record<SkillLevel, SkillLevelDefinition> = {
  Beginner: {
    level: 'Beginner',
    technicalSkills: 'Basic understanding of the game. Struggles with controlling the ball, and passing may be inconsistent.',
    dribbling: 'Can dribble but lacks control and may lose the ball frequently. Often struggles with changes in direction.',
    passing: 'Can pass the ball short distances but may lack accuracy or strength.',
    shooting: 'Limited power and accuracy, often miss the target or fail to get the ball off properly.',
    defending: 'Poor positioning, doesn\'t track the ball well, and struggles with tackling.',
    physicality: 'Low stamina, and limited coordination. Speed is average, and decision-making is slow.',
    gameUnderstanding: 'Basic understanding of where to be but often out of position.',
    ratingRange: {
      min: 0,
      max: 40
    }
  },
  Novice: {
    level: 'Novice',
    technicalSkills: 'Better control of the ball and more consistent with basic passes. Still working on fine-tuning technique.',
    dribbling: 'More confident dribbling, but still lacks fluidity and may struggle against pressure.',
    passing: 'Can make short passes with better accuracy and begin to attempt longer passes. Some inconsistency with decision-making.',
    shooting: 'Some accuracy and power, but still lacks composure and precision.',
    defending: 'Can track the ball and make some tackles but often caught out of position.',
    physicality: 'More stamina and strength than a beginner, but still needs to work on endurance and coordination.',
    gameUnderstanding: 'Can follow basic instructions and positioning but still lacks deeper understanding of strategies.',
    ratingRange: {
      min: 41,
      max: 60
    }
  },
  Intermediate: {
    level: 'Intermediate',
    technicalSkills: 'Confident ball control in various situations. Can execute basic skills under pressure but still needs to refine technique.',
    dribbling: 'Can dribble effectively with better change of direction and use of both feet, though may struggle against stronger defenders.',
    passing: 'More consistent with longer and shorter passes, able to change direction of play and set up teammates.',
    shooting: 'Improved accuracy, but occasional inconsistency in decision-making. Able to shoot under pressure.',
    defending: 'Solid positioning and awareness. Able to make clean tackles and track attackers.',
    physicality: 'Good stamina, agility, and speed. Increasing strength, but may still lack explosive power.',
    gameUnderstanding: 'Better understanding of positioning and strategy, able to read the game but not always in sync with teammates.',
    ratingRange: {
      min: 61,
      max: 75
    }
  },
  Advanced: {
    level: 'Advanced',
    technicalSkills: 'Strong control of the ball under pressure. Comfortable with both feet and can execute advanced skills.',
    dribbling: 'Fluid dribbling with a variety of tricks. Can beat defenders consistently, especially in one-on-one situations.',
    passing: 'Excellent passing range and accuracy. Ability to make advanced passes, such as through balls or crosses, with consistency.',
    shooting: 'Composed in front of goal, with high accuracy and power. Can shoot with both feet and from various angles.',
    defending: 'High level of positional awareness and anticipation. Can intercept passes, make clean tackles, and win aerial duels.',
    physicality: 'Strong stamina, speed, and agility. Can accelerate and decelerate quickly. Overall athleticism is advanced.',
    gameUnderstanding: 'Excellent understanding of tactical systems, able to read the game and make decisions that benefit the team.',
    ratingRange: {
      min: 76,
      max: 89
    }
  },
  Expert: {
    level: 'Expert',
    technicalSkills: 'Mastery of ball control and dribbling, capable of performing in tight spaces and under immense pressure.',
    dribbling: 'Dribbles with speed and precision, regularly beating defenders with skill and creativity.',
    passing: 'Exceptional vision, able to spot passes that most players can\'t. Perfect accuracy and timing with a range of passing.',
    shooting: 'High level of composure, accuracy, and power. Can score from almost any situation and under pressure.',
    defending: 'Anticipates the game, breaks down opposition attacks, and leads by example. Defends with intelligence and precision.',
    physicality: 'Peak physical condition, combining speed, strength, stamina, and agility. Able to play at high intensity for long periods.',
    gameUnderstanding: 'Complete tactical awareness, understanding team dynamics, and making influential decisions in critical moments.',
    ratingRange: {
      min: 90,
      max: 100
    }
  }
};

export function getSkillLevelFromRating(rating: number): SkillLevel {
  for (const [level, definition] of Object.entries(skillLevelDefinitions)) {
    if (rating >= definition.ratingRange.min && rating <= definition.ratingRange.max) {
      return level as SkillLevel;
    }
  }
  return 'Beginner'; // Default fallback
}

export function getSkillLevelColor(level: SkillLevel): string {
  switch (level) {
    case 'Beginner':
      return 'text-gray-500';
    case 'Novice':
      return 'text-blue-500';
    case 'Intermediate':
      return 'text-green-500';
    case 'Advanced':
      return 'text-purple-500';
    case 'Expert':
      return 'text-yellow-500';
    default:
      return 'text-gray-500';
  }
}