import { Assessor } from '../../types/auth';
import { format } from 'date-fns';

interface AssessorProfileProps {
  assessor: Assessor;
}

export default function AssessorProfile({ assessor }: AssessorProfileProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center space-x-6">
          <img
            src={assessor.profileImage || 'https://placehold.co/200x200/png?text=Assessor'}
            alt={assessor.name}
            className="w-32 h-32 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{assessor.name}</h1>
            <p className="text-gray-600">Professional Football Assessor</p>
            <div className="mt-2 flex items-center space-x-4">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                {assessor.totalAssessments} Assessments
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                Rating: {assessor.rating}/5
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Licenses & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {assessor.licenses.map((license) => (
            <div key={license.id} className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">{license.name}</h3>
              <p className="text-sm text-gray-600">Issued by: {license.issuedBy}</p>
              <div className="mt-2 flex justify-between text-sm text-gray-500">
                <span>License #: {license.licenseNumber}</span>
                <span>Expires: {format(new Date(license.expiryDate), 'MMM yyyy')}</span>
              </div>
              {license.verificationUrl && (
                <a
                  href={license.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-sm text-indigo-600 hover:text-indigo-900"
                >
                  Verify License
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {assessor.achievements.map((achievement) => (
            <div key={achievement.id} className="border rounded-lg p-4 text-center">
              <img
                src={achievement.icon}
                alt=""
                className="w-12 h-12 mx-auto mb-2"
              />
              <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
              <p className="text-sm text-gray-600">{achievement.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                {format(new Date(achievement.date), 'MMM yyyy')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}