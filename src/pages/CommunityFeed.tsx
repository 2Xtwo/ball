import { useState } from 'react';
import { Post, PostFilter } from '../types/post';
import PostCard from '../components/community/PostCard';
import PostFilterBar from '../components/community/filters/PostFilterBar';

const mockPosts: Post[] = [
  {
    id: '1',
    author: {
      id: '1',
      name: 'John Coach',
      avatar: 'https://placehold.co/100x100/png?text=JC',
      role: 'coach'
    },
    content: 'New training session on advanced dribbling techniques now available! Check it out in the training section.',
    type: 'insight',
    likes: 24,
    comments: 5,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '2',
    author: {
      id: '2',
      name: 'FC United',
      avatar: 'https://placehold.co/100x100/png?text=FCU',
      role: 'club'
    },
    content: 'Congratulations to our U-17 team for winning the regional championship! 🏆',
    type: 'announcement',
    likes: 156,
    comments: 23,
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    image: 'https://placehold.co/800x400/png?text=Championship+Photo'
  },
];

export default function CommunityFeed() {
  const [currentFilter, setCurrentFilter] = useState<PostFilter>('all');
  const [posts, setPosts] = useState<Post[]>(mockPosts);

  const filteredPosts = posts.filter(post => {
    if (currentFilter === 'all') return true;
    return post.type === currentFilter;
  });

  return (
    <div className="space-y-6 pb-16">
      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-gray-900">Community Feed</h1>
        <p className="text-gray-600">Stay updated with the latest from your football community</p>
      </div>

      <PostFilterBar
        currentFilter={currentFilter}
        onFilterChange={setCurrentFilter}
      />

      <div className="space-y-4">
        {filteredPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}