import { Scout } from '../../../types/auth';
import { format } from 'date-fns';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

interface ScoutProfileProps {
  scout: Scout;
}

export default function ScoutProfile({ scout }: ScoutProfileProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center space-x-6">
        <div className="relative">
          <img
            src={scout.profileImage || 'https://placehold.co/200x200/png?text=Scout'}
            alt={scout.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-100"
          />
          {scout.isVerified && (
            <CheckBadgeIcon className="absolute -bottom-2 -right-2 h-8 w-8 text-blue-500 bg-white rounded-full" />
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{scout.name}</h1>
              <p className="text-gray-600">{scout.scoutInfo.organization}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">License #: {scout.scoutInfo.licenseNumber}</p>
              <p className="text-sm text-gray-500">{scout.scoutInfo.experience} years experience</p>
            </div>
          </div>
          
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-500">Specializations</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {scout.scoutInfo.specialization.map((spec) => (
                <span
                  key={spec}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Active Licenses</h3>
        <div className="space-y-3">
          {scout.licenses.map((license) => (
            <div key={license.id} className="bg-gray-50 p-3 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">{license.name}</p>
                  <p className="text-sm text-gray-500">Issued by: {license.issuedBy}</p>
                </div>
                <div className="text-right text-sm text-gray-500">
                  <p>Expires: {format(new Date(license.expiryDate), 'MMM d, yyyy')}</p>
                  <p>#{license.licenseNumber}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}