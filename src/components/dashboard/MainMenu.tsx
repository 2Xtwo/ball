import { Link } from 'react-router-dom';
import {
  AcademicCapIcon,
  ChartBarIcon,
  TrophyIcon,
  UserGroupIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const menuItems = [
  {
    name: 'Training Modules',
    icon: AcademicCapIcon,
    href: '/training',
    color: 'bg-blue-500',
  },
  {
    name: 'Performance',
    icon: ChartBarIcon,
    href: '/performance',
    color: 'bg-green-500',
  },
  {
    name: 'Leaderboards',
    icon: TrophyIcon,
    href: '/leaderboards',
    color: 'bg-yellow-500',
  },
  {
    name: 'Community',
    icon: UserGroupIcon,
    href: '/community',
    color: 'bg-purple-500',
  },
  {
    name: 'Challenges',
    icon: SparklesIcon,
    href: '/challenges',
    color: 'bg-red-500',
  },
];

export default function MainMenu() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {menuItems.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
        >
          <div className={`${item.color} w-12 h-12 rounded-full flex items-center justify-center mb-3`}>
            <item.icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="font-semibold text-gray-900">{item.name}</h3>
        </Link>
      ))}
    </div>
  );
}