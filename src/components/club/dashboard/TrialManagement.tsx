import { useState } from 'react';
import { format } from 'date-fns';

interface Trial {
  id: string;
  playerName: string;
  playerAvatar: string;
  date: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  position: string;
  rating?: number;
  notes?: string;
}

export default function TrialManagement() {
  const [trials] = useState<Trial[]>([
    {
      id: '1',
      playerName: 'Alan Njenga',
      playerAvatar: 'https://placehold.co/100x100/png?text=AN',
      date: '2024-03-15T10:00:00Z',
      status: 'scheduled',
      position: 'Forward',
    },
    {
      id: '2',
      playerName: 'John Smith',
      playerAvatar: 'https://placehold.co/100x100/png?text=JS',
      date: '2024-03-10T14:00:00Z',
      status: 'completed',
      position: 'Midfielder',
      rating: 85,
      notes: 'Excellent technical skills, good vision',
    },
  ]);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Upcoming Trials</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {trials.map((trial) => (
            <div key={trial.id} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={trial.playerAvatar}
                    alt={trial.playerName}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{trial.playerName}</p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span>{trial.position}</span>
                      <span>•</span>
                      <span>{format(new Date(trial.date), 'MMM d, HH:mm')}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      trial.status === 'scheduled'
                        ? 'bg-blue-100 text-blue-800'
                        : trial.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {trial.status.charAt(0).toUpperCase() + trial.status.slice(1)}
                  </span>
                  {trial.status === 'scheduled' && (
                    <button
                      className="px-3 py-1 text-sm font-medium text-indigo-600 hover:text-indigo-900"
                      onClick={() => console.log('Manage trial:', trial.id)}
                    >
                      Manage
                    </button>
                  )}
                </div>
              </div>
              {trial.status === 'completed' && (
                <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Trial Rating</p>
                      <p className="text-2xl font-bold text-indigo-600">{trial.rating}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">Notes</p>
                      <p className="text-sm text-gray-600">{trial.notes}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}