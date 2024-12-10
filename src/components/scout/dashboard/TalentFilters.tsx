import { clsx } from 'clsx';

interface TalentFiltersProps {
  filters: {
    position: string;
    ageGroup: string;
    rating: string;
  };
  onChange: (filters: any) => void;
}

export default function TalentFilters({ filters, onChange }: TalentFiltersProps) {
  const positions = [
    { value: 'all', label: 'All Positions' },
    { value: 'Forward', label: 'Forward' },
    { value: 'Midfielder', label: 'Midfielder' },
    { value: 'Defender', label: 'Defender' },
    { value: 'Goalkeeper', label: 'Goalkeeper' },
  ];

  const ageGroups = [
    { value: 'all', label: 'All Ages' },
    { value: 'U17', label: 'Under 17' },
    { value: 'U15', label: 'Under 15' },
    { value: 'U13', label: 'Under 13' },
  ];

  const ratings = [
    { value: 'all', label: 'All Ratings' },
    { value: '90+', label: '90+' },
    { value: '80-89', label: '80-89' },
    { value: '70-79', label: '70-79' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Position
          </label>
          <select
            value={filters.position}
            onChange={(e) => onChange({ ...filters, position: e.target.value })}
            className={clsx(
              "block w-full rounded-md border-gray-300 shadow-sm",
              "focus:border-indigo-500 focus:ring-indigo-500"
            )}
          >
            {positions.map((position) => (
              <option key={position.value} value={position.value}>
                {position.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Age Group
          </label>
          <select
            value={filters.ageGroup}
            onChange={(e) => onChange({ ...filters, ageGroup: e.target.value })}
            className={clsx(
              "block w-full rounded-md border-gray-300 shadow-sm",
              "focus:border-indigo-500 focus:ring-indigo-500"
            )}
          >
            {ageGroups.map((age) => (
              <option key={age.value} value={age.value}>
                {age.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Rating
          </label>
          <select
            value={filters.rating}
            onChange={(e) => onChange({ ...filters, rating: e.target.value })}
            className={clsx(
              "block w-full rounded-md border-gray-300 shadow-sm",
              "focus:border-indigo-500 focus:ring-indigo-500"
            )}
          >
            {ratings.map((rating) => (
              <option key={rating.value} value={rating.value}>
                {rating.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}