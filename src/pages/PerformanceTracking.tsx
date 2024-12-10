import { useState } from 'react';
import {
  ChartBarIcon,
  DocumentArrowDownIcon,
  ShareIcon,
  TrophyIcon,
  UserGroupIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import PerformanceChart from '../components/performance/PerformanceChart';
import StatCard from '../components/performance/StatCard';
import { PerformanceStats } from '../types/performance';

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

export default function PerformanceTracking() {
  const [timeRange, setTimeRange] = useState<'weekly' | 'monthly'>('weekly');

  const handleDownloadReport = () => {
    console.log('Downloading performance report...');
    // Implement report download logic
  };

  const handleShareProgress = () => {
    console.log('Sharing progress...');
    // Implement share progress logic
  };

  return (
    <div className="space-y-6 pb-16">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Performance Tracking</h1>
            <p className="text-gray-600">Monitor your match performance and progress</p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={handleDownloadReport}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <DocumentArrowDownIcon className="h-5 w-5 mr-2 text-gray-500" />
              Download Report
            </button>
            <button
              onClick={handleShareProgress}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <ShareIcon className="h-5 w-5 mr-2 text-gray-500" />
              Share Progress
            </button>
          </div>
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
          title="Minutes Played"
          value={`${mockPerformanceData.totalTrainingTime}`}
          icon={<ClockIcon className="h-6 w-6 text-indigo-600" />}
          trend={{ value: 5, isPositive: true }}
        />
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Performance Progress</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setTimeRange('weekly')}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                timeRange === 'weekly'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Weekly
            </button>
            <button
              onClick={() => setTimeRange('monthly')}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                timeRange === 'monthly'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Monthly
            </button>
          </div>
        </div>
        <PerformanceChart
          data={timeRange === 'weekly' ? mockPerformanceData.weeklyProgress : mockPerformanceData.monthlyProgress}
          title="Overall Performance"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Matches</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium">vs Arsenal U21</h3>
                <p className="text-sm text-gray-500">Premier League 2</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-green-600">2 Goals</p>
                <p className="text-sm text-gray-500">90 minutes played</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium">vs Chelsea U21</h3>
                <p className="text-sm text-gray-500">Premier League 2</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-green-600">1 Goal, 2 Assists</p>
                <p className="text-sm text-gray-500">85 minutes played</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium">vs Liverpool U21</h3>
                <p className="text-sm text-gray-500">Premier League 2</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-green-600">1 Assist</p>
                <p className="text-sm text-gray-500">75 minutes played</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Performance Highlights</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-indigo-600">Most Goals in a Match</h3>
                <span className="text-2xl font-bold">3</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">vs Arsenal U21 - Hat-trick</p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-indigo-600">Highest Match Rating</h3>
                <span className="text-2xl font-bold">9.5</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">vs Chelsea U21 - MOTM Performance</p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-indigo-600">Consecutive Matches Scored</h3>
                <span className="text-2xl font-bold">5</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">Current Goal Scoring Streak</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}