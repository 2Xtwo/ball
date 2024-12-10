import { useState } from 'react';
import UserList from './UserList';
import UserFilters from './UserFilters';
import { User } from '../../../types/auth';
import { mockUsers } from '../../../data/mockUsers';

export default function UserManagement() {
  const [users] = useState<User[]>(mockUsers);
  const [selectedRole, setSelectedRole] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = users.filter(user => {
    const roleMatch = selectedRole === 'all' || user.role === selectedRole;
    const searchMatch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       user.email.toLowerCase().includes(searchQuery.toLowerCase());
    return roleMatch && searchMatch;
  });

  const handleUpdateUser = (userId: string, updates: Partial<User>) => {
    console.log('Updating user:', userId, updates);
    // Implement user update logic
  };

  const handleDeleteUser = (userId: string) => {
    console.log('Deleting user:', userId);
    // Implement user deletion logic
  };

  const handleSuspendUser = (userId: string) => {
    console.log('Suspending user:', userId);
    // Implement user suspension logic
  };

  return (
    <div className="space-y-6">
      <UserFilters
        selectedRole={selectedRole}
        onRoleChange={setSelectedRole}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <UserList
        users={filteredUsers}
        onUpdateUser={handleUpdateUser}
        onDeleteUser={handleDeleteUser}
        onSuspendUser={handleSuspendUser}
      />
    </div>
  );
}