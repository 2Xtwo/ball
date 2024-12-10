import { PlayerProfile } from '../../types/proPlayer';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

interface ProfileHeaderProps {
  profile: PlayerProfile;
}

export default function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center space-x-6">
        <div className="relative">
          <img
            src={profile.profilePicture}
            alt={profile.fullName}
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-100"
          />
          {profile.verified && (
            <CheckBadgeIcon 
              className="absolute bottom-0 right-0 h-8 w-8 text-blue-500 bg-white rounded-full"
            />
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center space-x-3">
            <h1 className="text-3xl font-bold text-gray-900">{profile.fullName}</h1>
            <img
              src={profile.countryFlag}
              alt="Country flag"
              className="h-6 w-8 rounded shadow"
            />
          </div>
          
          <div className="mt-2 space-y-1 text-gray-600">
            <p className="flex items-center">
              <span className="font-medium">Position:</span>
              <span className="ml-2">{profile.position}</span>
            </p>
            <p className="flex items-center">
              <span className="font-medium">Club:</span>
              <span className="ml-2">{profile.club}</span>
            </p>
            {profile.nationalTeam && (
              <p className="flex items-center">
                <span className="font-medium">National Team:</span>
                <span className="ml-2">{profile.nationalTeam}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}