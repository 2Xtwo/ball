import { PlayIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { TrainingModule } from '../../types/training';

interface ModuleCardProps {
  module: TrainingModule;
  onStart: () => void;
}

export default function ModuleCard({ module, onStart }: ModuleCardProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="relative">
        <img
          src={module.thumbnail}
          alt={module.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <button
          onClick={onStart}
          className="absolute bottom-4 right-4 flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <PlayIcon className="h-5 w-5" />
          <span>{module.completed ? 'Review' : 'Start Training'}</span>
        </button>
        {module.completed && (
          <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
            <CheckCircleIcon className="h-4 w-4 mr-1" />
            Completed
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            module.level === 'beginner' ? 'bg-green-100 text-green-800' :
            module.level === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {module.level.charAt(0).toUpperCase() + module.level.slice(1)}
          </span>
          <div className="flex items-center text-gray-500">
            <ClockIcon className="h-4 w-4 mr-1" />
            <span>{module.duration} min</span>
          </div>
        </div>
        
        <h3 className="font-semibold text-lg mb-2">{module.title}</h3>
        <p className="text-gray-600 text-sm">{module.description}</p>
        
        {!module.completed && module.progress > 0 && (
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Progress</span>
              <span className="text-indigo-600 font-medium">{module.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full transition-all"
                style={{ width: `${module.progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}