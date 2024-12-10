import { SkillRating } from '../../types/performance';
import { getSkillLevelFromRating, getSkillLevelColor } from '../../types/skillLevel';

interface SkillRatingCardProps {
  skillRating: SkillRating;
}

export default function SkillRatingCard({ skillRating }: SkillRatingCardProps) {
  const skillLevel = getSkillLevelFromRating(skillRating.rating);
  const levelColorClass = getSkillLevelColor(skillLevel);

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h4 className="font-medium text-gray-900">{skillRating.skill}</h4>
          <span className={`text-sm ${levelColorClass}`}>{skillLevel}</span>
        </div>
        <span className={`text-sm ${
          skillRating.improvement > 0 ? 'text-green-600' : 'text-red-600'
        }`}>
          {skillRating.improvement > 0 ? '+' : ''}{skillRating.improvement}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all ${levelColorClass.replace('text-', 'bg-')}`}
          style={{ width: `${skillRating.rating}%` }}
        />
      </div>
      <p className="mt-1 text-sm text-gray-600">
        Rating: {skillRating.rating}/100
      </p>
    </div>
  );
}