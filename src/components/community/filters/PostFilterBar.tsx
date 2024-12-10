import { PostFilter } from '../../../types/post';
import PostFilterButton from './PostFilterButton';

interface PostFilterBarProps {
  currentFilter: PostFilter;
  onFilterChange: (filter: PostFilter) => void;
}

export default function PostFilterBar({ currentFilter, onFilterChange }: PostFilterBarProps) {
  const filters: PostFilter[] = ['all', 'club', 'challenge', 'training'];

  return (
    <div className="flex space-x-2 overflow-x-auto pb-2">
      {filters.map((filter) => (
        <PostFilterButton
          key={filter}
          filter={filter}
          isActive={currentFilter === filter}
          onClick={() => onFilterChange(filter)}
        />
      ))}
    </div>
  );
}