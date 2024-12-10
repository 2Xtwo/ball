import { PostFilter } from '../../types/post';

interface PostFilterProps {
  currentFilter: PostFilter;
  onFilterChange: (filter: PostFilter) => void;
}

export default function PostFilter({ currentFilter, onFilterChange }: PostFilterProps) {
  const filters: PostFilter[] = ['all', 'club', 'challenge', 'training'];

  return (
    <div className="flex space-x-2 overflow-x-auto pb-2">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
            currentFilter === filter
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}