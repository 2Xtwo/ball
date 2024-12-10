import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format, subDays, eachDayOfInterval } from 'date-fns';

interface PlayerAnalyticsProps {
  dateRange: 'week' | 'month' | 'year';
}

export default function PlayerAnalytics({ dateRange }: PlayerAnalyticsProps) {
  const generateData = () => {
    const days = dateRange === 'week' ? 7 : dateRange === 'month' ? 30 : 365;
    const interval = {
      start: subDays(new Date(), days),
      end: new Date(),
    };

    return eachDayOfInterval(interval).map((date) => ({
      date: format(date, 'MMM dd'),
      activeUsers: Math.floor(Math.random() * 1000),
      newRegistrations: Math.floor(Math.random() * 100),
      clipUploads: Math.floor(Math.random() * 50),
    }));
  };

  const data = generateData();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Active Players</h3>
          <p className="text-2xl font-semibold text-gray-900">12,345</p>
          <span className="text-sm text-green-600">↑ 12% from last period</span>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">New Registrations</h3>
          <p className="text-2xl font-semibold text-gray-900">234</p>
          <span className="text-sm text-green-600">↑ 5% from last period</span>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Clip Uploads</h3>
          <p className="text-2xl font-semibold text-gray-900">567</p>
          <span className="text-sm text-green-600">↑ 8% from last period</span>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">Player Activity Trends</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="activeUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3D195B" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3D195B" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="activeUsers"
                stroke="#3D195B"
                fillOpacity={1}
                fill="url(#activeUsers)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}