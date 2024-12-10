import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  VideoCameraIcon,
  ChartBarIcon,
  TrophyIcon,
  UserGroupIcon,
  StarIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { clsx } from 'clsx';

const menuItems = [
  { name: 'Home', icon: HomeIcon, href: '/' },
  { name: 'Training', icon: VideoCameraIcon, href: '/training' },
  { name: 'Performance', icon: ChartBarIcon, href: '/performance' },
  { name: 'Leaderboards', icon: TrophyIcon, href: '/leaderboards' },
  { name: 'Community', icon: UserGroupIcon, href: '/community' },
  { name: 'Pro Player', icon: StarIcon, href: '/pro-player' },
  { name: 'Profile', icon: UserIcon, href: '/profile' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
      <div className="flex-1 flex flex-col min-h-0 bg-premier-purple">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <span className="text-2xl font-bold text-white">SparkoBall</span>
          </div>
          <nav className="mt-8 flex-1 px-2 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={clsx(
                  item.href === location.pathname
                    ? 'bg-premier-navy text-white'
                    : 'text-gray-300 hover:bg-premier-navy/50 hover:text-white',
                  'group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors'
                )}
              >
                <item.icon
                  className={clsx(
                    item.href === location.pathname
                      ? 'text-premier-pink'
                      : 'text-gray-400 group-hover:text-premier-pink',
                    'mr-3 flex-shrink-0 h-5 w-5'
                  )}
                />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}