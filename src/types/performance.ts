export interface PerformanceMetric {
  date: string;
  value: number;
}

export interface SkillRating {
  skill: string;
  rating: number;
  improvement: number;
}

export interface DrillCompletion {
  id: string;
  name: string;
  completedAt: string;
  score: number;
  duration: number;
}

export interface PerformanceStats {
  goals: number;
  assists: number;
  completedDrills: number;
  averageScore: number;
  totalTrainingTime: number;
  skillRatings: SkillRating[];
  weeklyProgress: PerformanceMetric[];
  monthlyProgress: PerformanceMetric[];
  recentDrills: DrillCompletion[];
}