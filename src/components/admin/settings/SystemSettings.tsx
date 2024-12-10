import { useState } from 'react';
import { Tab } from '@headlessui/react';
import GeneralSettings from './GeneralSettings';
import RoleManagement from './RoleManagement';
import NotificationSettings from './NotificationSettings';
import SecuritySettings from './SecuritySettings';

export default function SystemSettings() {
  return (
    <div className="space-y-6">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-premier-purple/10 p-1">
          {['General', 'Roles', 'Notifications', 'Security'].map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                `w-full rounded-lg py-2.5 text-sm font-medium leading-5
                ${
                  selected
                    ? 'bg-white text-premier-purple shadow'
                    : 'text-premier-purple hover:bg-white/[0.12] hover:text-premier-purple'
                }`
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <GeneralSettings />
          </Tab.Panel>
          <Tab.Panel>
            <RoleManagement />
          </Tab.Panel>
          <Tab.Panel>
            <NotificationSettings />
          </Tab.Panel>
          <Tab.Panel>
            <SecuritySettings />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}