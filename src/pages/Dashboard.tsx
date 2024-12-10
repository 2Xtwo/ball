import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChartBarIcon, 
  ClockIcon, 
  TrophyIcon, 
  UserGroupIcon,
  VideoCameraIcon,
  CalendarIcon,
  BellIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';

interface MatchStats {
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
}

interface RecentActivity {
  id: string;
  type: 'goal' | 'assist' | 'training';
  description: string;
  timestamp: string;
}

export default function Dashboard() {
  const [lastMatchStats] = useState<MatchStats>({
    goals: 2,
    assists: 1,
    yellowCards: 0,
    redCards: 0,
  });

  const [recentActivities] = useState<RecentActivity[]>([
    {
      id: '1',
      type: 'goal',
      description: 'Goal in the 75th minute vs Arsenal U21',
      timestamp: '2024-02-20T15:30:00Z',
    },
    {
      id: '2',
      type: 'assist',
      description: 'Match-winning assist vs Chelsea U21',
      timestamp: '2024-02-18T14:45:00Z',
    },
    {
      id: '3',
      type: 'training',
      description: 'Completed advanced shooting drill',
      timestamp: '2024-02-17T10:00:00Z',
    },
  ]);

  return (
    <div className="space-y-6">
      {/* Profile Summary */}
      <div className="bg-gradient-premier rounded-lg shadow-premier p-6 text-white">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <img
              src="https://placehold.co/120x120/png?text=Profile"
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-premier-gold"
            />
            <span className="absolute bottom-0 right-0 bg-premier-gold p-1 rounded-full">
              <CheckBadgeIcon className="h-6 w-6 text-premier-purple" />
            </span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold">John Smith</h1>
                <p className="text-gray-200">Forward • Manchester United U21</p>
                <div className="mt-2 flex items-center space-x-2">
                  <span className="px-2 py-1 bg-premier-navy rounded-full text-sm">
                    Rating: 85
                  </span>
                  <span className="px-2 py-1 bg-premier-navy rounded-full text-sm">
                    Level 12
                  </span>
                </div>
              </div>
              <button className="px-4 py-2 bg-premier-pink text-white rounded-lg hover:bg-opacity-90 transition-colors">
                Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Snapshot */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Goals</p>
              <p className="text-2xl font-bold">{lastMatchStats.goals}</p>
            </div>
            <div className="p-3 bg-premier-purple/10 rounded-full">
              <TrophyIcon className="h-6 w-6 text-premier-purple" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Assists</p>
              <p className="text-2xl font-bold">{lastMatchStats.assists}</p>
            </div>
            <div className="p-3 bg-premier-purple/10 rounded-full">
              <UserGroupIcon className="h-6 w-6 text-premier-purple" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Performance</p>
              <p className="text-2xl font-bold">8.5</p>
            </div>
            <div className="p-3 bg-premier-purple/10 rounded-full">
              <ChartBarIcon className="h-6 w-6 text-premier-purple" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Training Hours</p>
              <p className="text-2xl font-bold">24</p>
            </div>
            <div className="p-3 bg-premier-purple/10 rounded-full">
              <ClockIcon className="h-6 w-6 text-premier-purple" />
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow">
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Recent Highlights</h2>
              <Link
                to="/training"
                className="text-premier-purple hover:text-premier-pink"
              >
                View All
              </Link>
            </div>
          </div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer">
              <img
                src="https://placehold.co/800x450/png?text=Match+Highlight"
                alt="Highlight"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <VideoCameraIcon className="h-12 w-12 text-white" />
              </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer">
              <img
                src="https://placehold.co/800x450/png?text=Training+Highlight"
                alt="Highlight"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <VideoCameraIcon className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Upcoming Events</h2>
          </div>
          <div className="p-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-premier-purple/10 rounded-lg">
                <CalendarIcon className="h-6 w-6 text-premier-purple" />
              </div>
              <div>
                <p className="font-medium">Match vs Liverpool U21</p>
                <p className="text-sm text-gray-500">Tomorrow, 15:00</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-premier-purple/10 rounded-lg">
                <UserGroupIcon className="h-6 w-6 text-premier-purple" />
              </div>
              <div>
                <p className="font-medium">Team Training</p>
                <p className="text-sm text-gray-500">Wednesday, 10:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
            <BellIcon className="h-6 w-6 text-gray-400" />
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-premier-purple/10 rounded-lg">
                  {activity.type === 'goal' && <TrophyIcon className="h-5 w-5 text-premier-purple" />}
                  {activity.type === 'assist' && <UserGroupIcon className="h-5 w-5 text-premier-purple" />}
                  {activity.type === 'training' && <ClockIcon className="h-5 w-5 text-premier-purple" />}
                </div>
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
    </div>
  );
}