import { format } from 'date-fns';
import { HeartIcon, ChatBubbleLeftIcon, EyeIcon } from '@heroicons/react/24/outline';
import { TrainingVideo } from '../../types/training';

interface VideoCardProps {
  video: TrainingVideo;
  onPlay: () => void;
}

export default function VideoCard({ video, onPlay }: VideoCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div 
        className="relative aspect-video cursor-pointer group"
        onClick={onPlay}
      >
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-indigo-600 border-b-8 border-b-transparent ml-1" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-white text-sm">
          {Math.floor(video.duration / 60)}:{String(video.duration % 60).padStart(2, '0')}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start space-x-3">
          <img
            src={video.uploadedBy.avatar}
            alt={video.uploadedBy.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-gray-900 line-clamp-2">{video.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{video.uploadedBy.name}</p>
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
              <span className="flex items-center">
                <EyeIcon className="h-4 w-4 mr-1" />
                {video.views}
              </span>
              <span className="flex items-center">
                <HeartIcon className="h-4 w-4 mr-1" />
                {video.likes}
              </span>
              <span className="flex items-center">
                <ChatBubbleLeftIcon className="h-4 w-4 mr-1" />
                {video.comments}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            {video.subcategory}
          </span>
          <span className="text-xs text-gray-500 ml-2">
            {format(new Date(video.uploadedAt), 'MMM d, yyyy')}
          </span>
        </div>
      </div>
    </div>
  );
}