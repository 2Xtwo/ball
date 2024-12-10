import { useState } from 'react';
import { Post } from '../../types/post';
import PostCard from '../community/PostCard';
import CreatePost from '../community/CreatePost';

export default function CommunityInteraction() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      author: {
        id: '1',
        name: 'Alan Njenga',
        avatar: 'https://placehold.co/100x100/png?text=AN',
        role: 'player'
      },
      content: 'Just completed my morning training session! 💪 Working on improving my ball control and finishing.',
      type: 'update',
      likes: 24,
      comments: 5,
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: '2',
      author: {
        id: '1',
        name: 'Alan Njenga',
        avatar: 'https://placehold.co/100x100/png?text=AN',
        role: 'player'
      },
      content: 'Great match yesterday with Kariobangi Sharks! Proud to have scored the winning goal! 🦈⚽',
      type: 'update',
      likes: 156,
      comments: 23,
      createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      image: 'https://placehold.co/800x400/png?text=Match+Highlight'
    },
  ]);

  const handleCreatePost = (content: string, image?: File) => {
    const newPost: Post = {
      id: Date.now().toString(),
      author: {
        id: '1',
        name: 'Alan Njenga',
        avatar: 'https://placehold.co/100x100/png?text=AN',
        role: 'player'
      },
      content,
      type: 'update',
      likes: 0,
      comments: 0,
      createdAt: new Date().toISOString(),
      image: image ? URL.createObjectURL(image) : undefined,
    };

    setPosts([newPost, ...posts]);
  };

  return (
    <div className="space-y-4">
      <CreatePost onPost={handleCreatePost} />
      
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}