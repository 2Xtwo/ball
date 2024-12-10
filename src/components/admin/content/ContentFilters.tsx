interface ContentFiltersProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function ContentFilters({
  selectedFilter,
  onFilterChange,
}: ContentFiltersProps) {
  const filters = [
    { value: 'all', label: 'All Content' },
    { value: 'posts', label: 'Posts' },
    { value: 'comments', label: 'Comments' },
    { value: 'videos', label: 'Training Videos' },
    { value: 'profiles', label: 'Profile Updates' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedFilter === filter.value
                ? 'bg-premier-purple text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
}