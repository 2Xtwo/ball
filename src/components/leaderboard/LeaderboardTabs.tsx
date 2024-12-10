import { Tab } from '@headlessui/react';
import { clsx } from 'clsx';
import { LeaderboardScope } from '../../types/leaderboard';

interface LeaderboardTabsProps {
  currentScope: LeaderboardScope;
  onScopeChange: (scope: LeaderboardScope) => void;
}

export default function LeaderboardTabs({ currentScope, onScopeChange }: LeaderboardTabsProps) {
  const scopes: { key: LeaderboardScope; label: string }[] = [
    { key: 'global', label: 'Global' },
    { key: 'regional', label: 'Regional' },
    { key: 'national', label: 'National' },
  ];

  return (
    <Tab.Group onChange={(index) => onScopeChange(scopes[index].key)}>
      <Tab.List className="flex space-x-1 rounded-xl bg-premier-purple/10 p-1">
        {scopes.map((scope) => (
          <Tab
            key={scope.key}
            className={({ selected }) =>
              clsx(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-premier-purple focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white text-premier-purple shadow'
                  : 'text-premier-purple hover:bg-white/[0.12] hover:text-premier-purple'
              )
            }
          >
            {scope.label}
          </Tab>
        ))}
      </Tab.List>
    </Tab.Group>
  );
}