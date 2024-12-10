import { useState } from 'react';
import { Tab } from '@headlessui/react';
import PendingContent from './PendingContent';
import ReportedContent from './ReportedContent';
import ContentFilters from './ContentFilters';

export default function ContentModeration() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  return (
    <div className="space-y-6">
      <ContentFilters
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />

      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-premier-purple/10 p-1">
          <Tab
            className={({ selected }) =>
              `w-full rounded-lg py-2.5 text-sm font-medium leading-5
              ${
                selected
                  ? 'bg-white text-premier-purple shadow'
                  : 'text-premier-purple hover:bg-white/[0.12] hover:text-premier-purple'
              }`
            }
          >
            Pending Review
          </Tab>
          <Tab
            className={({ selected }) =>
              `w-full rounded-lg py-2.5 text-sm font-medium leading-5
              ${
                selected
                  ? 'bg-white text-premier-purple shadow'
                  : 'text-premier-purple hover:bg-white/[0.12] hover:text-premier-purple'
              }`
            }
          >
            Reported Content
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <PendingContent filter={selectedFilter} />
          </Tab.Panel>
          <Tab.Panel>
            <ReportedContent filter={selectedFilter} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}