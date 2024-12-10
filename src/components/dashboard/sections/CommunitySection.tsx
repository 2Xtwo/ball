import { useState } from 'react';
import { Post, PostFilter } from '../../../types/post';
import PostCard from '../../community/PostCard';
import PostFilterBar from '../../community/filters/PostFilterBar';
import CommunityInteraction from '../CommunityInteraction';
import MessagingPanel from '../MessagingPanel';

export default function CommunitySection() {
  const [currentFilter, setCurrentFilter] = useState<PostFilter>('all');

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Community Feed</h2>
            <PostFilterBar
              currentFilter={currentFilter}
              onFilterChange={setCurrentFilter}
            />
          </div>
          <CommunityInteraction />
        </div>
        <div>
          <MessagingPanel />
        </div>
      </div>
    </div>
  );
}