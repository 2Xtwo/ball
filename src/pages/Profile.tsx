import { useState } from 'react';
import { User } from '../types/auth';
import { ProfileStats, Badge } from '../types/profile';
import ProfileHeader from '../components/profile/ProfileHeader';
import StatsAndAchievements from '../components/dashboard/StatsAndAchievements';
import EditProfileModal from '../components/profile/EditProfileModal';
import { useAuthStore } from '../lib/store/authStore';

const mockStats: ProfileStats = {
  totalMatches: 48,
  goalsScored: 32,
  assists: 15,
  trainingHours: 120,
  badges: [
    {
      id: '1',
      name: 'Goal Machine',
      description: 'Score 30 goals in matches',
      icon: 'https://placehold.co/50x50/png?text=🎯',
      earnedAt: '2024-02-15',
      rarity: 'epic',
    },
    {
      id: '2',
      name: 'Team Player',
      description: 'Achieve 10 assists',
      icon: 'https://placehold.co/50x50/png?text=🤝',
      earnedAt: '2024-02-10',
      rarity: 'rare',
    },
    {
      id: '3',
      name: 'Training Champion',
      description: 'Complete 100 training sessions',
      icon: 'https://placehold.co/50x50/png?text=🏆',
      earnedAt: '2024-02-01',
      rarity: 'legendary',
    },
  ],
};

export default function Profile() {
  const { user, updateUser } = useAuthStore();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [stats, setStats] = useState({
    totalMatches: mockStats.totalMatches,
    goals: mockStats.goalsScored,
    assists: mockStats.assists,
    trainingHours: mockStats.trainingHours,
  });

  if (!user) return null;

  const handleUpdateProfile = (updatedUser: Partial<User>) => {
    updateUser(updatedUser);
  };

  const handleUpdateStats = (newStats: typeof stats) => {
    setStats(newStats);
    // In a real app, you would make an API call here
    console.log('Updating stats:', newStats);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <ProfileHeader 
        user={user} 
        onEdit={() => setIsEditModalOpen(true)} 
      />

      <StatsAndAchievements
        initialStats={stats}
        badges={mockStats.badges}
        onUpdateStats={handleUpdateStats}
      />

      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        user={user}
        onSave={handleUpdateProfile}
      />
    </div>
  );
}