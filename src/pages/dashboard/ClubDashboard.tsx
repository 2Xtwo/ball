import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { Club } from '../../types/auth';
import { mockUsers } from '../../data/mockUsers';
import ClubProfile from '../../components/club/dashboard/ClubProfile';
import PlayerRecruitment from '../../components/club/dashboard/PlayerRecruitment';
import TrialManagement from '../../components/club/dashboard/TrialManagement';
import ClubPerformance from '../../components/club/dashboard/ClubPerformance';
import CommunicationHub from '../../components/club/dashboard/CommunicationHub';
import TeamUpdates from '../../components/club/dashboard/TeamUpdates';

export default function ClubDashboard() {
  const [selectedTab, setSelectedTab] = useState(0);
  const clubUser = mockUsers.find(user => user.role === 'club') as Club;

  if (!clubUser) return null;

  const tabs = [
    { name: 'Overview', component: ClubProfile },
    { name: 'Recruitment', component: PlayerRecruitment },
    { name: 'Trials', component: TrialManagement },
    { name: 'Performance', component: ClubPerformance },
    { name: 'Communication', component: CommunicationHub },
    { name: 'Updates', component: TeamUpdates },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-gray-900">Club Dashboard</h1>
        <p className="text-gray-600">Manage recruitment and player development</p>
      </div>

      <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
        <Tab.List className="flex space-x-1 bg-white p-1 rounded-lg shadow">
          {tabs.map((tab) => (
            <Tab
              key={tab.name}
              className={({ selected }) =>
                `w-full py-2.5 text-sm font-medium leading-5 rounded-lg
                ${
                  selected
                    ? 'bg-premier-purple text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              {tab.name}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="mt-4">
          {tabs.map((tab, idx) => (
            <Tab.Panel
              key={idx}
              className={
                'rounded-lg bg-white p-6 shadow ring-white ring-opacity-60 ring-offset-2 focus:outline-none'
              }
            >
              <tab.component club={clubUser} />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}