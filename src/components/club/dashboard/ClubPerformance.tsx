import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format, subDays } from 'date-fns';

const generateMockData = () => {
  return Array.from({ length: 30 }, (_, i) => ({
    date: format(subDays(new Date(), 29 - i), 'MMM dd'),
    trialsCompleted: Math.floor(Math.random() * 10),
    playersRecruited: Math.floor(Math.random() * 3),
  }));
};

export default function ClubPerformance() {
  const data = generateMockData();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Total Trials</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">156</p>
          <p className="mt-1 text-sm text-green-600">↑ 12% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Players Recruited</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">23</p>
          <p className="mt-1 text-sm text-green-600">↑ 8% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Success Rate</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">14.7%</p>
          <p className="mt-1 text-sm text-green-600">↑ 2% from last month</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Recruitment Activity</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="trialsCompleted" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3D195B" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3D195B" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="playersRecruited" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF2882" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#FF2882" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="trialsCompleted"
                stroke="#3D195B"
                fillOpacity={1}
                fill="url(#trialsCompleted)"
                name="Trials Completed"
              />
              <Area
                type="monotone"
                dataKey="playersRecruited"
                stroke="#FF2882"
                fillOpacity={1}
                fill="url(#playersRecruited)"
                name="Players Recruited"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}