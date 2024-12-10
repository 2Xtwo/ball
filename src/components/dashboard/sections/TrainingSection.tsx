import { useState } from 'react';
import { Category, TrainingModule } from '../../../types/training';
import CategoryCard from '../../training/CategoryCard';
import ModuleCard from '../../training/ModuleCard';
import DifficultyFilter from '../../training/DifficultyFilter';

const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Technical Skills',
    description: 'Master essential football techniques',
    icon: 'https://placehold.co/100x100/png?text=⚽',
    moduleCount: 8,
  },
  {
    id: '2',
    name: 'Tactical Training',
    description: 'Learn game strategies and positioning',
    icon: 'https://placehold.co/100x100/png?text=📋',
    moduleCount: 6,
  },
  {
    id: '3',
    name: 'Physical Conditioning',
    description: 'Improve strength and endurance',
    icon: 'https://placehold.co/100x100/png?text=💪',
    moduleCount: 5,
  },
];

const mockModules: TrainingModule[] = [
  {
    id: '1',
    title: 'Ball Control Mastery',
    description: 'Learn essential ball control techniques',
    thumbnail: 'https://placehold.co/800x400/png?text=Ball+Control',
    duration: 20,
    level: 'beginner',
    category: '1',
    videoUrl: 'https://example.com/video1',
    completed: true,
    progress: 100,
    requiredSkills: [],
  },
  {
    id: '2',
    title: 'Advanced Dribbling',
    description: 'Master complex dribbling moves',
    thumbnail: 'https://placehold.co/800x400/png?text=Dribbling',
    duration: 25,
    level: 'advanced',
    category: '1',
    videoUrl: 'https://example.com/video2',
    completed: false,
    progress: 60,
    requiredSkills: [],
  },
];

export default function TrainingSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>(mockCategories[0].id);
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');

  const filteredModules = mockModules.filter(module => {
    const categoryMatch = module.category === selectedCategory;
    const levelMatch = selectedLevel === 'all' || module.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {mockCategories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            isSelected={category.id === selectedCategory}
            onClick={() => setSelectedCategory(category.id)}
          />
        ))}
      </div>

      <DifficultyFilter
        selectedLevel={selectedLevel}
        onSelectLevel={setSelectedLevel}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModules.map((module) => (
          <ModuleCard
            key={module.id}
            module={module}
            onStart={() => console.log('Starting module:', module.id)}
          />
        ))}
      </div>
    </div>
  );
}