import { ClubAffiliation } from '../../types/proPlayer';
import { format } from 'date-fns';

interface ClubAffiliationsProps {
  affiliations: ClubAffiliation[];
}

export default function ClubAffiliations({ affiliations }: ClubAffiliationsProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Club History</h2>
      <div className="space-y-4">
        {affiliations.map((affiliation) => (
          <div
            key={affiliation.id}
            className="flex items-center space-x-4 p-4 border rounded-lg hover:shadow-md transition-shadow"
          >
            <img
              src={affiliation.logo}
              alt={affiliation.name}
              className="w-16 h-16 object-contain"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">{affiliation.name}</h3>
                {affiliation.current && (
                  <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                    Current
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600">
                {format(new Date(affiliation.startDate), 'MMM yyyy')} -{' '}
                {affiliation.endDate
                  ? format(new Date(affiliation.endDate), 'MMM yyyy')
                  : 'Present'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}