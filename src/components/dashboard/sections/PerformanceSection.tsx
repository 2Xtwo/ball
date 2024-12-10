import {
  ChartBarIcon,
  DocumentArrowDownIcon,
  ShareIcon,
  TrophyIcon,
  UserGroupIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import PerformanceChart from '../../performance/PerformanceChart';
import StatCard from '../../performance/StatCard';
import { PerformanceStats } from '../../../types/performance';

const mockPerformanceData: PerformanceStats = {
  goals: 15,
  assists: 8,
  completedDrills: 42,
  averageScore: 85,
  totalTrainingTime: 840,
  weeklyProgress: Array.from({ length: 7 }, (_, i) => ({
    date: new Date(Date.now() - (6 - i) * 24 * 60 * 60 * 1000).toISOString(),
    value: 70 + Math.floor(Math.random() * 20),
  })),
  monthlyProgress: Array.from({ length: 30 }, (_, i) => ({
    date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString(),
    value: 65 + Math.floor(Math.random() * 25),
  })),
};

export default function PerformanceSection() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Performance Overview</h2>
        <div className="flex space-x-2">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <DocumentArrowDownIcon className="h-5 w-5 mr-2 text-gray-500" />
            Download Report
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <ShareIcon className="h-5 w-5 mr-2 text-gray-500" />
            Share Progress
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Goals"
          value={mockPerformanceData.goals}
          icon={<TrophyIcon className="h-6 w-6 text-indigo-600" />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Assists"
          value={mockPerformanceData.assists}
          icon={<UserGroupIcon className="h-6 w-6 text-indigo-600" />}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Match Rating"
          value={mockPerformanceData.averageScore}
          icon={<ChartBarIcon className="h-6 w-6 text-indigo-600" />}
          trend={{ value: 15, isPositive: true }}
        />
        <StatCard
          title="Training Time"
          value={`${mockPerformanceData.totalTrainingTime}m`}
          icon={<ClockIcon className="h-6 w-6 text-indigo-600" />}
          trend={{ value: 5, isPositive: true }}
        />
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Progress Chart</h3>
        <PerformanceChart
          data={mockPerformanceData.weeklyProgress}
          title="Weekly Performance"
        />
      </div>
    </div>
  );
}