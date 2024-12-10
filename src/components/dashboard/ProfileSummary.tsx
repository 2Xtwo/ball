import { User } from '../../types/auth';
import { CheckBadgeIcon, Cog6ToothIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../lib/store/authStore';

interface ProfileSummaryProps {
  user: User;
}

export default function ProfileSummary({ user }: ProfileSummaryProps) {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 rounded-lg shadow-lg p-6">
      <div className="flex justify-between">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-lg overflow-hidden border-4 border-white/20">
              <img
                src={user.profileImage || 'https://placehold.co/200x200/png?text=Profile'}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
            {user.isVerified && (
              <CheckBadgeIcon className="absolute -bottom-2 -right-2 h-8 w-8 text-blue-500 bg-white rounded-full" />
            )}
          </div>
          <div className="flex flex-col justify-between h-32">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-xl text-gray-800">{user.position} • {user.club}</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-lg font-bold">
                90 OVR
              </div>
              <div className="flex space-x-2">
                <div className="bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                  94 PAC
                </div>
                <div className="bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                  90 DRI
                </div>
                <div className="bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                  85 SHO
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <button 
            onClick={() => navigate('/profile')}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            title="Settings"
          >
            <Cog6ToothIcon className="h-6 w-6 text-gray-800" />
          </button>
          <button 
            onClick={handleLogout}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            title="Logout"
          >
            <ArrowRightOnRectangleIcon className="h-6 w-6 text-gray-800" />
          </button>
        </div>
      </div>
    </div>
  );
}