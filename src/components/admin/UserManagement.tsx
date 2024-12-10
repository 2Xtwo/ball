import { useState } from 'react';
import { User, UserRole } from '../../types/auth';
import { useAuthorization } from '../../lib/store/authStore';

interface UserManagementProps {
  users: User[];
  onUpdateUser: (userId: string, updates: Partial<User>) => void;
  onDeleteUser: (userId: string) => void;
  onSuspendUser: (userId: string) => void;
}

export default function UserManagement({ 
  users, 
  onUpdateUser, 
  onDeleteUser,
  onSuspendUser 
}: UserManagementProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole | 'all'>('all');
  const { isAdmin } = useAuthorization();

  const filteredUsers = users.filter(
    user => selectedRole === 'all' || user.role === selectedRole
  );

  if (!isAdmin()) {
    return <div>Unauthorized access</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
        <div className="flex space-x-2">
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value as UserRole | 'all')}
            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="all">All Roles</option>
            <option value="player">Players</option>
            <option value="assessor">Assessors</option>
            <option value="admin">Admins</option>
          </select>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden rounded-md">
        <ul className="divide-y divide-gray-200">
          {filteredUsers.map((user) => (
            <li key={user.id} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={user.profileImage || 'https://placehold.co/40x40/png?text=User'}
                    alt=""
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    user.role === 'admin' ? 'bg-red-100 text-red-800' :
                    user.role === 'assessor' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {user.role}
                  </span>
                  <button
                    onClick={() => onSuspendUser(user.id)}
                    className="text-sm text-red-600 hover:text-red-900"
                  >
                    Suspend
                  </button>
                  <button
                    onClick={() => onDeleteUser(user.id)}
                    className="text-sm text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}