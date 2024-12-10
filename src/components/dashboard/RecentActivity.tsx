import { BellIcon } from '@heroicons/react/24/outline';

const activities = [
  {
    id: '1',
    description: 'Goal in the 75th minute vs Arsenal U21',
    timestamp: '2024-02-20T15:30:00Z',
  },
  {
    id: '2',
    description: 'Match-winning assist vs Chelsea U21',
    timestamp: '2024-02-18T14:45:00Z',
  },
  {
    id: '3',
    description: 'Completed advanced shooting drill',
    timestamp: '2024-02-17T10:00:00Z',
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          <BellIcon className="h-6 w-6 text-gray-400" />
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {activities.map((activity) => (
          <div key={activity.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <div>
                <p className="font-medium">{activity.description}</p>
                <p className="text-sm text-gray-500">
                  {new Date(activity.timestamp).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}