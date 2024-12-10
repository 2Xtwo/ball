import { useState } from 'react';
import { UserRole } from '../../../types/auth';

interface Role {
  id: string;
  name: UserRole;
  permissions: string[];
}

export default function RoleManagement() {
  const [roles, setRoles] = useState<Role[]>([
    {
      id: '1',
      name: 'admin',
      permissions: ['all'],
    },
    {
      id: '2',
      name: 'player',
      permissions: ['view_profile', 'edit_profile', 'upload_content'],
    },
    {
      id: '3',
      name: 'scout',
      permissions: ['view_players', 'send_invitations'],
    },
  ]);

  const handlePermissionToggle = (roleId: string, permission: string) => {
    setRoles(roles.map(role => {
      if (role.id === roleId) {
        const permissions = role.permissions.includes(permission)
          ? role.permissions.filter(p => p !== permission)
          : [...role.permissions, permission];
        return { ...role, permissions };
      }
      return role;
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-6">Role Management</h2>
        <div className="space-y-6">
          {roles.map((role) => (
            <div key={role.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium capitalize">{role.name}</h3>
                <button className="text-sm text-indigo-600 hover:text-indigo-900">
                  Edit Role
                </button>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-700">Permissions</h4>
                <div className="grid grid-cols-2 gap-2">
                  {['view_profile', 'edit_profile', 'upload_content', 'view_players', 'send_invitations'].map((permission) => (
                    <label key={permission} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={role.permissions.includes(permission)}
                        onChange={() => handlePermissionToggle(role.id, permission)}
                        className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        disabled={role.permissions.includes('all')}
                      />
                      <span className="text-sm text-gray-700">{permission.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}