import { useState } from 'react';
import { TrainingVideo, TrainingCategory } from '../types/training';
import VideoCard from '../components/training/VideoCard';
import VideoUploadModal from '../components/training/VideoUploadModal';
import { PlusIcon } from '@heroicons/react/24/outline';

const mockVideos: TrainingVideo[] = [
  {
    id: '1',
    title: 'Advanced Dribbling Techniques',
    description: 'Learn how to improve your ball control and dribbling skills',
    videoUrl: 'https://example.com/video1.mp4',
    thumbnail: 'https://placehold.co/800x450/png?text=Dribbling+Training',
    category: 'Technical Skills',
    subcategory: 'Dribbling',
    duration: 95, // seconds
    uploadedBy: {
      id: '1',
      name: 'John Coach',
      avatar: 'https://placehold.co/100x100/png?text=JC',
    },
    uploadedAt: '2024-02-20T10:00:00Z',
    likes: 245,
    comments: 18,
    views: 1200,
  },
  // Add more mock videos as needed
];

export default function TrainingVideos() {
  const [videos] = useState<TrainingVideo[]>(mockVideos);
  const [selectedCategory, setSelectedCategory] = useState<TrainingCategory | 'all'>('all');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const categories: (TrainingCategory | 'all')[] = [
    'all',
    'Technical Skills',
    'Physical Attributes',
    'Tactical Awareness',
    'Mental and Psychological',
  ];

  const filteredVideos = videos.filter(video => 
    selectedCategory === 'all' || video.category === selectedCategory
  );

  const handleUpload = async (formData: FormData) => {
    // Implement video upload logic
    console.log('Uploading video:', formData);
  };

  return (
    <div className="space-y-6 pb-16">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Training Videos</h1>
            <p className="text-gray-600">Share and learn from training videos</p>
          </div>
          <button
            onClick={() => setIsUploadModalOpen(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Upload Video
          </button>
        </div>
      </div>

      <div className="flex space-x-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
              selectedCategory === category
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            {category === 'all' ? 'All Categories' : category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            onPlay={() => console.log('Playing video:', video.id)}
          />
        ))}
      </div>

      <VideoUploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onUpload={handleUpload}
      />
    </div>
  );
}