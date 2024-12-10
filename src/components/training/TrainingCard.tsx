import { PlayIcon, ClockIcon, ChartBarIcon } from '@heroicons/react/24/outline';

interface TrainingCardProps {
  title: string;
  duration: string;
  level: string;
  thumbnail: string;
  onClick: () => void;
}

export default function TrainingCard({ title, duration, level, thumbnail, onClick }: TrainingCardProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="relative h-48">
        <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
        <button
          onClick={onClick}
          className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group hover:bg-opacity-50 transition-all"
        >
          <PlayIcon className="h-12 w-12 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center">
            <ClockIcon className="h-4 w-4 mr-1" />
            {duration}
          </div>
          <div className="flex items-center">
            <ChartBarIcon className="h-4 w-4 mr-1" />
            {level}
          </div>
        </div>
      </div>
    </div>
  );
}