import { UsersIcon, ShieldCheckIcon, ChartBarIcon, BellIcon } from '@heroicons/react/24/outline';
import MetricsGrid from './MetricsGrid';
import RecentActivityFeed from './RecentActivityFeed';
import VerificationQueue from './VerificationQueue';
import SystemStatus from './SystemStatus';

export default function AdminOverview() {
  const stats = [
    { name: 'Total Users', value: '12,345', icon: UsersIcon },
    { name: 'Verified Players', value: '8,721', icon: ShieldCheckIcon },
    { name: 'Active Assessors', value: '234', icon: ChartBarIcon },
    { name: 'Pending Verifications', value: '56', icon: BellIcon },
  ];

  return (
    <div className="space-y-6">
      <MetricsGrid stats={stats} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivityFeed />
        <div className="space-y-6">
          <VerificationQueue />
          <SystemStatus />
        </div>
      </div>
    </div>
  );
}