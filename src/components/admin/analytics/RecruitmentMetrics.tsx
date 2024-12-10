import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format, subDays, eachDayOfInterval } from 'date-fns';

interface RecruitmentMetricsProps {
  dateRange: 'week' | 'month' | 'year';
}

export default function RecruitmentMetrics({ dateRange }: RecruitmentMetricsProps) {
  const generateData = () => {
    const days = dateRange === 'week' ? 7 : dateRange === 'month' ? 30 : 365;
    const interval = {
      start: subDays(new Date(), days),
      end: new Date(),
    };

    return eachDayOfInterval(interval).map((date) => ({
      date: format(date, 'MMM dd'),
      trialInvitations: Math.floor(Math.random() * 20),
      successfulTrials: Math.floor(Math.random() * 10),
      signings: Math.floor(Math.random() * 5),
    }));
  };

  const data = generateData();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Trial Invitations</h3>
          <p className="text-2xl font-semibold text-gray-900">156</p>
          <span className="text-sm text-green-600">↑ 23% from last period</span>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Successful Trials</h3>
          <p className="text-2xl font-semibold text-gray-900">89</p>
          <span className="text-sm text-green-600">↑ 15% from last period</span>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Player Signings</h3>
          <p className="text-2xl font-semibold text-gray-900">34</p>
          <span className="text-sm text-green-600">↑ 8% from last period</span>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">Recruitment Activity</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="trialInvitations" fill="#3D195B" />
              <Bar dataKey="successfulTrials" fill="#FF2882" />
              <Bar dataKey="signings" fill="#161F65" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}