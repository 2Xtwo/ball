import { Club } from '../../types/auth';
import { format } from 'date-fns';

interface ClubProfileProps {
  club: Club | undefined;
}

export default function ClubProfile({ club }: ClubProfileProps) {
  if (!club) return null;

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b">
        <div className="flex items-center space-x-4">
          <img
            src={club.clubInfo.crest}
            alt={club.clubInfo.name}
            className="w-24 h-24 object-contain"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{club.clubInfo.name}</h2>
            <p className="text-gray-600">{club.clubInfo.league}</p>
            <p className="text-sm text-gray-500">Founded: {club.clubInfo.founded}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Licenses & Certifications</h3>
        <div className="space-y-4">
          {club.licenses.map((license) => (
            <div key={license.id} className="border rounded-lg p-4">
              <h4 className="font-medium text-gray-900">{license.name}</h4>
              <p className="text-sm text-gray-600">Issued by: {license.issuedBy}</p>
              <div className="mt-2 flex justify-between text-sm text-gray-500">
                <span>License #: {license.licenseNumber}</span>
                <span>
                  Expires: {format(new Date(license.expiryDate), 'MMM yyyy')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}