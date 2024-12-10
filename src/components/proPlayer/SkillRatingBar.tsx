import { SkillRating } from '../../types/proPlayer';

interface SkillRatingBarProps {
  skill: SkillRating;
}

export default function SkillRatingBar({ skill }: SkillRatingBarProps) {
  const getColorClass = (rating: number) => {
    if (rating >= 90) return 'bg-green-500';
    if (rating >= 80) return 'bg-lime-500';
    if (rating >= 70) return 'bg-yellow-500';
    if (rating >= 60) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{skill.skill}</span>
        <span className="text-sm font-bold">{skill.rating}</span>
      </div>
      <div className="w-full bg-white/20 rounded-full h-2">
        <div
          className={`${getColorClass(skill.rating)} h-2 rounded-full transition-all`}
          style={{ width: `${skill.rating}%` }}
        />
      </div>
    </div>
  );
}