import { useState } from 'react';
import { User } from '../../types/auth';
import { mockUsers } from '../../data/mockUsers';
import ProfileSummary from '../../components/dashboard/ProfileSummary';
import QuickStats from '../../components/dashboard/QuickStats';
import HighlightsSection from '../../components/dashboard/HighlightsSection';
import UpcomingEvents from '../../components/dashboard/UpcomingEvents';
import RecentActivity from '../../components/dashboard/RecentActivity';
import TrainingSection from '../../components/dashboard/sections/TrainingSection';
import PerformanceSection from '../../components/dashboard/sections/PerformanceSection';
import LeaderboardSection from '../../components/dashboard/sections/LeaderboardSection';
import CommunitySection from '../../components/dashboard/sections/CommunitySection';
import ProPlayerSection from '../../components/dashboard/sections/ProPlayerSection';

export default function PlayerDashboard() {
  const [user] = useState<User | undefined>(
    mockUsers.find(user => user.role === 'player')
  );
  const [activeSection, setActiveSection] = useState<string>('overview');

  if (!user) return null;

  const renderSection = () => {
    switch (activeSection) {
      case 'training':
        return <TrainingSection />;
      case 'performance':
        return <PerformanceSection />;
      case 'leaderboards':
        return <LeaderboardSection />;
      case 'community':
        return <CommunitySection />;
      case 'proplayer':
        return <ProPlayerSection />;
      default:
        return (
          <>
            <QuickStats />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <HighlightsSection />
              </div>
              <div>
                <UpcomingEvents />
              </div>
            </div>
            <RecentActivity />
          </>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <ProfileSummary user={user} />
      
      {/* Navigation */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between">
            {[
              { id: 'overview', name: 'Overview' },
              { id: 'training', name: 'Training' },
              { id: 'performance', name: 'Performance' },
              { id: 'leaderboards', name: 'Leaderboards' },
              { id: 'community', name: 'Community' },
              { id: 'proplayer', name: 'Pro Player' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 ${
                  activeSection === item.id
                    ? 'border-premier-purple text-premier-purple'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {renderSection()}
    </div>
  );
}