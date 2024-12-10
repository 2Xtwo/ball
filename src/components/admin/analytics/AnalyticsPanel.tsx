import { useState } from 'react';
import { Tab } from '@headlessui/react';
import PlayerAnalytics from './PlayerAnalytics';
import SystemUsage from './SystemUsage';
import RecruitmentMetrics from './RecruitmentMetrics';
import DateRangeSelector from './DateRangeSelector';

export default function AnalyticsPanel() {
  const [dateRange, setDateRange] = useState<'week' | 'month' | 'year'>('month');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">Analytics Dashboard</h2>
        <DateRangeSelector
          selected={dateRange}
          onChange={setDateRange}
        />
      </div>

      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-premier-purple/10 p-1">
          {['Player Analytics', 'System Usage', 'Recruitment Metrics'].map((tab) => (
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
        <Tab.Panels className="mt-4">
          <Tab.Panel>
            <PlayerAnalytics dateRange={dateRange} />
          </Tab.Panel>
          <Tab.Panel>
            <SystemUsage dateRange={dateRange} />
          </Tab.Panel>
          <Tab.Panel>
            <RecruitmentMetrics dateRange={dateRange} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}