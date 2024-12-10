interface VerificationRequest {
  id: string;
  type: 'player' | 'club' | 'scout';
  name: string;
  submittedAt: string;
}

export default function VerificationQueue() {
  const requests: VerificationRequest[] = [
    {
      id: '1',
      type: 'player',
      name: 'Alan Njenga',
      submittedAt: new Date().toISOString(),
    },
    {
      id: '2',
      type: 'club',
      name: 'Kariobangi Sharks',
      submittedAt: new Date(Date.now() - 3600000).toISOString(),
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Pending Verifications</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {requests.map((request) => (
          <div key={request.id} className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-900">{request.name}</p>
                <p className="text-sm text-gray-500">Type: {request.type}</p>
              </div>
              <button className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm">
                Review
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}