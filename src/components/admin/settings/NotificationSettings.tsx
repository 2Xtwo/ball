import { useState } from 'react';

interface NotificationSetting {
  id: string;
  type: string;
  email: boolean;
  inApp: boolean;
  push: boolean;
}

export default function NotificationSettings() {
  const [settings, setSettings] = useState<NotificationSetting[]>([
    {
      id: '1',
      type: 'New User Registration',
      email: true,
      inApp: true,
      push: false,
    },
    {
      id: '2',
      type: 'Content Moderation',
      email: true,
      inApp: true,
      push: true,
    },
    {
      id: '3',
      type: 'System Alerts',
      email: true,
      inApp: true,
      push: true,
    },
  ]);

  const handleToggle = (id: string, channel: 'email' | 'inApp' | 'push') => {
    setSettings(settings.map(setting => {
      if (setting.id === id) {
        return { ...setting, [channel]: !setting[channel] };
      }
      return setting;
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-6">Notification Settings</h2>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="text-left text-sm font-medium text-gray-500">Event Type</th>
              <th className="text-center text-sm font-medium text-gray-500">Email</th>
              <th className="text-center text-sm font-medium text-gray-500">In-App</th>
              <th className="text-center text-sm font-medium text-gray-500">Push</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {settings.map((setting) => (
              <tr key={setting.id}>
                <td className="py-4 text-sm text-gray-900">{setting.type}</td>
                <td className="py-4 text-center">
                  <input
                    type="checkbox"
                    checked={setting.email}
                    onChange={() => handleToggle(setting.id, 'email')}
                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </td>
                <td className="py-4 text-center">
                  <input
                    type="checkbox"
                    checked={setting.inApp}
                    onChange={() => handleToggle(setting.id, 'inApp')}
                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </td>
                <td className="py-4 text-center">
                  <input
                    type="checkbox"
                    checked={setting.push}
                    onChange={() => handleToggle(setting.id, 'push')}
                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}