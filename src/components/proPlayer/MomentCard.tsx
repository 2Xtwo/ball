import { useState } from 'react';
import { format } from 'date-fns';
import { HeartIcon, ChatBubbleLeftIcon, PlayIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { PlayerMoment } from '../../types/proPlayer';

interface MomentCardProps {
  moment: PlayerMoment;
  onPlay: () => void;
}

export default function MomentCard({ moment, onPlay }: MomentCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(moment.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={moment.thumbnail}
          alt={moment.title}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={onPlay}
          className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors group"
        >
          <PlayIcon className="h-16 w-16 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900">{moment.title}</h3>
        <p className="text-gray-600 text-sm mt-1">{moment.description}</p>
        
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <span>{format(new Date(moment.date), 'MMM d, yyyy')}</span>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={handleLike}
              className="flex items-center space-x-1 hover:text-indigo-600 transition-colors"
            >
              {isLiked ? (
                <HeartIconSolid className="h-5 w-5 text-red-500" />
              ) : (
                <HeartIcon className="h-5 w-5" />
              )}
              <span>{likesCount}</span>
            </button>
            
            <button className="flex items-center space-x-1 hover:text-indigo-600 transition-colors">
              <ChatBubbleLeftIcon className="h-5 w-5" />
              <span>{moment.comments}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}