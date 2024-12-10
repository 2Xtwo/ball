import { format } from 'date-fns';

interface Activity {
  id: string;
  type: 'registration' | 'verification' | 'upload' | 'trial';
  description: string;
  timestamp: string;
}

export default function RecentActivityFeed() {
  const activities: Activity[] = [
    {
      id: '1',
      type: 'registration',
      description: 'New player registration: John Smith',
      timestamp: new Date().toISOString(),
    },
    {
      id: '2',
      type: 'verification',
      description: 'Profile verification request from Manchester United FC',
      timestamp: new Date(Date.now() - 3600000).toISOString(),
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Recent Activity</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {activities.map((activity) => (
          <div key={activity.id} className="p-4">
            <div className="flex justify-between">
              <p className="text-sm text-gray-900">{activity.description}</p>
              <span className="text-sm text-gray-500">
                {format(new Date(activity.timestamp), 'MMM d, HH:mm')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}