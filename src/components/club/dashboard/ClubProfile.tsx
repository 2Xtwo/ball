import { Club } from '../../../types/auth';
import { format } from 'date-fns';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

interface ClubProfileProps {
  club: Club;
}

export default function ClubProfile({ club }: ClubProfileProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-6">
        <div className="relative">
          <img
            src={club.clubInfo.crest}
            alt={club.clubInfo.name}
            className="w-32 h-32 object-contain"
          />
          {club.isVerified && (
            <CheckBadgeIcon className="absolute -bottom-2 -right-2 h-8 w-8 text-blue-500 bg-white rounded-full" />
          )}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{club.clubInfo.name}</h2>
          <p className="text-gray-600">{club.clubInfo.league}</p>
          <div className="mt-2 space-y-1 text-sm text-gray-500">
            <p>Founded: {club.clubInfo.founded}</p>
            <p>Country: {club.clubInfo.country}</p>
            <p>Website: <a href={club.clubInfo.website} className="text-indigo-600 hover:text-indigo-900">{club.clubInfo.website}</a></p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Licenses & Certifications</h3>
        <div className="space-y-4">
          {club.licenses.map((license) => (
            <div key={license.id} className="flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-900">{license.name}</p>
                <p className="text-sm text-gray-500">Issued by: {license.issuedBy}</p>
                <p className="text-sm text-gray-500">License #: {license.licenseNumber}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">
                  Expires: {format(new Date(license.expiryDate), 'MMM d, yyyy')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}