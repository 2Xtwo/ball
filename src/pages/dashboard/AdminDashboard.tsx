import { useState } from 'react';
import { Tab } from '@headlessui/react';
import {
  AdminOverview,
  UserManagement,
  ContentModeration,
  AnalyticsPanel,
  SystemSettings,
} from '../../components/admin';

export default function AdminDashboard() {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    { name: 'Overview', component: AdminOverview },
    { name: 'Users', component: UserManagement },
    { name: 'Content', component: ContentModeration },
    { name: 'Analytics', component: AnalyticsPanel },
    { name: 'Settings', component: SystemSettings },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600">Manage users and monitor platform activity</p>
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
              <tab.component />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}