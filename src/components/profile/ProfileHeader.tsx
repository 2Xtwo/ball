import { useState } from 'react';
import { User } from '../../types/auth';
import { PencilIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface ProfileHeaderProps {
  user: User;
  onUpdateProfile: (updatedUser: Partial<User>) => void;
}

export default function ProfileHeader({ user, onUpdateProfile }: ProfileHeaderProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: user.name,
    position: user.position || '',
    club: user.club || '',
    age: user.age || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile(editForm);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm({
      name: user.name,
      position: user.position || '',
      club: user.club || '',
      age: user.age || '',
    });
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={user.profileImage || 'https://placehold.co/200x200/png?text=Profile'}
            alt={user.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-indigo-100"
          />
          {!isEditing ? (
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
              <div className="mt-1 text-gray-600">
                {user.position && <p>{user.position}</p>}
                {user.club && <p>{user.club}</p>}
                {user.age && <p>{user.age} years old</p>}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                value={editForm.name}
                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Name"
                required
              />
              <input
                type="text"
                value={editForm.position}
                onChange={(e) => setEditForm({ ...editForm, position: e.target.value })}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Position"
              />
              <input
                type="text"
                value={editForm.club}
                onChange={(e) => setEditForm({ ...editForm, club: e.target.value })}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Club"
              />
              <input
                type="number"
                value={editForm.age}
                onChange={(e) => setEditForm({ ...editForm, age: e.target.value })}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Age"
              />
            </form>
          )}
        </div>
        <div className="flex space-x-2">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <PencilIcon className="h-4 w-4 mr-2" />
              Edit Profile
            </button>
          ) : (
            <>
              <button
                onClick={handleSubmit}
                className="inline-flex items-center px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <CheckIcon className="h-4 w-4 mr-2" />
                Save
              </button>
              <button
                onClick={handleCancel}
                className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <XMarkIcon className="h-4 w-4 mr-2" />
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}