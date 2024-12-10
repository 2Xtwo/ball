import { Category } from '../../types/training';

interface CategoryCardProps {
  category: Category;
  isSelected: boolean;
  onClick: () => void;
}

export default function CategoryCard({ category, isSelected, onClick }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-4 rounded-lg text-left transition-all ${
        isSelected
          ? 'bg-indigo-50 border-2 border-indigo-500'
          : 'bg-white border border-gray-200 hover:border-indigo-200'
      }`}
    >
      <div className="flex items-center space-x-3">
        <img
          src={category.icon}
          alt={category.name}
          className="w-12 h-12 rounded-lg object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{category.name}</h3>
          <p className="text-sm text-gray-500">{category.moduleCount} modules</p>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-600">{category.description}</p>
    </button>
  );
}