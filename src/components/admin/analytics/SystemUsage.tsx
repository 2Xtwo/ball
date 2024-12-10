import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format, subDays, eachDayOfInterval } from 'date-fns';

interface SystemUsageProps {
  dateRange: 'week' | 'month' | 'year';
}

export default function SystemUsage({ dateRange }: SystemUsageProps) {
  const generateData = () => {
    const days = dateRange === 'week' ? 7 : dateRange === 'month' ? 30 : 365;
    const interval = {
      start: subDays(new Date(), days),
      end: new Date(),
    };

    return eachDayOfInterval(interval).map((date) => ({
      date: format(date, 'MMM dd'),
      serverLoad: Math.floor(Math.random() * 100),
      responseTime: Math.floor(Math.random() * 200),
      errorRate: Math.random() * 2,
    }));
  };

  const data = generateData();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Average Response Time</h3>
          <p className="text-2xl font-semibold text-gray-900">45ms</p>
          <span className="text-sm text-green-600">↓ 15% from last period</span>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Error Rate</h3>
          <p className="text-2xl font-semibold text-gray-900">0.12%</p>
          <span className="text-sm text-green-600">↓ 25% from last period</span>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Server Load</h3>
          <p className="text-2xl font-semibold text-gray-900">65%</p>
          <span className="text-sm text-yellow-600">↑ 5% from last period</span>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">System Performance</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="serverLoad"
                stroke="#3D195B"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="responseTime"
                stroke="#FF2882"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}