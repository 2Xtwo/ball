import { useState } from 'react';

export default function SecuritySettings() {
  const [settings, setSettings] = useState({
    twoFactorAuth: true,
    passwordMinLength: 8,
    passwordRequireSpecial: true,
    sessionTimeout: 30,
    maxLoginAttempts: 5,
    ipWhitelist: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement security settings update logic
    console.log('Updating security settings:', settings);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-6">Security Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="twoFactorAuth"
            checked={settings.twoFactorAuth}
            onChange={(e) => setSettings({ ...settings, twoFactorAuth: e.target.checked })}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label htmlFor="twoFactorAuth" className="text-sm font-medium text-gray-700">
            Require Two-Factor Authentication for Admin Access
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Minimum Password Length
          </label>
          <input
            type="number"
            value={settings.passwordMinLength}
            onChange={(e) => setSettings({ ...settings, passwordMinLength: parseInt(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="passwordRequireSpecial"
            checked={settings.passwordRequireSpecial}
            onChange={(e) => setSettings({ ...settings, passwordRequireSpecial: e.target.checked })}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label htmlFor="passwordRequireSpecial" className="text-sm font-medium text-gray-700">
            Require Special Characters in Passwords
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Session Timeout (minutes)
          </label>
          <input
            type="number"
            value={settings.sessionTimeout}
            onChange={(e) => setSettings({ ...settings, sessionTimeout: parseInt(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Maximum Login Attempts
          </label>
          <input
            type="number"
            value={settings.maxLoginAttempts}
            onChange={(e) => setSettings({ ...settings, maxLoginAttempts: parseInt(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            IP Whitelist (one per line)
          </label>
          <textarea
            value={settings.ipWhitelist}
            onChange={(e) => setSettings({ ...settings, ipWhitelist: e.target.value })}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter IP addresses..."
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Save Security Settings
          </button>
        </div>
      </form>
    </div>
  );
}