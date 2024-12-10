import { DifficultyLevel } from '../../types/training';

interface DifficultyFilterProps {
  selectedLevel: DifficultyLevel | 'all';
  onSelectLevel: (level: DifficultyLevel | 'all') => void;
}

export default function DifficultyFilter({ selectedLevel, onSelectLevel }: DifficultyFilterProps) {
  const levels: (DifficultyLevel | 'all')[] = ['all', 'beginner', 'intermediate', 'advanced'];

  return (
    <div className="flex space-x-2 overflow-x-auto pb-2">
      {levels.map((level) => (
        <button
          key={level}
          onClick={() => onSelectLevel(level)}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
            selectedLevel === level
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          {level.charAt(0).toUpperCase() + level.slice(1)}
        </button>
      ))}
    </div>
  );
}