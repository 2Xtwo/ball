import { AgeCategory, Gender } from '../../types/leaderboard';
import { clsx } from 'clsx';

interface LeaderboardFiltersProps {
  selectedAgeCategory: AgeCategory;
  selectedGender: Gender;
  onAgeCategoryChange: (category: AgeCategory) => void;
  onGenderChange: (gender: Gender) => void;
}

export default function LeaderboardFilters({
  selectedAgeCategory,
  selectedGender,
  onAgeCategoryChange,
  onGenderChange,
}: LeaderboardFiltersProps) {
  const ageCategories: AgeCategory[] = ['U9', 'U11', 'U13', 'U15', 'U17', 'Senior'];
  const genders: Gender[] = ['Male', 'Female'];

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Age Category</h3>
        <div className="flex flex-wrap gap-2">
          {ageCategories.map((category) => (
            <button
              key={category}
              onClick={() => onAgeCategoryChange(category)}
              className={clsx(
                'px-3 py-1.5 rounded-full text-sm font-medium transition-colors',
                selectedAgeCategory === category
                  ? 'bg-premier-purple text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Gender</h3>
        <div className="flex gap-2">
          {genders.map((gender) => (
            <button
              key={gender}
              onClick={() => onGenderChange(gender)}
              className={clsx(
                'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                selectedGender === gender
                  ? 'bg-premier-purple text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              )}
            >
              {gender}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}