import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, ChartBarIcon, BellIcon, UserIcon } from '@heroicons/react/24/outline';
import { clsx } from 'clsx';

export default function BottomNavigation() {
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Progress', href: '/progress', icon: ChartBarIcon },
    { name: 'Notifications', href: '/notifications', icon: BellIcon },
    { name: 'Profile', href: '/profile', icon: UserIcon },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-around">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={clsx(
                'flex flex-col items-center py-2 px-3',
                location.pathname === item.href
                  ? 'text-indigo-600'
                  : 'text-gray-500 hover:text-indigo-600'
              )}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs mt-1">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}