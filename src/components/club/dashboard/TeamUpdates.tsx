import { useState } from 'react';
import { format } from 'date-fns';

interface Update {
  id: string;
  title: string;
  content: string;
  type: 'announcement' | 'trial' | 'signing';
  timestamp: string;
}

export default function TeamUpdates() {
  const [updates] = useState<Update[]>([
    {
      id: '1',
      title: 'New Trial Session Scheduled',
      content: 'Upcoming trial session for U17 forwards on March 15th, 2024.',
      type: 'trial',
      timestamp: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'Player Signing Announcement',
      content: 'We are pleased to announce the signing of Alan Njenga to our U17 squad.',
      type: 'signing',
      timestamp: new Date(Date.now() - 86400000).toISOString(),
    },
  ]);

  const [newUpdate, setNewUpdate] = useState({
    title: '',
    content: '',
    type: 'announcement',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New update:', newUpdate);
    // Implement update creation logic
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Create Update</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={newUpdate.title}
              onChange={(e) => setNewUpdate({ ...newUpdate, title: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Content</label>
            <textarea
              value={newUpdate.content}
              onChange={(e) => setNewUpdate({ ...newUpdate, content: e.target.value })}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Type</label>
            <select
              value={newUpdate.type}
              onChange={(e) => setNewUpdate({ ...newUpdate, type: e.target.value as Update['type'] })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="announcement">Announcement</option>
              <option value="trial">Trial Update</option>
              <option value="signing">Player Signing</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Post Update
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Recent Updates</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {updates.map((update) => (
            <div key={update.id} className="p-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-medium text-gray-900">{update.title}</h3>
                <span className="text-sm text-gray-500">
                  {format(new Date(update.timestamp), 'MMM d, HH:mm')}
                </span>
              </div>
              <p className="mt-2 text-gray-600">{update.content}</p>
              <span
                className={`mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  update.type === 'announcement'
                    ? 'bg-blue-100 text-blue-800'
                    : update.type === 'trial'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-green-100 text-green-800'
                }`}
              >
                {update.type.charAt(0).toUpperCase() + update.type.slice(1)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}