import { format } from 'date-fns';
import { DrillCompletion } from '../../types/performance';

interface RecentDrillsProps {
  drills: DrillCompletion[];
}

export default function RecentDrills({ drills }: RecentDrillsProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold">Recent Drills</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {drills.map((drill) => (
          <div key={drill.id} className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium text-gray-900">{drill.name}</h4>
                <p className="text-sm text-gray-500">
                  {format(new Date(drill.completedAt), 'MMM d, yyyy')} • {drill.duration} min
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-indigo-600">{drill.score}%</p>
                <p className="text-sm text-gray-500">Score</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}