import { useState } from 'react';
import { HeartIcon, ChatBubbleLeftIcon, ShareIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { Post } from '../../types/post';
import { formatDistanceToNow } from 'date-fns';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 space-y-4">
      <div className="flex items-center space-x-3">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="h-10 w-10 rounded-full"
        />
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
            <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
              {post.author.role}
            </span>
          </div>
          <p className="text-sm text-gray-500">
            {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
          </p>
        </div>
      </div>

      <p className="text-gray-800">{post.content}</p>

      {post.image && (
        <img
          src={post.image}
          alt="Post content"
          className="rounded-lg w-full object-cover max-h-96"
        />
      )}

      <div className="flex items-center justify-between pt-4 border-t">
        <button
          onClick={handleLike}
          className="flex items-center space-x-2 text-gray-500 hover:text-indigo-600"
        >
          {isLiked ? (
            <HeartIconSolid className="h-5 w-5 text-red-500" />
          ) : (
            <HeartIcon className="h-5 w-5" />
          )}
          <span>{likesCount}</span>
        </button>

        <button className="flex items-center space-x-2 text-gray-500 hover:text-indigo-600">
          <ChatBubbleLeftIcon className="h-5 w-5" />
          <span>{post.comments}</span>
        </button>

        <button className="flex items-center space-x-2 text-gray-500 hover:text-indigo-600">
          <ShareIcon className="h-5 w-5" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
}