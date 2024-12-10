import { useState } from 'react';
import { Category, TrainingModule, DifficultyLevel } from '../types/training';
import CategoryCard from '../components/training/CategoryCard';
import ModuleCard from '../components/training/ModuleCard';
import DifficultyFilter from '../components/training/DifficultyFilter';

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
    description: 'Learn essential ball control techniques for better possession',
    thumbnail: 'https://placehold.co/800x400/png?text=Ball+Control',
    duration: 20,
    level: 'beginner',
    category: '1',
    videoUrl: 'https://example.com/video1',
    completed: true,
    progress: 100,
    requiredSkills: [
      { skill: 'Dribbling', rating: 50, improvement: 0 },
      { skill: 'Ball Control', rating: 40, improvement: 0 },
    ],
  },
  {
    id: '2',
    title: 'Advanced Dribbling Techniques',
    description: 'Master complex dribbling moves for match situations',
    thumbnail: 'https://placehold.co/800x400/png?text=Dribbling',
    duration: 25,
    level: 'advanced',
    category: '1',
    videoUrl: 'https://example.com/video2',
    completed: false,
    progress: 60,
    requiredSkills: [
      { skill: 'Dribbling', rating: 75, improvement: 0 },
      { skill: 'Agility', rating: 70, improvement: 0 },
    ],
  },
  {
    id: '3',
    title: 'Tactical Positioning',
    description: 'Learn proper positioning for different game situations',
    thumbnail: 'https://placehold.co/800x400/png?text=Tactics',
    duration: 30,
    level: 'intermediate',
    category: '2',
    videoUrl: 'https://example.com/video3',
    completed: false,
    progress: 0,
    requiredSkills: [
      { skill: 'Game Reading', rating: 60, improvement: 0 },
      { skill: 'Positioning', rating: 55, improvement: 0 },
    ],
  },
];

export default function TrainingModules() {
  const [selectedCategory, setSelectedCategory] = useState<string>(mockCategories[0].id);
  const [selectedLevel, setSelectedLevel] = useState<DifficultyLevel | 'all'>('all');

  const filteredModules = mockModules.filter(module => {
    const categoryMatch = module.category === selectedCategory;
    const levelMatch = selectedLevel === 'all' || module.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  const handleStartModule = (moduleId: string) => {
    console.log('Starting module:', moduleId);
    // Implement module start logic
  };

  return (
    <div className="space-y-6 pb-16">
      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-gray-900">Training Modules</h1>
        <p className="text-gray-600">Choose your training program and start improving</p>
      </div>

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
            onStart={() => handleStartModule(module.id)}
          />
        ))}
      </div>
    </div>
  );
}