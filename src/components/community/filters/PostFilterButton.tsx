import { PostFilter } from '../../../types/post';
import { clsx } from 'clsx';

interface PostFilterButtonProps {
  filter: PostFilter;
  isActive: boolean;
  onClick: () => void;
}

export default function PostFilterButton({ filter, isActive, onClick }: PostFilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap',
        isActive
          ? 'bg-indigo-600 text-white'
          : 'bg-white text-gray-700 hover:bg-gray-50'
      )}
    >
      {filter.charAt(0).toUpperCase() + filter.slice(1)}
    </button>
  );
}